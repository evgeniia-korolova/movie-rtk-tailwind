import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
		<footer className='text-center  bg-black bg-opacity-70 z-20 text-newtural-300 py-3 lg:fixed bottom-0 w-full '>
			<div className='flex gap-4 items-center justify-center'>
				<Link to='/'>About</Link>
				<Link to='/'>Contact</Link>				
			</div>
			<p className='text-sm py-2 pt-5'>
				Created by Evgeniia Korolova with the help of Amit's tutorial
			</p>
		</footer>
	);
}

export default Footer
