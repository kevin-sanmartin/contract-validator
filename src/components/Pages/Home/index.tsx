"use client";

// Components
import CoverPage from "./CoverPage";
import Parts from "./Parts";
import Object from "./Object";
import Collections from "./Collections";
import Livrable from "./Livrable";

// Styles
import classes from "./classes.module.scss";

export default function Home() {
	return (
		<main className={classes["root"]}>
			<CoverPage />
			<Parts />
			<Object />
			<Collections />
			<Livrable />
		</main>
	);
}
