import { Metadata } from "next";

// Components
import Components from "@Components/Pages/Components";

export const metadata: Metadata = {
	title: "Contract Validator - Components",
	description: "Components page.",
};

export default async function Page() {
	return <Components />;
}
