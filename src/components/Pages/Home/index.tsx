"use client";

import CoverPage from "./CoverPage";
// Styles
import classes from "./classes.module.scss";

export default function Home() {
	return (
		<main className={classes["root"]}>
			<CoverPage />
		</main>
	);
}
