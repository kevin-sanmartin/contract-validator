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

const Collections: React.FC = () => {
	return (
		<section className={classes["root"]}>
			<SectionTitle
				upperTitle="pages.home.collections.uppertitle"
				title="pages.home.collections.title"
				subtitle="pages.home.collections.subtitle"
			/>

			<Typography type={ETypographyType.P}>
				<I18n map="pages.home.collections.tva" />
			</Typography>

			<Typography
				type={ETypographyType.H3}
				weight={ETypographyWeight.MEDIUM}
				isCentered>
				<I18n map="pages.home.collections.seance" />
			</Typography>

			<Typography type={ETypographyType.P}>
				<I18n map="pages.home.collections.price_warranted" />
			</Typography>

			<Typography type={ETypographyType.P}>
				<I18n map="pages.home.collections.process" />
			</Typography>

			<Typography
				type={ETypographyType.H3}
				weight={ETypographyWeight.MEDIUM}
				isCentered>
				<I18n map="pages.home.collections.unique_price" />
			</Typography>

			<Typography type={ETypographyType.P} weight={ETypographyWeight.MEDIUM}>
				<I18n map="pages.home.collections.fees" />
			</Typography>

			<Typography
				type={ETypographyType.P}
				weight={ETypographyWeight.LIGHT}
				fontStyle={ETypographyFontStyle.ITALIC}>
				<I18n map="pages.home.collections.perimeter" />
			</Typography>

			<div className={classes["reservation-container"]}>
				<Typography type={ETypographyType.P} weight={ETypographyWeight.MEDIUM}>
					<I18n map="pages.home.collections.seance_prices.reservation" />
				</Typography>

				<Typography
					type={ETypographyType.P}
					weight={ETypographyWeight.LIGHT}
					fontStyle={ETypographyFontStyle.ITALIC}>
					<I18n map="pages.home.collections.seance_prices.reservation_description" />
				</Typography>
			</div>

			<div className={classes["formula-container"]}>
				<Typography type={ETypographyType.P} weight={ETypographyWeight.MEDIUM}>
					<I18n map="pages.home.collections.seance_prices.formula" />
				</Typography>

				<ul className={classes["formula-list"]}>
					<li>
						<Typography type={ETypographyType.P}>
							<I18n map="pages.home.collections.seance_prices.five_pictures" />
						</Typography>
					</li>

					<li>
						<Typography type={ETypographyType.P}>
							<I18n map="pages.home.collections.seance_prices.ten_pictures" />
						</Typography>
					</li>
					<li>
						<Typography type={ETypographyType.P}>
							<I18n map="pages.home.collections.seance_prices.fifteen_pictures" />
						</Typography>
					</li>
					<li>
						<Typography type={ETypographyType.P}>
							<I18n map="pages.home.collections.seance_prices.all_pictures" />
						</Typography>
					</li>
				</ul>
			</div>

			<div className={classes["client-cost-container"]}>
				<Typography
					type={ETypographyType.H3}
					weight={ETypographyWeight.MEDIUM}
					isCentered>
					<I18n map="pages.home.collections.client_cost.title" />
				</Typography>

				<Typography
					type={ETypographyType.P}
					weight={ETypographyWeight.LIGHT}
					fontStyle={ETypographyFontStyle.ITALIC}
					isCentered>
					<I18n map="pages.home.collections.client_cost.travel_cost" />
				</Typography>
			</div>

			<Typography type={ETypographyType.P}>
				<I18n map="pages.home.collections.client_cost.description_travel_cost" />
			</Typography>

			<Typography type={ETypographyType.P}>
				<I18n map="pages.home.collections.client_cost.invoice" />
			</Typography>

			<Image
				src={starImagePath}
				alt="star"
				width={100}
				height={100}
				className={classes["star-image"]}
			/>

			<div className={classes["total-price-container"]}>
				<Typography
					type={ETypographyType.H3}
					weight={ETypographyWeight.MEDIUM}
					isCentered>
					<I18n map="pages.home.collections.total_price.title" />
				</Typography>

				<Typography
					type={ETypographyType.P}
					weight={ETypographyWeight.LIGHT}
					fontStyle={ETypographyFontStyle.ITALIC}
					isCentered>
					<I18n map="pages.home.collections.total_price.subtitle" />
				</Typography>
			</div>

			<Typography type={ETypographyType.P}>
				<I18n map="pages.home.collections.total_price.upon_signature" />
			</Typography>

			<Typography type={ETypographyType.P} weight={ETypographyWeight.MEDIUM}>
				<I18n map="pages.home.collections.total_price.session_price_paid" />
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
				<I18n map="pages.home.collections.payment_terms.title" />
			</Typography>

			<Typography type={ETypographyType.P}>
				<I18n map="pages.home.collections.payment_terms.sign_contract" />
			</Typography>

			<Typography type={ETypographyType.P}>
				<I18n map="pages.home.collections.payment_terms.delay" />
			</Typography>

			<Typography type={ETypographyType.P}>
				<I18n map="pages.home.collections.payment_terms.means_of_payment" />
			</Typography>

			<div className={classes["gift-container"]}>
				<Typography type={ETypographyType.H3} weight={ETypographyWeight.MEDIUM}>
					<I18n map="pages.home.collections.payment_terms.gift" />
				</Typography>

				<Typography type={ETypographyType.P}>
					<I18n map="pages.home.collections.payment_terms.gift_description" />
				</Typography>
			</div>

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
				<I18n map="pages.home.collections.withdrawal_rights.title" />
			</Typography>

			<Typography type={ETypographyType.P}>
				<I18n map="pages.home.collections.withdrawal_rights.agreement" />
			</Typography>

			<Typography type={ETypographyType.P} weight={ETypographyWeight.MEDIUM}>
				<I18n map="pages.home.collections.withdrawal_rights.extract" />
			</Typography>

			<Typography type={ETypographyType.P} fontStyle={ETypographyFontStyle.ITALIC}>
				<I18n map="pages.home.collections.withdrawal_rights.extract_description" />
			</Typography>
		</section>
	);
};

export default Collections;
