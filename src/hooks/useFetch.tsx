import { useEffect, useState } from "react";

export function useFetch(method: CallableFunction, initialDataValue = null, enableRequest = true) {
	const [data, setData] = useState(initialDataValue);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(false);
	

	useEffect(() => {
		const fetchData = async () => {
			setLoading(true);
			setError(false);
			try {
				const response = await method();
				setData(response);
				setLoading(false);
			} catch (e) {
				setError(true);
			} finally {
				setLoading(false);
			}
		};
		
		if(enableRequest){
			fetchData();
		}
	}, []);

	return { data, loading, error };
}
