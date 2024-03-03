"use client";

// Components
import CoverPage from "./CoverPage";
import Parts from "./Parts";

// Styles
import classes from "./classes.module.scss";

export default function Home() {
	return (
		<main className={classes["root"]}>
			<CoverPage />
			<Parts />
		</main>
	);
}
