import React from 'react'
import Accordion from '../ui/Accordion';
import { AccordionItem } from '../ui/AccordionItem';
import { PlusIcon } from 'lucide-react';
import { FAQAccordion } from '../../data/data';

const FAQ = () => {
    return (
        <div className='py-24'>
            <div className='container flex flex-col items-start gap-8 max-lg:px-5'>
                <h2 className='font-semibold text-display-md'>Frequently asked questions</h2>
                <div className='flex justify-between gap-8 max-md:gap-4 w-full max-md:flex-col'>
                    <div className='w-[50%] max-md:w-full'>
                        {FAQAccordion.slice(0,3).map(({ title, content }, i) => {
                            return (
                                <Accordion key={`${title}-${i}`} type="single" defaultValue={title}>
                                    <AccordionItem
                                        value={'How long does it take to get started?'}
                                        parentClassName={`transition-all duration-300 py-8 ${i !== 2 ? 'border-b border-gray-600' : ''}`}
                                        header={
                                            <div className='flex justify-between w-full items-start'>
                                                <div className='flex gap-2 items-center'>
                                                    <span className="font-semibold text-left group-data-[state=open]:text-primary-600 text-body-xl text-black">{title}</span>
                                                </div>
                                                <PlusIcon
                                                    className="
                                  transition-transform duration-300
                                  group-data-[state=open]:text-primary-600
                                  group-data-[state=open]:rotate-180
                                "
                                                />
                                            </div>
                                        }
                                    >
                                        <div className='flex gap-4 items-center text-left mt-4'>
                                            <p className='text-gray-600'>{content}</p>
                                        </div>
                                    </AccordionItem>
                                </Accordion>

                            );
                        })}
                    </div>
                    <div className='w-[50%] max-md:w-full'>
                        {FAQAccordion.slice(3,6).map(({ title, content }, i) => {
                            return (

                                <Accordion key={`${title}-${i}`} type="single" defaultValue={title}>
                                    <AccordionItem
                                        value={'How long does it take to get started?'}
                                        parentClassName={`transition-all duration-300 py-8 ${i !== 2 ? 'border-b border-gray-600' : ''}`}
                                        header={
                                            <div className='flex justify-between w-full items-center'>
                                                <div className='flex gap-2 items-center'>
                                                    <span className="font-semibold text-body-xl text-left text-black">{title}</span>
                                                </div>
                                                <PlusIcon
                                                    className="
                                  transition-transform duration-300
                                  group-data-[state=open]:rotate-180
                                "
                                                />
                                            </div>
                                        }
                                    >
                                        <div className='flex gap-4 items-center text-left mt-4'>
                                            <p className='text-gray-600'>{content}</p>
                                        </div>

                                    </AccordionItem>
                                </Accordion>

                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FAQ