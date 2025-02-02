import Image from "next/image";
import { useRouter } from "next/router";
import SearchUser from "./searchUser";

const Show = ({ when, children }) => {
	return when && children;
};

const Navbar = () => {
	const router = useRouter();
	const { pathname } = router;
	const isHomeRoute = pathname === "/";

	return (
		<>
			<header className="flex items-center pt-4 pb-4 rounded-none border">
				<Image
					src="/github.svg"
					alt="Github Logo"
					width={32}
					height={32}
					className="ml-6"
				/>
				<Show when={isHomeRoute}>
					<SearchUser />
				</Show>
			</header>
		</>
	);
};

export default Navbar;
