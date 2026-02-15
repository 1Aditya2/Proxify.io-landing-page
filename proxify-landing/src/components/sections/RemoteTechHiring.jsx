import { Gem } from 'lucide-react';
import React from 'react'

const RemoteTechHiring = () => {
    return (
        <div className='py-32 bg-gray-100 max-md:py-16'>
            <div className='container flex flex-col gap-10 md:gap-12 items-center max-lg:px-5'>
                <h2 className='font-semibold text-display-md text-center'>The future of remote tech hiring</h2>
                <div className='flex items-center justify-between flex-wrap gap-16 max-lg:gap-10 max-md:gap-5 w-full max-md:flex-col'>
                    {new Array(3).fill('').map((_, i) => {
                        return (
                            <div className='flex flex-col max-md:w-full card-shadow flex-1 bg-white px-8 py-6 items-center justify-center rounded-2xl gap-4'>
                               <div className='w-12 h-12 rounded-full flex items-center justify-center bg-gray-100'><Gem/></div>
                               <div className='flex flex-col gap-4 items-center'>
                                <div className='flex flex-col gap-1 text-center'>
                                    <p className='font-semibold text-[48px]'>1,000+</p>
                                    <p className='font-normal'>Tech competencies</p>
                                </div>
                                <a href='/'>See our skills</a>
                               </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    )
}

export default RemoteTechHiring;
