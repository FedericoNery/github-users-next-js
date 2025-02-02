import { FavButton } from "@/components/pages/home/FavButton";
import { TypographyH1 } from "@/components/ui/typography/h1";
import { useGlobalState } from "@/context/UserContext";

const StarredUser = ({id, name}) => {
	const { starredUsers, setStarredUsers } = useGlobalState();

	const toggleFavUser = (userId) => {
		if (starredUsers.includes(userId)) {
			setStarredUsers([...starredUsers.filter((userStarredId) => userStarredId !== userId)]);
		} else {
			setStarredUsers([...starredUsers, userId]);
		}
	};

	return (
		<div className="flex justify-center items-center gap-2">
			<TypographyH1>{name}</TypographyH1>
			<FavButton
				isStarred={starredUsers.includes(id)}
				onClick={() => toggleFavUser(id)}
			/>
		</div>
	);
};

export default StarredUser;
