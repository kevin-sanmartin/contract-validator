import { Metadata } from "next";

// Components
import Home from "@Components/Pages/Home";

export const metadata: Metadata = {
	title: "Contract Validator",
	description: "Signez votre contrat en ligne en toute sécurité.",
};

export default async function Page() {
	return <Home />;
}
