import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Card from '../components/Card';

const SearchPage = () => {
	const location = useLocation();
	const [data, setData] = useState([]);
	const [pageNo, setPageNo] = useState(1);
	const query = location?.search?.slice(3);
	const navigate = useNavigate();

	const fetchData = async () => {
		console.log('Fetching data...');

		try {
			const response = await axios.get(`/search/multi`, {
				params: {
					query: location?.search?.slice(3),
					page: pageNo,
				},
			});
			setData((prev) => {
				console.log(response.data.results);
				return [...prev, ...response.data.results];
			});
		} catch (error) {
			console.error('Error fetching data:', error);
		}
	};

	useEffect(() => {
		if (query) {
			setPageNo(1);
			setData([]);
			fetchData();
		}
	}, [location?.search]);

	const handleScroll = () => {
		if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
			setPageNo((prev) => prev + 1);
		}
	};

	useEffect(() => {
		if (query) {
			fetchData();
		}
	}, [pageNo]);

	useEffect(() => {
		window.addEventListener('scroll', handleScroll);
	}, []);

	return (
		<div className='py-16'>
			<div className='lg:hidden my-2 mx-1 sticky top-[70px] z-30'>
				<input
					type='text'
					placeholder='Search here...'
					onChange={(e) => navigate(`/search?q=${e.target.value}`)}
					value={query?.split('%20')?.join(' ')}
					className='px-4 py-1 text-lg w-full bg-white rounded-full text-neutral-900 '
				/>
			</div>

			<div className='container mx-auto'>
				<h3 className='uppercase text-lg lg:text-2xl font-semibold my-3 px-4'>
					Search Results
				</h3>
				<div className='grid grid-cols-[repeat(auto-fit,230px)] gap-6 justify-center'>
					{data.map((searchData, index) => {
						return (
							<Card
								key={searchData.id + 'search'}
								data={searchData}
								media_type={searchData.media_type}
							/>
						);
					})}
				</div>
			</div>
		</div>
	);
};

export default SearchPage;
