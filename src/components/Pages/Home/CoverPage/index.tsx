import React from "react";

// Components
import Typography, { ETypographyType } from "@Components/Elements/Typography";
import I18n from "@Components/Materials/I18n/I18n";

// Styles
import classes from "./classes.module.scss";

const CoverPage: React.FC = () => {
	return (
		<section className={classes["root"]}>
			<Typography type={ETypographyType.H3} isCentered>
				<I18n map="pages.home.cover.conditions" />
			</Typography>

			<div className={classes["title-container"]}>
				<Typography
					type={ETypographyType.H1}
					className={classes["title"]}
					isCentered>
					<I18n map="pages.home.cover.contract" />
				</Typography>

				<div className={classes["shape"]} />

				<Typography type={ETypographyType.H3} isCentered>
					<I18n map="pages.home.cover.prestation" />
				</Typography>
			</div>

			<div className={classes["for-flex"]} />
		</section>
	);
};

export default CoverPage;
