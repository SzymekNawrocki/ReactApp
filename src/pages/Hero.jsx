import React from 'react'
import { FaPersonWalkingArrowRight } from 'react-icons/fa6'

const Hero = () => {
	return (
		<div className='w-full h-screen relative'>
			<img
				className='top-0 left-0 w-full h-screen object-cover'
				src='https://w.forfun.com/fetch/36/36ca0c657373fdbb7fb9e8755125108c.jpeg'
				alt='Witcher in the winter attacked by a wounded bear, near the vikings village'
			/>
			<div className='bg-black/70 absolute top-0 left-0 w-full h-full' />
			<div className='text-white text-center max-w-[700px] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
				<h1 className='font-bold text-5xl md:text-5xl drop-shadow-2xl'>Wstęp</h1>
				<p className='max-w-[600px] drop-shadow-2xl py-2 text-xl'>
					Pośród rozdroży mroźnej krainy natrafiasz na wioskę. Będziesz w niej mógł się przygotować na dalsze przy
				</p>
				<FaPersonWalkingArrowRight className='mx-auto text-5xl' />
			</div>
		</div>
	)
}

export default Hero
