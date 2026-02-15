import React from 'react'
import globe from '../../assets/images/globe-people.webp'
import { CircleCheckBig } from 'lucide-react';
import Button from '../ui/Button';
const BuildDream = () => {
  return (
    <div className='pb-24 max-md:pb-0'>
      <div className='container bg-gray-900 rounded-2xl max-md:rounded-none'>
        <div className='py-24 max-md:py-16 max-md:px-6 px-12 relative flex justify-between items-center gap-16'>
          <div className='flex max-w-[650px] flex-col items-start text-white'>
            <h2 className='mb-4 font-semibold text-display-md'>Build your dream team today</h2>
            <p className='mb-8'>Tired of job postings, endless interviews and hiring headaches? Discover talented developers, tailored to you and accelerate your business now.</p>
            <div className='flex flex-col items-start max-sm:w-full'>
              <div className='flex mb-10 gap-6 max-lg:flex-col'>
                {new Array(3).fill('').map((_) => {
                  return (<span className='flex gap-4 items-start'>
                    <CircleCheckBig size={20} className='text-white' />
                    <p className='text-sm text-left text-white'>1,000+ tech competencies</p>
                  </span>
                  );
                })}
              </div>
              <Button className={'max-sm:w-full max-sm:justify-center'} showArrow variant='secondary'>Find a developer</Button>
              <div className='flex items-center mt-6'>
                <span className='font-semibold text-sm'>Excellent</span>&nbsp;
                <span className='text-sm font-light'>4.4 out of 5</span>&nbsp;
                <span className='text-sm font-medium flex items-center'>Trustpilot</span>
              </div>
            </div>
          </div>
          <div className='absolute right-0 max-lg:hidden'>
            <img className='max-w-[450px] max-h-[450px] max-lg:hidden' src={globe} alt='Globeimage' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default BuildDream