import { FavouriteButton } from "./FavouriteButton";
import { useStarredUsersState } from "@/context/DetailsContext";

export function FavouriteButtonContainer({ userId }) {
	const { isStarredUserBy, addStarToUser, removeStarToUser } =
		useStarredUsersState();
	const isStarred = isStarredUserBy(userId);

	const toggleFavUser = (userId) => {
		if (!isStarred) {
			addStarToUser(userId);
		} else {
			removeStarToUser(userId);
		}
	};

	return (
		<FavouriteButton
			isStarred={isStarred}
			onClick={() => toggleFavUser(userId)}
		/>
	);
}
