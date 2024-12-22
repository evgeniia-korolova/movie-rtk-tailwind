import React from 'react';
import { useParams } from 'react-router-dom';
import useFetchDetails from '../hooks/useFetchDetails';
import { useSelector } from 'react-redux';
import moment from 'moment';
import Divider from '../components/Divider';
import useFetch from '../hooks/useFetch';
import HorizontalScrollCard from '../components/HorizontalScrollCard';

const DetailsPage = () => {
	const params = useParams();
	const imageURL = useSelector((state) => state.movieDbData.imageURL);
	const { data } = useFetchDetails(`${params?.explore}/${params?.id}`);
	const { data: castData } = useFetchDetails(
		`/${params?.explore}/${params?.id}/credits`
	);
	const { data: similarData } = useFetch(
		`/${params?.explore}/${params?.id}/similar`
	);
	const { data: recommendationData } = useFetch(
		`/${params?.explore}/${params?.id}/recommendations`
	);
	const duration = (data?.runtime / 60)?.toFixed(1)?.split('.');
	const director = castData?.crew
		?.filter((el) => el?.job === 'Director' )
		?.map((el) => el?.name)
		?.join(', ');
	const writer = castData?.crew
		?.filter((el) => el?.job === 'Writer' || el?.job === 'Story')
		?.map((el) => el?.name)
		?.join(', ');
	console.log('details params', params);
	console.log('details data', data);
	console.log('details castData', castData);

	return (
		<div className='container mx-auto  mt-16 mb-24'>
			<div className='w-full h-[280px] relative hidden lg:block'>
				<div className='w-full h-full'>
					<img
						src={imageURL + data?.backdrop_path || data?.poster_path}
						alt={data?.title}
						className='w-full h-full object-cover object-top'
					/>
				</div>
				<div className='absolute w-full h-full top-0 bg-gradient-to-t from-neutral-900/50 to-transparent'></div>
			</div>

			<div className='container mx-auto px-3 flex flex-col lg:flex-row gap-5 lg:gap-10'>
				<div className=' lg:-mt-28 lg:mx-0 relative mx-auto w-fit min-w-60'>
					<img
						src={imageURL + data?.poster_path}
						alt={data?.title}
						className='w-60  h-80 object-contain object-left rounded'
					/>
				</div>
				<div className='mx-auto lg:mx-0 lg:pt-4'>
					<h2 className='text-2xl lg:text-4xl font-bold text-white '>
						{data?.title || data?.name}
					</h2>
					<p className='text-neutral-400'>{data?.tagline}</p>

					<Divider />

					<div className='flex lg:items-center  flex-col mt-1 lg:flex-row lg:gap-9 lg:mt-3'>
						<p>Rating : {Number(data.vote_average).toFixed(1)}+</p>
						<span className='hidden lg:block'>|</span>
						<p>View : {Number(data?.vote_count)}</p>
						<span className='hidden lg:block'>|</span>

						{data.runtime && (
							<p>Duration: {duration[0] + ' hr ' + duration[1] + ' min'}</p>
						)}
					</div>

					<Divider />

					<div>
						<h3 className='text-xl font-bold text-white mb-1'>Overview</h3>
						<p className='text-neutral-400'>{data?.overview}</p>
						<Divider />
						<div className='flex lg:items-center  flex-col mt-1 lg:flex-row lg:gap-9 lg:mt-3'>
							<p>Status : {data?.status}</p>
							<span className='hidden lg:block'>|</span>
							<p>
								Release Date :{' '}
								{moment(data?.release_date).format('MMMM Do YYYY')}
							</p>
							<span className='hidden lg:block'>|</span>
							<p>Revenue : {Number(data?.revenue)}</p>
						</div>
						<Divider />
					</div>
					<div>
						<p>
							<span className='text-white'>Director : </span>
							{director}							
						</p>

						<Divider />

						<p>
							<span className='text-white'>Writer : </span>
							{writer}
						</p>

						<Divider />
						<h2 className='font-bold text-lg lg:text-2xl text-white my-3'>
							Cast :
						</h2>
						<div className='grid grid-cols-[repeat(auto-fit,96px)] gap-6 my-4 justify-center lg:justify-between'>
							{castData?.cast
								?.filter((el) => el?.profile_path)
								.map((starCast, index) => {
									return (
										<div key={index}>
											<div>
												<img
													src={imageURL + starCast?.profile_path}
													alt={starCast?.original_name || starCast?.name}
													className='w-24 h-24 object-cover rounded-full'
												/>

												<p className='font-bold text-center text-sm text-neutral-400'>
													{starCast?.original_name || starCast?.name}
												</p>
											</div>
										</div>
									);
								})}
						</div>
					</div>
				</div>
			</div>
			<Divider />
			<div className='capitalize'>
				<HorizontalScrollCard
					data={similarData}
					heading={`Similar ${params?.explore}`}
					media_type={params?.explore}
				/>
				<Divider />
				<HorizontalScrollCard
					data={recommendationData}
					heading={`Recommended ${params?.explore}`}
					media_type={params?.explore}
				/>
			</div>
		</div>
	);
};

export default DetailsPage;
