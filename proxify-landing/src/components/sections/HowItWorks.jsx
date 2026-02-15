import React from 'react'
import Button from '../ui/Button'
import kris from '../../assets/images/kris.avif'
import Arrow from '../../assets/Arrow'

const HowItWorks = () => {
    return (
        <div className='py-24 bg-gray-100'>
            <div className='container flex flex-col gap-16 max-lg:px-5'>
                <div className='flex flex-col items-center text-center'>
                    <p className='font-semibold text-display-md mb-4 max-md:w-full max-md:text-left'>How it works</p>
                    <p className='text-gray-600 text-lg max-md:w-full max-md:text-left'>We combine best of AI-technology and our team’s deep expertise to deliver hand-picked talent in just a few days.<br />
                        Get started in just three simple steps.</p>
                </div>
                <div className='flex items-center gap-12 max-lg:flex-col'>
                    {new Array(3).fill('').map((_, i) => {
                        return (
                            <div className='flex flex-1 relative z-10 flex-col items-center'>
                                <div className='flex gap-3 items-center mb-2 max-md:w-full max-md:text-left'>
                                    <div className='w-8 h-8 text-white rounded-full bg-black items-center justify-center flex'>{i + 1}</div>
                                    <p className='text-body-xl font-semibold'>Book a meeting</p>
                                </div>
                                <div className='w-28 h-28 mb-8 mt-4'>
                                    <img src={kris} alt='Kris' className='w-full h-full object-cover rounded-full' />
                                </div>
                                <p className='mb-4 font-semibold text-sm max-md:w-full max-md:text-left'>Today, February 13</p>
                                <p className='text-gray-600 text-center max-md:w-full max-md:text-left'>Share your unique context with us over a 25-minute call, so we can match you with the perfect candidates for your needs.</p>
                                {i !== 2 && <div className='max-lg:hidden'>
                                    <Arrow />
                                </div>}
                            </div>
                        );
                    })}
                </div>
                <div className='flex flex-col items-center justify-center gap-2'>
                    <Button className={'max-md:w-full justify-center'}>Find a developer</Button>
                    <p className='text-sm font-normal text-gray-600'>Hire top-tier, vetted talent. Fast.</p>
                </div>
            </div>
        </div>
    )
}

export default HowItWorks