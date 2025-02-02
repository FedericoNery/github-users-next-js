import { LoadingSpinner } from "./ui/loading-spinner";

const Show = ({ when, children }) => {
	return when && children;
};

const LoadingComponentDefault = () => {
	return (
		<div className="flex justify-center items-center">
			<LoadingSpinner className="mr-2 animate-spin" width={48} height={48} />
		</div>
	);
};

const ErrorComponentDefault = () => {
	return <p>Error...</p>;
};

const NotFoundComponentDefault = () => {
	return <p>Not Found</p>;
};

const RenderData = ({
	loading,
	error,
	data,
	LoadingComponent = LoadingComponentDefault,
	ErrorComponent = ErrorComponentDefault,
	DataComponent,
	NotFoundComponent = NotFoundComponentDefault,
}) => {
	return (
		<>
			<Show when={loading}>
				<LoadingComponent />
			</Show>
			<Show when={error}>
				<ErrorComponent />
			</Show>
			<Show when={!loading && !error && data}>
				<DataComponent data={data} />
			</Show>
			<Show when={!data && !loading && !error}>
				<NotFoundComponent />
			</Show>
		</>
	);
};

export default RenderData;
