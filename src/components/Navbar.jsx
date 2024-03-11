import React, { useState } from 'react'
import { HiMenuAlt3 } from 'react-icons/hi'
import { GiBarracksTent } from 'react-icons/gi'



const Navbar = () => {
	const [nav, setNav] = useState(false)
	const handleNav = () => {
		setNav(!nav)
		if (!nav) {
			document.body.style.overflow = 'hidden'
		} else {
			document.body.style.overflow = 'scroll'
		}
	}

	return (
		<div className='absolute w-full flex justify-around p-4 items-center'>
			<GiBarracksTent onClick={handleNav} className='z-20 text-white cursor-pointer' size={25} />

			<HiMenuAlt3 onClick={handleNav} className='z-20 text-white cursor-pointer' size={25} />
			<div
				className={
					nav
						? 'ease-in duration-300 fixed text-gray-300 left-0 top-0 w-full h-screen bg-black/100 px-4 py-7 flex-col z-10'
						: 'absolute top-0 h-screen left-[-100%] ease-out duration-500 z-10'
				}
			>
				<ul className='flex flex-col fixed w-full h-full items-center justify-center'>
					<li className='font-bold text-3xl p-8'>
					<a href='/'>Strona Główna</a>	
					</li>
					<li className='font-bold text-3xl p-8'>
					<a href='Dziennik Zadań'>Dziennik Zadań</a>
					</li>
					<li className='font-bold text-3xl p-8'>
					<a href='Wiedźma'>Wiedźma</a>
					</li>
					<li className='font-bold text-3xl p-8'>Amenities</li>
					<li className='font-bold text-3xl p-8'>Rooms</li>
				</ul>
			</div>
		</div>
	)
}

export default Navbar
