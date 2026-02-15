import React from 'react'
import kris from '../../assets/images/kris.avif'
import Button from '../ui/Button';

const DedicatedTeam = () => {
    return (
        <div className='py-32'>
            <div className='container flex gap-12 flex-col items-start max-lg:px-5'>
                <p className='font-semibold text-display-md'>Meet your dedicated dream team</p>
                <div className='flex gap-6 max-lg:flex-col items-stretch'>
                    {new Array(2).fill('').map((_, i) => {
                        return (
                            <div key={`${_}-${i}`} className='flex flex-1 gap-6 px-6 py-8 rounded-2xl justify-between flex-col bg-gray-100 items-start'>
                                <div className={`w-28 h-28`}>
                                    <img src={kris} alt='Kris' className='w-full h-full object-cover rounded-full' />
                                </div>
                                <div className='flex items-start flex-col'>
                                    <p className='font-semibold text-body-lg'>Rafael Weiss</p>
                                    <p className='text-gray-600'>Client Engineer</p>
                                </div>
                                <div className='flex gap-2 items-center'>
                                    {new Array(3).fill('').map((_, i) => {
                                        return (
                                            <div className={`w-7 h-7`} key={i}>
                                                <img src={kris} alt='Kris' className='w-full h-full object-cover rounded-full' />
                                            </div>
                                        );
                                    })}
                                </div>
                                <p className='text-gray-600'>Takes the time to thoroughly understand your technical challenges. With their expertise, you get the best-fit professionals, ready to solve your toughest challenges on your roadmap, fast.</p>
                            </div>
                        );
                    })}
                    <div key={'sep-2'} className='flex flex-1 max-lg:hidden shadow-md gap-10 h-auto px-6 py-8 rounded-2xl justify-center flex-col items-start'>
                        <div className={`w-10 h-10`}>
                            <img src={kris} alt='Kris' className='w-full h-full object-cover rounded-full' />
                        </div>
                        <p className='font-semibold text-display-xs'>Exceptional personal service, tailored at every step—because you deserve nothing less.</p>
                        <Button showArrow variant='primary'>Book a call</Button>
                    </div>
                    <div className='hidden max-lg:flex flex-1 gap-10 h-full justify-center flex-col items-start'>
                        <p className='font-semibold text-display-xs'>Exceptional personal service, tailored at every step—because you deserve nothing less.</p>
                        <Button className={'max-md:w-full max-md:justify-center'} showArrow variant='primary'>Book a call</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DedicatedTeam