import React from "react";
import classNames from "classnames";

// Components
import Typography, { ETypographyType } from "@Components/Elements/Typography";
import I18n from "@Components/Materials/I18n/I18n";

// Styles
import classes from "./classes.module.scss";

const CoverPage: React.FC = () => {
	return (
		<div className={classes["root"]}>
			<Typography
				type={ETypographyType.H3}
				className={classes["text-align-center"]}>
				<I18n map="pages.home.cover.conditions" />
			</Typography>

			<div className={classes["title-container"]}>
				<Typography
					type={ETypographyType.H1}
					className={classNames(
						classes["title"],
						classes["text-align-center"],
					)}>
					<I18n map="pages.home.cover.contract" />
				</Typography>

				<div className={classes["shape"]} />

				<Typography
					type={ETypographyType.H3}
					className={classNames(classes["text-align-center"])}>
					<I18n map="pages.home.cover.prestation" />
				</Typography>
			</div>

			<div className={classes["for-flex"]} />
		</div>
	);
};

export default CoverPage;
