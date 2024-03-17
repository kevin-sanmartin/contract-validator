import React, { useCallback } from "react";

// Components
import Typography, { ETypographyType } from "../Typography";
import I18n from "@Components/Materials/I18n/I18n";

// Styles
import classes from "./classes.module.scss";

type IProps = {
	label: string;
};

const CheckboxButton: React.FC<IProps> = ({ label }) => {
	return (
		<label className={classes["root"]}>
			<input type="checkbox" />
			<Typography type={ETypographyType.P}>
				<I18n map={label} />
			</Typography>
		</label>
	);
};

export default CheckboxButton;
