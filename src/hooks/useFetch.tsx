import axios from "axios";
import { useEffect, useState } from "react";

export function useFetch(initialEndpoint: string, initialDataValue = null, enableRequest = true) {
	const [endpointState, setEndpoint] = useState(initialEndpoint)
	const [data, setData] = useState(initialDataValue);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(false);
	
	

	useEffect(() => {
		const fetchData = async () => {
			setLoading(true);
			setError(false);
			try {
				const response = await axios.get(endpointState, {
					headers: { "Cache-Control": "no-cache" }, // Evitar cache del navegador.
				});
				const data = response.data;
				setData(data);
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
	}, [endpointState]);

	return { data, loading, error, setEndpoint };
}
