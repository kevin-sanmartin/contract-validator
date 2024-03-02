import React from "react";

// Styles
import classes from "./classes.module.scss";
import Typography, {
	ETypographyFontStyle,
	ETypographySize,
	ETypographyType,
	ETypographyWeight,
} from "@Components/Elements/Text";
import I18n from "@Components/Materials/I18n/I18n";

type IProps = {};

const CoverPage: React.FC<IProps> = (props) => {
	return <div className={classes["root"]}></div>;
};

export default CoverPage;
