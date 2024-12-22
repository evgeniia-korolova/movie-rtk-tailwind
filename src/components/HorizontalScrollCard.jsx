import React, { useRef } from 'react'
import Card from './Card';
import { FaAngleRight, FaAngleLeft } from 'react-icons/fa6';

const HorizontalScrollCard = ({data = [], heading, trending, media_type}) => {
    const containerRef = useRef();
    const handleNext = () => {
        containerRef.current.scrollLeft += 508
    }

    const handlePrev = () => {
        containerRef.current.scrollLeft -= 508
    }
  return (
		<div className='container mx-auto px-3 my-10'>
			<h2 className='text-xl lg:text-2xl font-bold mb-4 text-white'>
				{heading}
			</h2>
			<div className=' relative'>
				<div
					ref={containerRef}
					className='grid grid-cols-[repeat(auto-fit,230px)] grid-flow-col gap-6 overflow-x-scroll overflow-hidden relative z-10 scroll-smooth transition-all duration-500 scrollbar-none'
				>
					{data.map((data, index) => {
						return (
							<Card
								key={data.id + 'heading' + index}
								data={data}
								index={index + 1}
								trending={trending}
								media_type={media_type}
							/>
						);
					})}
				</div>

				<div className='absolute top-0 hidden lg:flex justify-between items-center w-full h-full'>
					<button 
                        onClick={handlePrev} 
                        className='bg-white p-3 rounded-full text-black -ml-2 z-10'>
						<FaAngleLeft />
					</button>
					<button
						onClick={handleNext}
						className='bg-white p-3 rounded-full text-black -mr-2 z-10'
					>
						<FaAngleRight />
					</button>
				</div>
			</div>
		</div>
	);
}

export default HorizontalScrollCard
