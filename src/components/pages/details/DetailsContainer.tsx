import { Companies } from "@/components/pages/details/sections/Companies";
import { Email } from "@/components/pages/details/sections/Email";
import { FollowersAndFollowing } from "@/components/pages/details/sections/FollowersAndFollowing";
import { Location } from "@/components/pages/details/sections/Location";
import { Twitter } from "@/components/pages/details/sections/Twitter";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { TypographyMuted } from "@/components/ui/typography/muted";
import Blog from "./sections/Blog";
import StarredUser from "./sections/StarredUser";

const DetailsContainer = ({ data: user }) => {

	const {
		login,
		avatar_url,
		url,
		followers,
		following,
		blog,
		twitter_username,
		email,
		bio,
		location,
		company,
		name,
        id
	} = user;

	return (
		<div className="mt-4 flex justify-center items-center content-center flex-col">
			<Card className="w-[700px]">
				<CardContent className="flex items-center flex-col p-4">
					<Avatar className="w-[300px] h-[300px] rounded-full">
						<AvatarImage src={avatar_url} alt={`${login}Avatar`} />
						<AvatarFallback>{login.substring(0, 2)}</AvatarFallback>
					</Avatar>
					<StarredUser id={id} name={name}/>
					<TypographyMuted>{login}</TypographyMuted>
					<FollowersAndFollowing followers={followers} following={following} />
					<Blog blog={blog} />
					<Twitter twitter_username={twitter_username} />
					<Email email={email} />
					<Location location={location} />
					<Companies companiesString={company} />
				</CardContent>
			</Card>
		</div>
	);
};

export default DetailsContainer;
