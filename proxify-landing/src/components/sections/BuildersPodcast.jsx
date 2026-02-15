import React from 'react'
import Carousel from '../ui/Carousel'
import { carouselItems } from '../../data/data'
import { Youtube } from 'lucide-react'

const BuildersPodcast = () => {
    return (
        <div className='bg-gray-100 py-32'>
            <div className='container flex flex-col gap-10 items-start max-lg:px-5'>
                <p className='text-display-md font-semibold'>Featured episodes from our Builders podcast
                </p>
                <Carousel scrollParent='!bg-gray-300' scrollClassName='!bg-gray-850' arrowClassName='text-primary-600 group-hover:text-white'>
                    {carouselItems.map(({ name, role, image }, index) => {
                        return (<div className='relative group flex-[0_0_25%] max-md:flex-[0_0_100%]' key={`${name}-${index}`}>
                            <div className='flex flex-col gap-4 items-start'>
                                <div className='rounded-2xl w-60 h-72 overflow-hidden max-md:w-full'>
                                    <img src={image} alt='sd' className='w-full h-full object-cover' />
                                </div>
                                <div className='flex flex-col items-start text-gray-500'>
                                    <p className='mb-2 text-sm'>Available on:</p>
                                    <div className='flex items-center gap-2'>
                                        <Youtube className='' />
                                        <Youtube />
                                    </div>
                                    <div className='mt-4'>
                                        <p className='font-semibold text-base text-black'>{name}</p>
                                        <p className='text-sm text-gray-600'>{role}</p>
                                        <p className='font-semibold text-black mt-3 text-lg'>{'Mastering Software Development: Creativity, Documentation & Joy in Coding with Joris van de Donk'}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        )
                    })}
                </Carousel>
                <a className='cursor-pointer' href='/'>View all episodes</a>
            </div>
        </div>
    )
}

export default BuildersPodcast