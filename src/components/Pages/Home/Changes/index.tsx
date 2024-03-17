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

const Changes: React.FC = () => {
	return (
		<section className={classes["root"]}>
			<SectionTitle
				upperTitle="pages.home.changes.uppertitle"
				title="pages.home.changes.title"
				subtitle="pages.home.changes.subtitle"
			/>

			<Typography
				type={ETypographyType.H3}
				weight={ETypographyWeight.MEDIUM}
				isCentered>
				<I18n map="pages.home.changes.force_majeure.title" />
			</Typography>

			<Typography type={ETypographyType.P}>
				<I18n map="pages.home.changes.force_majeure.reschedule" />
			</Typography>

			<Image
				src={starImagePath}
				alt="star"
				width={100}
				height={100}
				className={classes["star-image"]}
			/>

			<Typography
				type={ETypographyType.H3}
				weight={ETypographyWeight.MEDIUM}
				isCentered>
				<I18n map="pages.home.changes.refusal.title" />
			</Typography>

			<Typography type={ETypographyType.P}>
				<I18n map="pages.home.changes.refusal.renounces" />
			</Typography>

			<Image
				src={starImagePath}
				alt="star"
				width={100}
				height={100}
				className={classes["star-image"]}
			/>

			<Typography
				type={ETypographyType.H3}
				weight={ETypographyWeight.MEDIUM}
				isCentered>
				<I18n map="pages.home.changes.renegociation.title" />
			</Typography>

			<Typography type={ETypographyType.P}>
				<I18n map="pages.home.changes.renegociation.alternative_solution" />
			</Typography>

			<Typography type={ETypographyType.P}>
				<I18n map="pages.home.changes.renegociation.consequences" />
			</Typography>

			<Image
				src={starImagePath}
				alt="star"
				width={100}
				height={100}
				className={classes["star-image"]}
			/>

			<Typography
				type={ETypographyType.H3}
				weight={ETypographyWeight.MEDIUM}
				isCentered>
				<I18n map="pages.home.changes.agreement.title" />
			</Typography>

			<Typography type={ETypographyType.P}>
				<I18n map="pages.home.changes.agreement.renegociate" />
			</Typography>

			<Typography type={ETypographyType.P}>
				<I18n map="pages.home.changes.agreement.respond_quickly" />
			</Typography>

			<Typography type={ETypographyType.P}>
				<I18n map="pages.home.changes.agreement.effectiveness" />
			</Typography>

			<Typography type={ETypographyType.P}>
				<I18n map="pages.home.changes.agreement.mediator" />
			</Typography>
		</section>
	);
};

export default Changes;
