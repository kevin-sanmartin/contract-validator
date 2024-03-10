import React from "react";
import Image from "next/image";

// Components
import SectionTitle from "@Components/Materials/SectionTitle";
import Typography, {
	ETypographyFontStyle,
	ETypographyType,
	ETypographyWeight,
} from "@Components/Elements/Typography";
import I18n from "@Components/Materials/I18n/I18n";

// Styles
import classes from "./classes.module.scss";

const starImagePath = "/design/star.png";

const Collaboration: React.FC = () => {
	return (
		<section className={classes["root"]}>
			<SectionTitle
				upperTitle="pages.home.collaboration.uppertitle"
				title="pages.home.collaboration.title"
			/>

			<Typography
				type={ETypographyType.H3}
				weight={ETypographyWeight.MEDIUM}
				isCentered>
				<I18n map="pages.home.collaboration.obligation.title" />
			</Typography>

			<Typography type={ETypographyType.P}>
				<I18n map="pages.home.collaboration.obligation.service" />
			</Typography>

			<Typography type={ETypographyType.P}>
				<I18n map="pages.home.collaboration.obligation.good_faith" />
			</Typography>

			<Typography type={ETypographyType.P}>
				<I18n map="pages.home.collaboration.obligation.no_claim" />
			</Typography>

			<Image
				src={starImagePath}
				alt="star"
				width={100}
				height={100}
				className={classes["star-image"]}
			/>

			<div className={classes["illustration-container"]}>
				<Typography
					type={ETypographyType.H3}
					weight={ETypographyWeight.MEDIUM}
					isCentered>
					<I18n map="pages.home.collaboration.illustration.title" />
				</Typography>

				<Typography
					type={ETypographyType.P}
					fontStyle={ETypographyFontStyle.ITALIC}
					weight={ETypographyWeight.LIGHT}
					isCentered>
					<I18n map="pages.home.collaboration.illustration.subtitle" />
				</Typography>
			</div>

			<Typography type={ETypographyType.P}>
				<I18n map="pages.home.collaboration.illustration.aforementioned_obligation" />
			</Typography>

			<Typography type={ETypographyType.P}>
				<I18n map="pages.home.collaboration.illustration.available" />
			</Typography>

			<Typography type={ETypographyType.P}>
				<I18n map="pages.home.collaboration.illustration.request" />
			</Typography>

			<Typography type={ETypographyType.P}>
				<I18n map="pages.home.collaboration.illustration.responsability" />
			</Typography>

			<Typography type={ETypographyType.P}>
				<I18n map="pages.home.collaboration.illustration.guarantee" />
			</Typography>

			<Typography type={ETypographyType.P}>
				<I18n map="pages.home.collaboration.illustration.delay" />
			</Typography>
		</section>
	);
};

export default Collaboration;
