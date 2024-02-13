"use client";

// Helpers
import { convertHTMLToPDF } from "src/helpers/ConvertHTMLToPDF";

// Styles
import classes from "./classes.module.scss";

export default function Home() {
	return (
		<main id="contract-container" className={classes["root"]}>
			<p>Je suis un text</p>
			<input type="text" />
			<button onClick={convertHTMLToPDF}>Télécharger en PDF</button>
		</main>
	);
}
