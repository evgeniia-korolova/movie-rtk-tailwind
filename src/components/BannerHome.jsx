import React, { useEffect, useState, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { FaAngleRight, FaAngleLeft } from 'react-icons/fa6';


const BannerHome = () => {
	const bannerData = useSelector((state) => state.movieDbData.bannerData);
	const imageURL = useSelector((state) => state.movieDbData.imageURL);
	const [currentImage, setCurrentImage] = useState(0);

	const handleNext = useCallback(() => {
		if (currentImage < bannerData.length - 1) {
			setCurrentImage((prev) => prev + 1);
		}
	}, [currentImage, bannerData]);

	const handlePrev = () => {
		if (currentImage > 0) {
			setCurrentImage((prev) => prev - 1);
		}
	};

	useEffect(() => {
		const interval = setInterval(() => {
			if (currentImage < bannerData.length - 1) {
				handleNext();
			} else {
				setCurrentImage(0);
			}
		}, 5000);
		return () => clearInterval(interval);
	}, [bannerData, imageURL, currentImage, handleNext]);

	return (
		<section className='w-full h-full'>
			<div className='flex min-h-full max-h-[90vh] overflow-hidden'>
				{bannerData.map((item, index) => {
					return (
						<div
							key={item.id + 'bannerHome' + index}
							className='min-w-full min-h-[450px] lg:min-h-full overflow-hidden relative group transition-all ease-in-out duration-500'
							style={{ transform: `translateX(-${currentImage * 100}%)` }}
						>
							<div className='w-full h-full'>
								<img
									src={imageURL + item.backdrop_path}
									alt={item.title}
									className='h-full w-full object-cover'
								/>
							</div>

							{/* button next and prev */}
							<div className='absolute w-full h-full hidden top-0  items-center justify-between p-5 lg:flex '>
								<button
									onClick={handlePrev}
									className='bg-white z-10 p-2 rounded-full text-2xl text-black lg:opacity-60 lg:hover:opacity-100 transition-all duration-500'
								>
									<FaAngleLeft />
								</button>
								<button
									onClick={handleNext}
									className='bg-white z-10 p-2 rounded-full text-2xl text-black lg:opacity-60 lg:hover:opacity-100 transition-all duration-500'
								>
									<FaAngleRight />
								</button>
							</div>

							<div className='absolute top-0 left-0 w-full h-full bg-gradient-to-t from-neutral-900 to-transparent'></div>
							<div className='container mx-auto'>
								<div className=' absolute bottom-5 max-w-md px-4'>
									<h2 className='text-3xl font-bold text-white lg:text-4xl drop-shadow-2xl'>
										{item?.title || item?.name}
									</h2>
									<p className='text-ellipsis line-clamp-3 text-white my-2'>
										{item.overview}
									</p>
									<div className='flex items-center gap-6'>
										<p>Rating : {Number(item.vote_average).toFixed(1)}+</p>
										<span>|</span>
										<p>View : {Number(item.popularity).toFixed(0)}</p>
									</div>
									<button className='bg-white text-black font-bold py-2 px-4 rounded-md mt-4 hover:bg-gradient-to-l from-red-600 to-purple-400 shadow-md transition-all duration-300 hover:scale-105'>
										Play now
									</button>
								</div>
							</div>
						</div>
					);
				})}
			</div>
		</section>
	);
};

export default BannerHome;
