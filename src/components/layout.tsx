import Navbar from "./navbar";
import Footer from "./footer";
import { Inter } from "next/font/google";
import { HomeStateProvider } from "@/context/HomeContext";
import { DetailsStateProvider } from "@/context/DetailsContext";
const inter = Inter({ subsets: ["latin"] });

export default function Layout({ children }) {
	return (
		<HomeStateProvider>
			<DetailsStateProvider>
				<div className="flex flex-col min-h-screen">
					<Navbar />
					<main className="flex flex-grow justify-center">{children}</main>
					<Footer />
				</div>
			</DetailsStateProvider>
		</HomeStateProvider>
	);
}
