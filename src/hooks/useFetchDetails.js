import axios from 'axios';
import { useEffect, useState } from 'react';

const useFetchDetails = (url) => {
	const [data, setData] = useState([]);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(null);

	const fetchData = async () => {
		try {
			setLoading(true);
			const response = await axios.get(url);
			setData(response.data);
			setLoading(false);
		} catch (error) {
			console.log(error);
			setError(error);
			setLoading(false);
		}
	};

	useEffect(() => {
		fetchData();
	}, []);

	return { data, loading, error, fetchData };
};

export default useFetchDetails;
