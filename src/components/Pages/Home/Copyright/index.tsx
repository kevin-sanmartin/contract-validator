import React, { useCallback, useState } from "react";
import Image from "next/image";

// Components
import SectionTitle from "@Components/Materials/SectionTitle";
import Typography, {
	ETypographyType,
	ETypographyWeight,
} from "@Components/Elements/Typography";
import I18n from "@Components/Materials/I18n/I18n";
import CheckboxButton from "@Components/Elements/CheckboxButton";

// Styles
import classes from "./classes.module.scss";

const starImagePath = "/design/star.png";

const Copyright: React.FC = () => {
	return (
		<section className={classes["root"]}>
			<SectionTitle
				upperTitle="pages.home.copyright.uppertitle"
				title="pages.home.copyright.title"
			/>

			<Typography
				type={ETypographyType.H3}
				weight={ETypographyWeight.MEDIUM}
				isCentered>
				<I18n map="pages.home.copyright.photographer_copyright.title" />
			</Typography>

			<Typography type={ETypographyType.P} weight={ETypographyWeight.MEDIUM}>
				<I18n map="pages.home.copyright.photographer_copyright.original_work" />
			</Typography>

			<Typography type={ETypographyType.P}>
				<I18n map="pages.home.copyright.photographer_copyright.personnal_use" />
			</Typography>

			<Typography type={ETypographyType.P}>
				<I18n map="pages.home.copyright.photographer_copyright.violation" />
			</Typography>

			<Typography type={ETypographyType.P}>
				<I18n map="pages.home.copyright.photographer_copyright.modify" />
			</Typography>

			<Typography type={ETypographyType.P}>
				<I18n map="pages.home.copyright.photographer_copyright.rules" />
			</Typography>

			<Typography type={ETypographyType.P}>
				<I18n map="pages.home.copyright.photographer_copyright.reproduce" />
			</Typography>

			<Typography type={ETypographyType.P}>
				<I18n map="pages.home.copyright.photographer_copyright.cite" />
			</Typography>

			<Typography type={ETypographyType.P} weight={ETypographyWeight.LIGHT}>
				<I18n map="pages.home.copyright.photographer_copyright.links" />
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
				<I18n map="pages.home.copyright.image_rights.title" />
			</Typography>

			<Typography type={ETypographyType.P}>
				<I18n map="pages.home.copyright.image_rights.signature" />
			</Typography>

			<Typography type={ETypographyType.P}>
				<I18n map="pages.home.copyright.image_rights.agreement.title" />
			</Typography>

			<div className={classes["checkbox-buttons-container"]}>
				{Array.from({ length: 9 }, (_, index) => {
					const label = `pages.home.copyright.image_rights.agreement.choice_${
						index + 1
					}`;
					return <CheckboxButton key={index} label={label} />;
				})}
			</div>

			<Typography type={ETypographyType.P}>
				<I18n map="pages.home.copyright.image_rights.choice" />
			</Typography>

			<Typography type={ETypographyType.P}>
				<I18n map="pages.home.copyright.image_rights.all_images" />
			</Typography>

			<Typography type={ETypographyType.P}>
				<I18n map="pages.home.copyright.image_rights.certain_images" />
			</Typography>

			<Typography type={ETypographyType.P}>
				<I18n map="pages.home.copyright.image_rights.prohibited" />
			</Typography>

			<Typography type={ETypographyType.P}>
				<I18n map="pages.home.copyright.image_rights.reputation" />
			</Typography>
		</section>
	);
};

export default Copyright;
