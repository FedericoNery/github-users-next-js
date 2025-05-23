export async function get(endpoint: string) {
	try {
		const response = await fetch(endpoint);
		if (!response.ok) {
			throw new Error("Network response was not ok");
		}
		const data = await response.json();
		return data;
	} catch (error) {
		throw new Error(error.message);
	}
}
