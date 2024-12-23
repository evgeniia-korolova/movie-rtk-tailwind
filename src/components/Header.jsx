import React, { useEffect, useState } from 'react';
import logo from '../assets/logo.svg';
import user from '../assets/user.svg';
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom';
import { IoSearchOutline } from 'react-icons/io5';
import { navigation } from '../constants/navigation';


const Header = () => {
	const location = useLocation();
	const formattedQuery = location?.search?.slice(3)?.split('%20')?.join(' ');
    const [searchInput, setSearchInput] = useState(formattedQuery);
    const navigate = useNavigate();

		

    useEffect(() => {
		if(searchInput) {
			navigate(`/search?q=${searchInput}`)
		}
    }, [searchInput])

	const handleSubmit = (e) => {
		e.preventDefault();

	};

	return (
		<header className='fixed top-0 w-full h-16 bg-black bg-opacity-70 z-20'>
			<div className='container mx-auto px-3 flex items-center h-full'>
				<Link to={'/'}>
					<img src={logo} alt='logo' width={120} />
				</Link>
				<nav className='hidden lg:flex items-center gap-2 ml-12'>
					{navigation.map((item) => {
						return (
							<div key={item.label}>
								<NavLink
									to={item.href}
									className={({ isActive }) =>
										`px-2 hover:text-neutral-100 ${
											isActive && 'text-neutral-100'
										}`
									}
								>
									{item.label}
								</NavLink>
							</div>
						);
					})}
				</nav>

				<div className='ml-auto flex items-center gap-4'>
					<form className='flex items-center gap-2' onSubmit={handleSubmit}>
						<input
							type='text'
							placeholder='Search here ...'
							className='bg-transparent outline-none rounded-md px-4 py-1 text-white hidden lg:block'
                            onChange={(e) => setSearchInput(e.target.value)}
                            value={searchInput}
						/>
						<button className='text-4xl text-white'>
							<IoSearchOutline />
						</button>
					</form>
					
					<div className='w-8 h-8 flex justify-center items-center rounded-full border-2 border-solid border-white-200 cursor-pointer active:scale-50 transition-all'>
						<img src={user} alt='user' width='w-full h-full' />
					</div>
				</div>
			</div>
		</header>
	);
};

export default Header;
