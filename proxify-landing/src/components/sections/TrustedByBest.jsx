import React, { useEffect, useRef, useState } from 'react'
import kris from '../../assets/images/kris.avif';
import Button from '../ui/Button';

const TrustedByBest = () => {
    const containerRef = useRef(null);
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const rect = containerRef.current.getBoundingClientRect();
            const windowHeight = window.innerHeight;

            const totalScroll = rect.height - windowHeight;
            const scrolled = Math.min(
                Math.max(-rect.top, 0),
                totalScroll
            );

            const scrollProgress = scrolled / totalScroll;
            setProgress(scrollProgress);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);
    const Card = () => {
        return (
            <div className='bg-gray-800 w-full p-[32px_24px] w-[47.9%] flex flex-col gap-10 rounded-2xl text-white'>
                <div className='flex flex-col items-start justify-start gap-2'>
                    <p className='font-semibold text-body-lg'>Our Client Manager, Seah, is awesome</p>
                    <p className='text-sm'>We found quality talent for our needs. The developers are knowledgeable and offer good insights.</p>
                </div>
                <div className='flex items-center'>
                    <img className='w-12 h-12 rounded-full mr-4' src={kris} alt='logo' />
                    <div className='flex flex-col text-sm'>
                        <p className='font-semibold'>Charlene Coleman</p>
                        <p >Fractional VP, Marketing | Next2Me</p>
                    </div>
                </div>
            </div>
        );
    }
    return (
        <section
            ref={containerRef}
            className="relative py-32 bg-gray-900"
        >
            <div className='container max-lg:px-5 flex gap-6 max-lg:gap-10 items-start max-lg:flex-col'>
                <div className="w-1/2 max-lg:w-full flex justify-between flex-col max-lg:hidden">
                    <div style={{
                        opacity: 1 - Math.abs(progress * 2),
                        transform: `translateY(${progress * 2 * -200}px)`
                    }} className='flex gap-4 flex-col items-start text-white'>
                        <p className='font-semibold text-display-md'>Trusted by the best</p>
                        <p className='font-light mb-8'>Join the 2,500+ companies who trust us to grow their<br />teams. We'll find the perfect developer to help your business thrive.</p>
                        <Button variant='secondary'>Find a developer</Button>
                    </div>
                    <div style={{
                        opacity: 1 - Math.abs((progress * 1) - 1),
                        transform: `translateY(${(progress * 1 - 1) * -200}px)`
                    }} className='flex flex-wrap gap-10 justify-start items-start max-lg:hidden'>
                        {new Array(4).fill('').map((e) => {
                        return (
                            <div className='w-[45%]'><Card /></div>
                        );
                    })}
                    </div>
                </div>
                <div className='w-1/2 max-lg:w-full sticky top-[128px] max-lg:static max-lg:hidden flex flex-wrap gap-10 justify-start items-start'>
                    {new Array(4).fill('').map((e) => {
                        return (
                            <div className='w-[45%]'><Card /></div>
                        );
                    })}
                </div>
                <div className='flex gap-4 flex-col items-start text-white lg:hidden'>
                    <p className='font-semibold text-display-md'>Trusted by the best</p>
                    <p className='font-light mb-8'>Join the 2,500+ companies who trust us to grow their<br />teams. We'll find the perfect developer to help your business thrive.</p>
                    <Button className={'max-md:w-full max-md:justify-center'} variant='secondary'>Find a developer</Button>
                </div>
                <div className='flex flex-wrap gap-6 justify-start items-start lg:hidden'>
                    {new Array(4).fill('').map((e) => {
                        return (
                            <div className='w-full'><Card /></div>
                        );
                    })}
                </div>
            </div>
        </section>
    )
}

export default TrustedByBest