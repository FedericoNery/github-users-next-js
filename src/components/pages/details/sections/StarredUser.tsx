import { FavouriteButtonContainer } from "@/components/features/users/FavouriteButtonContainer";
import { TypographyH1 } from "@/components/ui/typography/h1";

const StarredUser = ({ id, name }) => {
	return (
		<div className="flex justify-center items-center gap-2">
			<TypographyH1>{name}</TypographyH1>
			<FavouriteButtonContainer userId={id} />
		</div>
	);
};

export default StarredUser;
