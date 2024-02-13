"use client";
import { useEffect } from "react";
import "./globals.scss";

// Services
import AutoLoadService from "@Services/AutoLoad";

export default function RootLayout({ children }: { children: React.ReactNode }) {
	useEffect(() => {
		AutoLoadService.load();
	}, []);

	return (
		<html lang="en">
			{/* suppressHydrationWarning is set to true because of warning
            due to jsPDF or html2canvas injecting extra attributes to body tag */}
			<body suppressHydrationWarning>{children}</body>
		</html>
	);
}
