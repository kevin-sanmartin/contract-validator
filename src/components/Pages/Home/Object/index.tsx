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

const Object: React.FC = () => (
	<section className={classes["root"]}>
		<SectionTitle
			upperTitle="pages.home.object.uppertitle"
			title="pages.home.object.title"
		/>

		<div className={classes["contract-object"]}>
			<div className={classes["title-container"]}>
				<Typography type={ETypographyType.H3} isCentered>
					<I18n map="pages.home.object.contract_object" />
				</Typography>
				<Typography
					type={ETypographyType.P}
					weight={ETypographyWeight.LIGHT}
					isCentered>
					<I18n map="pages.home.object.prestation" />
				</Typography>
			</div>

			<Typography type={ETypographyType.P}>
				<I18n map="pages.home.object.modifications" />
			</Typography>

			<div className={classes["seance-infos"]}>
				<Typography type={ETypographyType.P}>
					<I18n map="pages.home.object.seance.date" />
				</Typography>
				<Typography type={ETypographyType.P}>
					<I18n map="pages.home.object.seance.time" />
				</Typography>
				<Typography type={ETypographyType.P}>
					<I18n map="pages.home.object.seance.location" />
				</Typography>
			</div>

			<Typography type={ETypographyType.P} weight={ETypographyWeight.MEDIUM}>
				<I18n map="pages.home.object.important" />
			</Typography>
		</div>

		<div className={classes["people"]}>
			<div className={classes["title-container"]}>
				<Image src="/design/star.png" alt="star" width={100} height={100} />
				<Typography type={ETypographyType.H3} isCentered>
					<I18n map="pages.home.object.people" />
				</Typography>
			</div>

			<div className={classes["line-container"]}>
				<div className={classes["line"]} />
				<div className={classes["line"]} />
				<div className={classes["line"]} />
				<div className={classes["line"]} />
				<div className={classes["line"]} />
			</div>

			<Typography type={ETypographyType.P} weight={ETypographyWeight.SEMIBOLD}>
				<I18n map="pages.home.object.style" />
			</Typography>
		</div>
	</section>
);

export default Object;
