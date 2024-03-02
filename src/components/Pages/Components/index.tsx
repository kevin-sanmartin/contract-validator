import React, { PropsWithChildren } from "react";

// Components
import Typography, {
	ETypographyType,
	ETypographyWeight,
	ETypographyFontStyle,
	ETypographySize,
} from "@Components/Elements/Text";
import I18n from "@Components/Materials/I18n/I18n";

// Styles
import classes from "./classes.module.scss";

type IProps = PropsWithChildren & {};

const Components: React.FC<IProps> = (props) => {
	return (
		<main className={classes["root"]}>
			<Typography type={ETypographyType.H1} weight={ETypographyWeight.EXTRABOLD}>
				<I18n map="Title H1 Regular" />
			</Typography>
			<Typography type={ETypographyType.H1} weight={ETypographyWeight.BOLD}>
				<I18n map="Title H1 Regular" />
			</Typography>
			<Typography type={ETypographyType.H1} weight={ETypographyWeight.SEMIBOLD}>
				<I18n map="Title H1 Regular" />
			</Typography>
			<Typography type={ETypographyType.H1} weight={ETypographyWeight.MEDIUM}>
				<I18n map="Title H1 Regular" />
			</Typography>
			<Typography type={ETypographyType.H1} weight={ETypographyWeight.REGULAR}>
				<I18n map="Title H1 Regular" />
			</Typography>
			----------------------------------------------
			<Typography
				type={ETypographyType.H1}
				weight={ETypographyWeight.EXTRABOLD}
				fontStyle={ETypographyFontStyle.ITALIC}>
				<I18n map="Title H1 Italic" />
			</Typography>
			<Typography
				type={ETypographyType.H1}
				weight={ETypographyWeight.BOLD}
				fontStyle={ETypographyFontStyle.ITALIC}>
				<I18n map="Title H1 Italic" />
			</Typography>
			<Typography
				type={ETypographyType.H1}
				weight={ETypographyWeight.SEMIBOLD}
				fontStyle={ETypographyFontStyle.ITALIC}>
				<I18n map="Title H1 Italic" />
			</Typography>
			<Typography
				type={ETypographyType.H1}
				weight={ETypographyWeight.MEDIUM}
				fontStyle={ETypographyFontStyle.ITALIC}>
				<I18n map="Title H1 Italic" />
			</Typography>
			<Typography
				type={ETypographyType.H1}
				weight={ETypographyWeight.REGULAR}
				fontStyle={ETypographyFontStyle.ITALIC}>
				<I18n map="Title H1 Italic" />
			</Typography>
			----------------------------------------------
			<Typography type={ETypographyType.H2} weight={ETypographyWeight.EXTRABOLD}>
				<I18n map="Title H2 Regular" />
			</Typography>
			<Typography type={ETypographyType.H2} weight={ETypographyWeight.BOLD}>
				<I18n map="Title H2 Regular" />
			</Typography>
			<Typography type={ETypographyType.H2} weight={ETypographyWeight.SEMIBOLD}>
				<I18n map="Title H2 Regular" />
			</Typography>
			<Typography type={ETypographyType.H2} weight={ETypographyWeight.MEDIUM}>
				<I18n map="Title H2 Regular" />
			</Typography>
			<Typography type={ETypographyType.H2} weight={ETypographyWeight.REGULAR}>
				<I18n map="Title H2 Regular" />
			</Typography>
			----------------------------------------------
			<Typography
				type={ETypographyType.H2}
				weight={ETypographyWeight.EXTRABOLD}
				fontStyle={ETypographyFontStyle.ITALIC}>
				<I18n map="Title H2 Italic" />
			</Typography>
			<Typography
				type={ETypographyType.H2}
				weight={ETypographyWeight.BOLD}
				fontStyle={ETypographyFontStyle.ITALIC}>
				<I18n map="Title H2 Italic" />
			</Typography>
			<Typography
				type={ETypographyType.H2}
				weight={ETypographyWeight.SEMIBOLD}
				fontStyle={ETypographyFontStyle.ITALIC}>
				<I18n map="Title H2 Italic" />
			</Typography>
			<Typography
				type={ETypographyType.H2}
				weight={ETypographyWeight.MEDIUM}
				fontStyle={ETypographyFontStyle.ITALIC}>
				<I18n map="Title H2 Italic" />
			</Typography>
			<Typography
				type={ETypographyType.H2}
				weight={ETypographyWeight.REGULAR}
				fontStyle={ETypographyFontStyle.ITALIC}>
				<I18n map="Title H2 Italic" />
			</Typography>
			----------------------------------------------
			<Typography type={ETypographyType.H3} weight={ETypographyWeight.EXTRABOLD}>
				<I18n map="Title H3 Regular" />
			</Typography>
			<Typography type={ETypographyType.H3} weight={ETypographyWeight.BOLD}>
				<I18n map="Title H3 Regular" />
			</Typography>
			<Typography type={ETypographyType.H3} weight={ETypographyWeight.SEMIBOLD}>
				<I18n map="Title H3 Regular" />
			</Typography>
			<Typography type={ETypographyType.H3} weight={ETypographyWeight.MEDIUM}>
				<I18n map="Title H3 Regular" />
			</Typography>
			<Typography type={ETypographyType.H3} weight={ETypographyWeight.REGULAR}>
				<I18n map="Title H3 Regular" />
			</Typography>
			----------------------------------------------
			<Typography
				type={ETypographyType.H3}
				weight={ETypographyWeight.EXTRABOLD}
				fontStyle={ETypographyFontStyle.ITALIC}>
				<I18n map="Title H3 Italic" />
			</Typography>
			<Typography
				type={ETypographyType.H3}
				weight={ETypographyWeight.BOLD}
				fontStyle={ETypographyFontStyle.ITALIC}>
				<I18n map="Title H3 Italic" />
			</Typography>
			<Typography
				type={ETypographyType.H3}
				weight={ETypographyWeight.SEMIBOLD}
				fontStyle={ETypographyFontStyle.ITALIC}>
				<I18n map="Title H3 Italic" />
			</Typography>
			<Typography
				type={ETypographyType.H3}
				weight={ETypographyWeight.MEDIUM}
				fontStyle={ETypographyFontStyle.ITALIC}>
				<I18n map="Title H3 Italic" />
			</Typography>
			<Typography
				type={ETypographyType.H3}
				weight={ETypographyWeight.REGULAR}
				fontStyle={ETypographyFontStyle.ITALIC}>
				<I18n map="Title H3 Italic" />
			</Typography>
			----------------------------------------------
			<Typography
				type={ETypographyType.P}
				weight={ETypographyWeight.EXTRABOLD}
				size={ETypographySize.LARGE}>
				<I18n map="Title P Regular Size Large" />
			</Typography>
			<Typography
				type={ETypographyType.P}
				weight={ETypographyWeight.BOLD}
				size={ETypographySize.LARGE}>
				<I18n map="Title P Regular Size Large" />
			</Typography>
			<Typography
				type={ETypographyType.P}
				weight={ETypographyWeight.SEMIBOLD}
				size={ETypographySize.LARGE}>
				<I18n map="Title P Regular Size Large" />
			</Typography>
			<Typography
				type={ETypographyType.P}
				weight={ETypographyWeight.MEDIUM}
				size={ETypographySize.LARGE}>
				<I18n map="Title P Regular Size Large" />
			</Typography>
			<Typography
				type={ETypographyType.P}
				weight={ETypographyWeight.REGULAR}
				size={ETypographySize.LARGE}>
				<I18n map="Title P Regular Size Large" />
			</Typography>
			----------------------------------------------
			<Typography
				type={ETypographyType.P}
				weight={ETypographyWeight.EXTRABOLD}
				size={ETypographySize.MEDIUM}>
				<I18n map="Title P Regular Size Medium" />
			</Typography>
			<Typography
				type={ETypographyType.P}
				weight={ETypographyWeight.BOLD}
				size={ETypographySize.MEDIUM}>
				<I18n map="Title P Regular Size Medium" />
			</Typography>
			<Typography
				type={ETypographyType.P}
				weight={ETypographyWeight.SEMIBOLD}
				size={ETypographySize.MEDIUM}>
				<I18n map="Title P Regular Size Medium" />
			</Typography>
			<Typography
				type={ETypographyType.P}
				weight={ETypographyWeight.MEDIUM}
				size={ETypographySize.MEDIUM}>
				<I18n map="Title P Regular Size Medium" />
			</Typography>
			<Typography
				type={ETypographyType.P}
				weight={ETypographyWeight.REGULAR}
				size={ETypographySize.MEDIUM}>
				<I18n map="Title P Regular Size Medium" />
			</Typography>
			----------------------------------------------
			<Typography type={ETypographyType.P} weight={ETypographyWeight.EXTRABOLD}>
				<I18n map="Title P Regular Size Small" />
			</Typography>
			<Typography type={ETypographyType.P} weight={ETypographyWeight.BOLD}>
				<I18n map="Title P Regular Size Small" />
			</Typography>
			<Typography type={ETypographyType.P} weight={ETypographyWeight.SEMIBOLD}>
				<I18n map="Title P Regular Size Small" />
			</Typography>
			<Typography type={ETypographyType.P} weight={ETypographyWeight.MEDIUM}>
				<I18n map="Title P Regular Size Small" />
			</Typography>
			<Typography type={ETypographyType.P} weight={ETypographyWeight.REGULAR}>
				<I18n map="Title P Regular Size Small" />
			</Typography>
			----------------------------------------------
			<Typography
				type={ETypographyType.P}
				weight={ETypographyWeight.EXTRABOLD}
				size={ETypographySize.LARGE}
				fontStyle={ETypographyFontStyle.ITALIC}>
				<I18n map="Title P Regular Size Large Italic" />
			</Typography>
			<Typography
				type={ETypographyType.P}
				weight={ETypographyWeight.BOLD}
				size={ETypographySize.LARGE}
				fontStyle={ETypographyFontStyle.ITALIC}>
				<I18n map="Title P Regular Size Large Italic" />
			</Typography>
			<Typography
				type={ETypographyType.P}
				weight={ETypographyWeight.SEMIBOLD}
				size={ETypographySize.LARGE}
				fontStyle={ETypographyFontStyle.ITALIC}>
				<I18n map="Title P Regular Size Large Italic" />
			</Typography>
			<Typography
				type={ETypographyType.P}
				weight={ETypographyWeight.MEDIUM}
				size={ETypographySize.LARGE}
				fontStyle={ETypographyFontStyle.ITALIC}>
				<I18n map="Title P Regular Size Large Italic" />
			</Typography>
			<Typography
				type={ETypographyType.P}
				weight={ETypographyWeight.REGULAR}
				size={ETypographySize.LARGE}
				fontStyle={ETypographyFontStyle.ITALIC}>
				<I18n map="Title P Regular Size Large Italic" />
			</Typography>
			----------------------------------------------
			<Typography
				type={ETypographyType.P}
				weight={ETypographyWeight.EXTRABOLD}
				size={ETypographySize.MEDIUM}
				fontStyle={ETypographyFontStyle.ITALIC}>
				<I18n map="Title P Regular Size Medium Italic" />
			</Typography>
			<Typography
				type={ETypographyType.P}
				weight={ETypographyWeight.BOLD}
				size={ETypographySize.MEDIUM}
				fontStyle={ETypographyFontStyle.ITALIC}>
				<I18n map="Title P Regular Size Medium Italic" />
			</Typography>
			<Typography
				type={ETypographyType.P}
				weight={ETypographyWeight.SEMIBOLD}
				size={ETypographySize.MEDIUM}
				fontStyle={ETypographyFontStyle.ITALIC}>
				<I18n map="Title P Regular Size Medium Italic" />
			</Typography>
			<Typography
				type={ETypographyType.P}
				weight={ETypographyWeight.MEDIUM}
				size={ETypographySize.MEDIUM}
				fontStyle={ETypographyFontStyle.ITALIC}>
				<I18n map="Title P Regular Size Medium Italic" />
			</Typography>
			<Typography
				type={ETypographyType.P}
				weight={ETypographyWeight.REGULAR}
				size={ETypographySize.MEDIUM}
				fontStyle={ETypographyFontStyle.ITALIC}>
				<I18n map="Title P Regular Size Medium Italic" />
			</Typography>
			----------------------------------------------
			<Typography
				type={ETypographyType.P}
				weight={ETypographyWeight.EXTRABOLD}
				fontStyle={ETypographyFontStyle.ITALIC}>
				<I18n map="Title P Regular Size Small Italic" />
			</Typography>
			<Typography
				type={ETypographyType.P}
				weight={ETypographyWeight.BOLD}
				fontStyle={ETypographyFontStyle.ITALIC}>
				<I18n map="Title P Regular Size Small Italic" />
			</Typography>
			<Typography
				type={ETypographyType.P}
				weight={ETypographyWeight.SEMIBOLD}
				fontStyle={ETypographyFontStyle.ITALIC}>
				<I18n map="Title P Regular Size Small Italic" />
			</Typography>
			<Typography
				type={ETypographyType.P}
				weight={ETypographyWeight.MEDIUM}
				fontStyle={ETypographyFontStyle.ITALIC}>
				<I18n map="Title P Regular Size Small Italic" />
			</Typography>
			<Typography
				type={ETypographyType.P}
				weight={ETypographyWeight.REGULAR}
				fontStyle={ETypographyFontStyle.ITALIC}>
				<I18n map="Title P Regular Size Small Italic" />
			</Typography>
		</main>
	);
};

export default Components;
