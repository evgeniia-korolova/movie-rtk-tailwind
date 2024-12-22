import React from 'react';
import { useSelector } from 'react-redux';
import moment from 'moment';
import { Link } from 'react-router-dom';


const Card = ({ data, trending, index, media_type }) => {
	const imageURL = useSelector((state) => state.movieDbData.imageURL);
	const mediaType = data.media_type ?? media_type;
	// data.media_type имеет приоритет перед переданным через проп media_type. Если в объекте data нет свойства media_type, результат будет undefined.
	// const mediaType = media_type || data.media_type; // Переданный пропс имеет приоритет
	return (
		<Link
			
			to={`/explore/${mediaType}/${data?.id}`}
			className='w-full min-w-[230px] max-w-[230px] h-80 overflow-hidden rounded block relative hover:scale-105 transition-all duration-300'
		>
		{
			data?.poster_path ? (
				<img
				src={imageURL + data?.poster_path || data?.backdrop_path}
				alt={data?.title}
				className='w-full h-full object-cover'
			/>
			) : (
				<div className='flex items-center justify-center h-full w-full bg-neutral-800'>
					No Image Found
				</div>
			)
		}
			
			<div className='absolute top-4'>
				{trending && (
					<div className='py-1 px-4 bg-black/60 text-white rounded-r-full overflow-hidden'>
						# {index} Trending
					</div>
				)}
			</div>
			<div className='absolute bottom-0 h-16 bg-black/70 backdrop-blur-3xl w-full p-2'>
				<h2 className='text-ellipsis line-clamp-1 text-lg font-semibold'>
					{data?.title || data?.name}
				</h2>
				<div className='flex justify-between gap-2 items-center'>
					<p className='text-sm text-neutral-300'>
						{moment(data?.release_date || data?.first_air_date).format(
							'MMM Do YY'
						)}
					</p>
					<p className='bg-black rounded-full px-1 text-xs text-white'>
						Rating: {Number(data?.vote_average).toFixed(1)}
					</p>
				</div>
			</div>
		</Link>
	);
};

export default Card;
