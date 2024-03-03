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

const Parts: React.FC = () => {
	return (
		<section className={classes["root"]}>
			<SectionTitle
				upperTitle="pages.home.parts.uppertitle"
				title="pages.home.parts.title"
			/>

			<div className={classes["content"]}>
				<Typography
					type={ETypographyType.H3}
					className={classes["text-align-center"]}>
					<I18n map="pages.home.parts.photographer" />
				</Typography>

				<div className={classes["photographer-infos"]}>
					<Typography type={ETypographyType.P}>
						<I18n map="pages.home.parts.photographer_infos.name" />
					</Typography>
					<Typography type={ETypographyType.P}>
						<I18n map="pages.home.parts.photographer_infos.birth" />
					</Typography>
					<Typography type={ETypographyType.P}>
						<I18n map="pages.home.parts.photographer_infos.address" />
					</Typography>
					<Typography type={ETypographyType.P}>
						<I18n map="pages.home.parts.photographer_infos.phone" />
					</Typography>
					<Typography type={ETypographyType.P}>
						<I18n map="pages.home.parts.photographer_infos.email" />
					</Typography>
					<Typography type={ETypographyType.P}>
						<I18n map="pages.home.parts.photographer_infos.siret" />
					</Typography>
				</div>

				<Image
					src={"/design/and.png"}
					alt="And"
					width={100}
					height={100}
					className={classes["and-image"]}
				/>

				<div className={classes["client-title-container"]}>
					<Typography
						type={ETypographyType.H3}
						className={classes["text-align-center"]}>
						<I18n map="pages.home.parts.client" />
					</Typography>
					<Typography
						type={ETypographyType.P}
						weight={ETypographyWeight.LIGHT}
						fontStyle={ETypographyFontStyle.ITALIC}
						className={classes["text-align-center"]}>
						<I18n map="pages.home.parts.buyer" />
					</Typography>
				</div>

				<div className={classes["buyer-infos"]}>
					<Typography type={ETypographyType.P}>
						<I18n map="pages.home.parts.buyer_infos.name" />
					</Typography>
					<Typography type={ETypographyType.P}>
						<I18n map="pages.home.parts.buyer_infos.birthdate" />
					</Typography>
					<Typography type={ETypographyType.P}>
						<I18n map="pages.home.parts.buyer_infos.address" />
					</Typography>
					<Typography type={ETypographyType.P}>
						<I18n map="pages.home.parts.buyer_infos.email" />
					</Typography>
					<Typography type={ETypographyType.P}>
						<I18n map="pages.home.parts.buyer_infos.phone" />
					</Typography>
				</div>
			</div>
		</section>
	);
};

export default Parts;
