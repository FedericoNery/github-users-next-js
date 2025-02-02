import { Link as LinkIcon } from "lucide-react";

const Blog = ({ blog }) => {
	return (
		blog && (
			<div className="flex justify-center items-center">
				<LinkIcon className="w-4 h-4 mr-2 text-gray-500" />
				<a href={blog} className="hover:underline">
					{blog}
				</a>
			</div>
		)
	);
};

export default Blog;
