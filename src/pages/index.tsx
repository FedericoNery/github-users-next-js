import HomeContainer from "@/components/pages/home/HomeContainer";
import { SkeletonCardUser } from "@/components/pages/home/SkeletonCardUser";
import RenderData from "@/components/renderData";
import { useUsers } from "@/hooks/useUsers";

interface UserInterface {
	login: string;
	id: number;
	node_id: string;
	avatar_url: string;
	gravatar_id: string;
	url: string;
	html_url: string;
	followers_url: string;
	following_url: string;
	gists_url: string;
	starred_url: string;
	subscriptions_url: string;
	organizations_url: string;
	repos_url: string;
	events_url: string;
	received_events_url: string;
	type: string;
	site_admin: boolean;
}

const LoadingComponent = () => {
	return (
		<div className="flex justify-center flex-col items-center">
			<div className="flex items-center flex-col mb-3 gap-4 mt-4 w-full">
				<SkeletonCardUser quantity={8} />
			</div>
		</div>
	);
};

const NotFoundComponent = () => {
	return <p>No se encontraron usuarios</p>;
};

export async function getStaticProps() {
	try {
		const response = await fetch("http://localhost:3002/api/users/");
		if (!response.ok) {
			throw new Error("Network response was not ok");
		}
		const initialUsers = await response.json();

		return { props: { initialUsers }, revalidate: 300 };
	} catch (error) {
		return { props: { initialUsers: [] } };
	}
}

export default function Home({initialUsers}) {
	const { data: users, loading, error } = useUsers(initialUsers);

	return (
		<RenderData
			loading={loading}
			error={error}
			data={users}
			LoadingComponent={LoadingComponent}
			NotFoundComponent={NotFoundComponent}
			DataComponent={HomeContainer}
		/>
	);
}


