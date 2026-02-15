import { ChevronDown, Gem } from 'lucide-react';
import React, { useState } from 'react'
import Accordion from '../ui/Accordion';
import { AccordionItem } from '../ui/AccordionItem';
import Button from '../ui/Button';
import UserCard from '../ui/UserCard';
import { accordionOnTab, carouselItems, tabData } from '../../data/data';
import Carousel from '../ui/Carousel';
const TrustedExperts = () => {
    const [isActive, setIsActive] = useState(tabData[0]);
    return (
        <div className='py-24 max-md:py-16 bg-gray-100'>
            <div className='container flex flex-col gap-10 md:gap-12 items-center max-lg:px-5'>
                <h2 className='font-semibold text-display-md max-md:text-left'>Discover our trusted tech experts</h2>
                <div className='flex flex-col items-center justify-between w-full gap-6'>
                    <div className='flex mb-10 w-full justify-between items-center border-b border-gray-300 overflow-auto'>
                        {tabData.map((each, i) => {
                            return (
                                <div onClick={() => setIsActive(each)} className={`
                                relative flex-1 cursor-pointer group
                                pt-2 pb-3 px-3 gap-2
                                flex items-center justify-center flex-col
                                after:absolute
                                after:bottom-0
                                after:left-0
                                after:h-[1px]
                                after:w-full
                                after:transition-all
                                after:duration-300
                                after:ease-in-out
                                ${isActive === each
                                        ? "after:bg-black after:scale-x-100"
                                        : "after:bg-black after:scale-x-0"}
                              `}>
                                    <Gem className={`
        transition-opacity duration-200
        ${isActive === i ? "opacity-100" : "opacity-0"}
        group-hover:opacity-100
      `} />
                                    <p className='font-semibold text-sm'>{each}</p>
                                </div>
                            );
                        })}
                    </div>
                    {accordionOnTab[isActive].map(({ headerValue, skills, userCards }, i) => {
                        return (
                            <Accordion key={`${headerValue}-${isActive}-${i}`} type="single" defaultValue={headerValue}>
                                <AccordionItem
                                    value={headerValue}
                                    headerClassName={'p-6'}
                                    contentClassName='p-6'
                                    parentClassName='bg-white hover:bg-gray-200 transition-all duration-300 rounded-2xl'
                                    header={
                                        <div className='flex justify-between w-full items-center'>
                                            <div className="flex items-center gap-6 max-sm:flex-col max-sm:items-start">
                                                <div className='flex gap-2 items-center'>
                                                    <Gem size={16} />
                                                    <span className="font-semibold">{headerValue}</span>
                                                </div>
                                                <div className="flex gap-2 overflow-auto">
                                                    {skills.map((e) => <Button key={e} variant='outlineBlack'>{e}</Button>)}
                                                </div>
                                            </div>
                                            <ChevronDown
                                                className="
                                  transition-transform duration-300
                                  group-data-[state=open]:rotate-180
                                "
                                            />
                                        </div>
                                    }
                                >
                                    <div className='flex gap-4 items-center'>
                                        <Carousel carouselClassName='py-16' noNavigaters={false}>
                                            {userCards.map(({ name, role, skills, image }, index) => {
                                                return (<div className='relative group flex-[0_0_25%] max-md:flex-[0_0_50%] max-sm:flex-[0_0_25%]' key={`${name}-${index}`}>
                                                    <UserCard name={name} role={role} skills={skills} image={image} />
                                                </div>
                                                )
                                            })}
                                        </Carousel>
                                        {/* {userCards.map(({ name, role, skills, image }, i) => {
                                        return (
                                            <div key={`${headerValue}-${i}`} className='relative group'>
                                                <UserCard key={`${name}-${i}`} name={name} role={role} skills={skills} image={image} />

                                            </div>
                                        );
                                    })} */}
                                    </div>

                                </AccordionItem>
                            </Accordion>
                        );
                    })}

                </div>
            </div>
        </div>
    )
}

export default TrustedExperts;