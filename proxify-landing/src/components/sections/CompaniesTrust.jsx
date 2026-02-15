import React from 'react'
import Carousel from '../ui/Carousel';
import { carouselItems } from '../../data/data';
import Button from '../ui/Button';

const CompaniesTrust = () => {
  return (
    <div className='pb-32 bg-gray-900'>
        <div className='container flex gap-10 flex-col max-lg:px-5'>
            <div className='text-white'>
                <h2 className='font-semibold text-display-md'>Why top companies trust Proxify</h2>
                <p className='text-lg'>Insights from our developers and hiring experts.</p>
            </div>
            <div className='flex flex-col gap-10'>
            <Carousel carouselClassName='py-16' scrollParent='!bg-primary-800'>
                    {carouselItems.map(({ name, role, image }, index) => {
                        return (<div className='relative group flex-[0_0_33%] max-md:flex-[0_0_100%]' key={`${name}-${index}`}>
                            <div className='flex flex-col gap-4 items-start'>
                                <div className='rounded-2xl w-96 h-56 overflow-hidden max-md:w-full'>
                                    <img src={image} alt='sd' className='w-full h-full object-cover' />
                                </div>
                                <div className='flex flex-col items-start text-gray-500'>
                                    <div className='mt-4 text-white'>
                                        <p className='font-semibold text-sm'>{name}</p>
                                        <Button className={'mt-3'} variant={'outlineWhite'}>Community</Button>
                                        <p className='font-semibold hover:underline mt-3 text-lg'>{'Mastering Software Development: Creativity, Documentation & Joy in Coding with Joris van de Donk'}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        )
                    })}
                </Carousel>
                <a className='cursor-pointer !text-primary-200 hover:!text-purple-200' href='/'>View all episodes</a>
            </div>
        </div>
    </div>
  )
}

export default CompaniesTrust;
