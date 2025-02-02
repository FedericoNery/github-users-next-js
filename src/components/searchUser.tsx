import { Input } from "@/components/ui/input";
import { useGlobalState } from "@/context/UserContext";
import { useDebounceAndThrottle } from "@/hooks/useDebounceAndThrottle";
import { Search } from "lucide-react";

const SearchUser = () => {
	const { onChangeSearchUsernameValue } = useGlobalState()
	const { setInstantValue } = useDebounceAndThrottle(500, 1000, onChangeSearchUsernameValue);

	return (
		<div className="flex items-center w-full ml-3 mr-3 border rounded-md focus-visible:border-black">
			<div className="pt-2 pl-2 pb-2">
				<Search />
			</div>
			<Input
				type="search"
				placeholder="Username"
				id="inputUsername"
				onChange={(e) => setInstantValue(e.target.value)}
				className="border-none pl-2 focus-visible:ring-0 focus-visible:ring-offset-0"
			/>
		</div>
	);
};

export default SearchUser;
