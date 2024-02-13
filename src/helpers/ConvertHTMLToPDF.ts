import jsPDF from "jspdf";
import html2canvas from "html2canvas";

export async function convertHTMLToPDF(): Promise<void> {
	const input = document.getElementById("contract-container");
	if (!input) return;

	try {
		const canvas = await html2canvas(input, { scale: 2 });

		const imgWidth = 210; // Largeur d'une page A4 en mm
		const pageHeight = 295; // Hauteur d'une page A4 en mm
		const imgHeight = (canvas.height * imgWidth) / canvas.width;
		let heightLeft = imgHeight;

		const imgData = canvas.toDataURL("image/png");
		let pdf = new jsPDF("p", "mm");
		let position = 0;

		pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
		heightLeft -= pageHeight;

		while (heightLeft >= 0) {
			position = heightLeft - imgHeight;
			pdf.addPage();
			pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
			heightLeft -= pageHeight;
		}

		pdf.save("contract.pdf");
	} catch (error) {
		console.error("Error while generating PDF", error);
	}
}
