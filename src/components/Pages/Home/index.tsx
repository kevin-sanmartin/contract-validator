"use client";

// Components
import CoverPage from "./CoverPage";
import Parts from "./Parts";
import Object from "./Object";
import Collections from "./Collections";
import Livrable from "./Livrable";
import Collaboration from "./Collaboration";
import Copyright from "./Copyright";
import Changes from "./Changes";

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
			<Collaboration />
			<Copyright />
			<Changes />
		</main>
	);
}
