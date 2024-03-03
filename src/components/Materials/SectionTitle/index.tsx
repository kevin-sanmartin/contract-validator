import React from "react";

// Components
import Typography, {
	ETypographyType,
	ETypographyWeight,
} from "@Components/Elements/Typography";
import I18n from "../I18n/I18n";

// Styles
import classes from "./classes.module.scss";

type IProps = {
	upperTitle: string; // I18n key
	title: string; // I18n key
	subtitle?: string; // I18n key
};

const SectionTitle: React.FC<IProps> = (props) => {
	return (
		<div className={classes["root"]}>
			<Typography type={ETypographyType.H3} className={classes["uppertitle"]}>
				<I18n map={props.upperTitle} />
			</Typography>

			<Typography type={ETypographyType.H2} className={classes["title"]}>
				<I18n map={props.title} />
			</Typography>

			{props.subtitle && (
				<Typography
					type={ETypographyType.P}
					weight={ETypographyWeight.SEMIBOLD}
					className={classes["subtitle"]}>
					<I18n map={props.subtitle} />
				</Typography>
			)}

			<div className={classes["line"]} />
		</div>
	);
};

export default SectionTitle;
