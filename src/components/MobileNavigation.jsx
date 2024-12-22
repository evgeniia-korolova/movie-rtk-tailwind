import React from 'react';
import { mobileNavigation } from '../constants/navigation';
import { NavLink } from 'react-router-dom';

const MobileNavigation = () => {
	return (
		<section className='lg:hidden h-16 bg-black bg-opacity-75 backdrop-blur-2xl fixed bottom-0 w-full z-10'>
			<div className='flex items-center justify-around h-full text-neutral-400 '>
				{mobileNavigation.map((nav, index) => {
					return (
						<NavLink
							to={nav.href}
							key={nav.label + 'mobilenavigation'}
							className={({ isActive }) =>
								`flex  items-center flex-col justify-center gap-1 ${
									isActive && 'text-white'
								}`
							}
						>
							<div className='flex text-3xl'>{nav.icon}</div>
							<p className='text-sm'>{nav.label}</p>
						</NavLink>
					);
				})}
			</div>
		</section>
	);
};

export default MobileNavigation;
