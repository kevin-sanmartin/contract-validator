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

const Livrable: React.FC = () => {
	return (
		<section className={classes["root"]}>
			<SectionTitle
				upperTitle="pages.home.livrable.uppertitle"
				title="pages.home.livrable.title"
				subtitle="pages.home.livrable.subtitle"
			/>

			<Typography type={ETypographyType.P}>
				<I18n map="pages.home.livrable.post_production" />
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
				<I18n map="pages.home.livrable.livrables.title" />
			</Typography>

			<Typography type={ETypographyType.P}>
				<I18n map="pages.home.livrable.livrables.numeric_files" />
			</Typography>

			<Typography type={ETypographyType.P}>
				<I18n map="pages.home.livrable.livrables.physical_support" />
			</Typography>

			<Typography type={ETypographyType.P}>
				<I18n map="pages.home.livrable.livrables.book" />
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
				<I18n map="pages.home.livrable.delivery_times.title" />
			</Typography>

			<Typography type={ETypographyType.P}>
				<I18n map="pages.home.livrable.delivery_times.delay" />
			</Typography>

			<Typography type={ETypographyType.P}>
				<I18n map="pages.home.livrable.delivery_times.third_party" />
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
				<I18n map="pages.home.livrable.payment_terms.title" />
			</Typography>

			<Typography type={ETypographyType.P}>
				<I18n map="pages.home.livrable.payment_terms.service_execution" />
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
				<I18n map="pages.home.livrable.save.title" />
			</Typography>

			<Typography type={ETypographyType.P}>
				<I18n map="pages.home.livrable.save.period" />
			</Typography>

			<Typography type={ETypographyType.P}>
				<I18n map="pages.home.livrable.save.access" />
			</Typography>

			<Typography type={ETypographyType.P}>
				<I18n map="pages.home.livrable.save.responsible" />
			</Typography>

			<Typography type={ETypographyType.P}>
				<I18n map="pages.home.livrable.save.backup" />
			</Typography>
		</section>
	);
};

export default Livrable;
