import React from 'react'
import banner from '../../assets/images/apex-banner-section-bg.png'
import Button from '../ui/Button'
import Carousel from '../ui/Carousel'
import { carouselItems } from '../../data/data'
import apexslide from '../../assets/images/apex-slide-2.avif'

const BlackboxEra = () => {
    return (
        <div className={`py-24 max-md:py-16 relative bg-cover flex items-center justify-center`} style={{ backgroundImage: `url(${banner})` }}>
            <div className='container items-center flex justify-between gap-8 max-lg:px-5 max-lg:flex-col'>
                <div className='max-w-[600px] max-lg:w-full text-left'>
                    <p className='mb-2 text-sm font-medium uppercase tracking-widest'>Full transparency on developer performance
                    </p>
                    <h2 className='mb-3 font-semibold text-display-md'>The end of the black box era in developer staffing</h2>
                    <p>By combining exclusive research backed by Stanford University with proprietary insights from thousands of successful engagements, Proxify brings unmatched transparency to developer performance, an industry first in a space that has prioritized billable hours over accountability for too long.</p>
                    <Button variant='terinary' className={'mt-8'}>Learn More</Button>
                </div>
                <div className='w-[50%] max-lg:w-full'>
                    <Carousel noScroll={false} btnClassName='!border-black hover:!bg-black' arrowClassName='text-black hover:!text-white'>
                        {carouselItems.slice(0, 2).map(({ name }, index) => {
                            return (<div className='relative group flex-[0_0_100%]' key={`${name}-${index}`}>
                                <div className='w-full'>
                                    <img src={apexslide} alt='user' className='w-full h-full object-cover' />
                                </div>
                            </div>
                            )
                        })}
                    </Carousel>
                </div>
            </div>
        </div>
    )
}

export default BlackboxEra