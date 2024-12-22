import { IoHomeOutline } from 'react-icons/io5';
import { PiTelevisionLight } from 'react-icons/pi';
import { BiSolidMoviePlay } from 'react-icons/bi';
import { IoSearchOutline } from 'react-icons/io5';

export const navigation = [
	{
		label: 'TV Shows',
		href: 'explore/tv',
		icon: <PiTelevisionLight />,
	},
	{
		label: 'Movies',
		href: 'explore/movie',
		icon: <BiSolidMoviePlay />,
	},
];

export const mobileNavigation = [
	{
		label: 'Home',
		href: '/',
		icon: <IoHomeOutline />,
	},
	...navigation,
	{
		label: 'Search',
		href: '/search',
		icon: <IoSearchOutline />,
	},
];
