import React from 'react'
import Button from '../ui/Button'
import Carousel from '../ui/Carousel'
import { carouselItems } from '../../data/data'
import { CircleCheckBig } from 'lucide-react'
import Marquee from "react-fast-marquee";
import fastCompany from '../../assets/fast-company-logo-svgrepo-com.svg'
import ISO from '../../assets/iso.svg'
import UserCard from '../ui/UserCard'

const Hero = () => {
    return (
        <div className='pt-40 pb-24 bg-gray-900 flex justify-center items-center'>
            <div className='bg-shadow'></div>
            <div className='container max-md:px-5'>
                <div className='flex flex-col items-center justify-center gap-4 text-white relative'>
                    <p className='text-sm w-full font-medium uppercase text-primary-200 max-md:text-left text-center tracking-[1.68px]'>Europe's largest vetted tech talent network</p>
                    <h1 className='text-display-lg font-semibold text-center text-white max-md:text-left'>Build long-term remote tech teams,<br />with full flexibility</h1>
                    <p className='text-xl font-light text-center max-w-[950px] mx-auto text-white max-md:text-left'>Hire serious remote tech talent that integrates into your team and stays for the long run, while giving you the<br/> freedom to adapt as fast as your needs change</p>
                    <div className='flex items-center gap-4 my-6 max-md:flex-col max-md:w-full'>
                        <Button showArrow variant='secondary' className={'justify-center max-md:w-full'}>Find a developer</Button>
                        <Button showArrow variant='outlineWhite' className={'justify-center max-md:w-full'}>Talk to an expert</Button>
                    </div>
                    <div className='flex gap-6 items-center max-md:flex-col'>
                        <div className='flex items-center'>
                            <span className='font-semibold text-sm'>Excellent</span>&nbsp;
                            <span className='text-sm font-light'>4.4 out of 5</span>&nbsp;
                            <span className='text-sm font-medium flex items-center'>Trustpilot</span>
                        </div>
                        <div className='flex items-center gap-2'>
                            <img src={ISO} alt={'iso'} className='w-10 h-10' />
                            <p className='text-xs'>ISO 27001
                                Certified</p>
                        </div>
                    </div>

                </div>
                <div className='py-16'>
                <Carousel carouselClassName='py-16'>
                    {carouselItems.map(({ name, role, skills, image }, index) => {
                        return (<div className='relative group flex-[0_0_25%] max-md:flex-[0_0_50%] max-sm:flex-[0_0_25%]' key={`${name}-${index}`}>
                           <UserCard name={name} role={role} skills={skills} image={image}/>
                        </div>
                        )
                    })}
                </Carousel>
                </div>
                <div className='flex justify-between max-md:flex-col max-md:gap-4'>
                    {new Array(4).fill('').map((_) => {
                        return (<span className='flex gap-4 items-center'>
                            <CircleCheckBig className='text-white' />
                            <p className='text-sm font-medium text-white'>1,000+ tech competencies, only 1% of applicants accepted</p>
                        </span>
                        );
                    })}
                </div>
                <div className='text-white flex items-center justify-center mt-20 flex-col'>
                    <p className='font-semibold text-sm'>Trusted by 2,500 global companies</p>
                    <div className="mt-10 overflow-hidden container">
                        <Marquee speed={80} gradient={false}>
                            {new Array(8).fill('').map((_, i) => (
                                <img
                                    key={i}
                                    src={fastCompany}
                                    className="h-24 w-24 mx-8"
                                    alt="brand"
                                />
                            ))}
                        </Marquee>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero