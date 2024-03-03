import React, { PropsWithChildren } from "react";
import classNames from "classnames";

// Styles
import classes from "./classes.module.scss";

export enum ETypographyType {
	H1 = "h1",
	H2 = "h2",
	H3 = "h3",
	P = "p",
	SPAN = "span",
}

export enum ETypographySize {
	LARGE = "large",
	MEDIUM = "medium",
	SMALL = "small",
}

export enum ETypographyWeight {
	EXTRABOLD = "extrabold",
	BOLD = "bold",
	SEMIBOLD = "semibold",
	MEDIUM = "medium",
	REGULAR = "regular",
}

export enum ETypographyFontStyle {
	NORMAL = "normal",
	ITALIC = "italic",
}

type IProps = PropsWithChildren & {
	type: ETypographyType;
	size?: ETypographySize;
	weight?: ETypographyWeight;
	fontStyle?: ETypographyFontStyle;
	className?: string;
};

const Typography: React.FC<IProps> = ({
	type,
	weight = ETypographyWeight.REGULAR,
	size = ETypographySize.MEDIUM,
	fontStyle = ETypographyFontStyle.NORMAL,
	className,
	children,
}) => {
	return React.createElement(type, {
		className: classNames(
			classes["root"],
			classes[type],
			classes[`size-${size}`],
			classes[`weight-${weight}`],
			classes[`font-style-${fontStyle}`],
			className,
		),
		children: children,
	});
};

export default Typography;
