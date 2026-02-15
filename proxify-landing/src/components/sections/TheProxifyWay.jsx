import React, { useState } from 'react'
import kris from '../../assets/images/kris.avif'
import FastCompany from '../../assets/FastCompany'
import { gridData } from '../../data/data'
import Button from '../ui/Button'

const TheProxifyWay = () => {
    const [isHoveredRow1, setIsHoveredRow1] = useState(0);
    const [isHoveredRow2, setIsHoveredRow2] = useState(0);
    return (
        <div className='py-24 max-md:px-5'>
            <div className='container flex gap-16 flex-col'>
                <div className='flex justify-center items-center flex-col'>
                    <p className='text-display-md font-semibold mb-4 max-md:w-full max-md:text-left'>The Proxify way
                    </p>
                    <p className='text-lg max-md:w-full max-md:text-left font-light text-center text-gray-600'>Say goodbye to never-ending hiring processes, low employee retention and lack of flexibility.<br />
                        There is a better way to build a high-performing tech team.
                    </p>
                </div>
                <div className="flex gap-6 flex-col">
                    <div className="flex gap-6 max-lg:flex-col">
                        {gridData.map(({ title, desc, btn, className = '' }, i) => (
                            <div
                                key={`${title}-${i}`}
                                onMouseOver={() => setIsHoveredRow1(i)}
                                className={`group ${isHoveredRow1 === i ? 'flex-[1.5]' : 'flex-1'}
                                rounded-2xl ${className} transition-all duration-500 ease-in-out hover:flex-[1.5] px-6 py-8`}
                            >
                                <div className='flex justify-between items-center h-full'>
                                    <div className={`flex flex-col justify-between gap-28 max-lg:gap-4 h-full max-lg:w-full`}>
                                        <div className='flex items-start flex-col max-w-60 max-lg:max-w-full'>
                                            <p className={`font-semibold text-display-md`}>{title}</p>
                                            <p className={`mt-4 transition-all duration-400 max-lg:opacity-1 ease-in-out ${isHoveredRow1 === i ? 'opacity-1' : 'opacity-0'}`}>{desc}</p>
                                        </div>
                                        <Button variant='outlineBlack' className={'w-fit'}>{btn}</Button>
                                    </div>
                                    <div className={`w-28 h-28 transition-all duration-400 max-lg:hidden
                                        ease-in-out ${isHoveredRow1 === i ? 'opacity-1' : 'opacity-0 -translate-x-4'}`}>
                                        <img src={kris} alt='Kris' className='w-full h-full object-cover rounded-full' />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="flex gap-6 max-lg:flex-col">
                        {gridData.slice(0, 2).map(({ title, desc, btn, className }, i) => (
                            <div
                            key={`${desc}-${i}`}
                            onMouseOver={() => setIsHoveredRow2(i)}
                            className={`group ${isHoveredRow2 === i ? 'flex-[1.5]' : 'flex-1'}
                            rounded-2xl ${className} transition-all duration-500 ease-in-out px-6 py-8`}
                        >
                            <div className='flex justify-between items-center h-full'>
                                <div className={`flex flex-col justify-between gap-28 max-lg:gap-4 h-full max-lg:w-full`}>
                                    <div className='flex items-start flex-col max-w-60 max-lg:max-w-full'>
                                        <p className={`font-semibold text-display-md`}>{title}</p>
                                        <p className={`mt-4 transition-all duration-400 ease-in-out ${isHoveredRow2 === i ? 'opacity-1' : 'opacity-0'} max-lg:opacity-1`}>{desc}</p>
                                    </div>
                                    <Button variant='outlineBlack' className={'w-fit'}>{btn}</Button>
                                </div>
                                <div className={`w-28 h-28 transition-all duration-400 max-lg:hidden
                                    ease-in-out ${isHoveredRow2 === i ? 'opacity-1' : 'opacity-0 -translate-x-4'}`}>
                                    <img src={kris} alt='Kris' className='w-full h-full object-cover rounded-full' />
                                </div>
                            </div>
                        </div>
                        ))}
                    </div>
                </div>
                <div className='rounded-[24px] w-full bg-gray-100 p-[80px_72px] max-lg:p-[32px_24px]'>
                    <div className='flex justify-between items-center max-lg:flex-col'>
                        <div className='flex flex-col gap-6 items-start w-[50%] max-lg:w-[100%]'>
                            <FastCompany width='70px' height='50px' />
                            <p className='font-semibold text-display-sm'>"Proxify can really find very skilled professionals in a very short time – people who really fit in the team. I think any enterprise will benefit from that."</p>
                            <div className='flex flex-col items-start'>
                                <p className='font-medium'>Kris Huybs</p>
                                <p className='text-gray-600'>ICT Director</p>
                            </div>
                        </div>
                        <div className='overflow-hidden w-80 h-80 max-lg:w-32 max-lg:h-32'>
                            <img src={kris} alt='Kris' className='rounded-full w-full h-full object-cover' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TheProxifyWay