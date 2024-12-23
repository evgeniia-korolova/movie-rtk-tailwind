import React from 'react';
import { IoClose } from 'react-icons/io5';
import useFetchDetails from '../hooks/useFetchDetails';

const VideoPlay = ({ data, close, media_type, playData }) => {
	const { data: videoData } = useFetchDetails(
		`/${media_type}/${data?.id}/videos`
	);

	return (
		<section className='fixed bg-neutral-700 top-0 right-0 bottom-0 left-0 z-40 bg-opacity-50 flex justify-center items-center'>
			<div className='bg-black w-full  max-h-[80vh] max-w-screen-lg aspect-video rounded  relative'>
				<button
					onClick={close}
					className='absolute -top-6 right-1 text-2xl lg:text-5xl text-white'
				>
					<IoClose />
				</button>

				{videoData?.results?.length > 0 ? (
					<iframe
						width='100%'
						height='100%'
						src={`https://www.youtube-nocookie.com/embed/${videoData.results[0]?.key}?enablejsapi=1&origin=${window.location.origin}&modestbranding=1&rel=0`}
						title='YouTube video player'
						allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
						allowFullScreen
					/>
				) : (
					<p className='text-white text-center mt-10'>Loading video...</p>
				)}
			</div>
		</section>
	);
};

export default VideoPlay;
