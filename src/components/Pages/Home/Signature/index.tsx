import React from "react";
import Image from "next/image";

// Components
import SectionTitle from "@Components/Materials/SectionTitle";
import Typography, {
	ETypographyType,
	ETypographyWeight,
} from "@Components/Elements/Typography";
import I18n from "@Components/Materials/I18n/I18n";

// Styles
import classes from "./classes.module.scss";

const starImagePath = "/design/star.png";

const Signature: React.FC = () => {
	return (
		<section className={classes["root"]}>
			<SectionTitle
				upperTitle="pages.home.signature.uppertitle"
				title="pages.home.signature.title"
				subtitle="pages.home.signature.subtitle"
			/>

			<Typography type={ETypographyType.H3} weight={ETypographyWeight.MEDIUM}>
				<I18n map="pages.home.signature.read_and_approve.title" />
			</Typography>

			<Typography type={ETypographyType.H3} weight={ETypographyWeight.MEDIUM}>
				<I18n map="pages.home.signature.read_and_approve.customer" />
			</Typography>

			<Typography type={ETypographyType.P}>
				<I18n map="pages.home.signature.read_and_approve.undersigned" />
			</Typography>

			<Typography type={ETypographyType.P}>
				<I18n map="pages.home.signature.read_and_approve.honor" />
			</Typography>

			<Image
				src={starImagePath}
				alt="star"
				width={100}
				height={100}
				className={classes["star-image"]}
			/>

			<Typography type={ETypographyType.H3} weight={ETypographyWeight.MEDIUM}>
				<I18n map="pages.home.signature.read_and_approve.photographer" />
			</Typography>
		</section>
	);
};

export default Signature;
