import { useHomeState } from "@/context/HomeContext";
import { CardUser } from "./CardUser";
import { useStarredUsersState } from "@/context/DetailsContext";

const HomeContainer = ({ data: users }) => {
	return (
		<div className="flex justify-center flex-col items-center">
			<div className="flex items-center flex-col w-full gap-4 mt-4">
				{users.map((user, index) => (
					<CardUser key={`Paragraph${index}`} user={user} />
				))}
			</div>
		</div>
	);
};

export default HomeContainer;
