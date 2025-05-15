import { FavouriteButtonContainer } from "@/components/features/users/FavouriteButtonContainer";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";

export function CardUser({ user }) {
	const { login, avatar_url, url, id } = user;

	return (
		<Card className="w-11/12 md:w-[700px] lg:w-[700px] xl:w-[700px] 2xl:w-[700px] bg-white shadow-sm hover:shadow-lg hover:cursor-pointer transition-shadow duration-300 ease-in-out mb-2">
			<CardContent className="flex items-center justify-between p-4">
				<div className="flex items-center">
					<Avatar>
						<AvatarImage src={avatar_url} alt={`${login}Avatar`} />
						<AvatarFallback>{login.substring(0, 2)}</AvatarFallback>
					</Avatar>
					<Link href={`/users/${login}`} className="ml-2">
						{login}
					</Link>
				</div>
				<div className="mr-2">
					<FavouriteButtonContainer userId={id} />
				</div>
			</CardContent>
		</Card>
	);
}
