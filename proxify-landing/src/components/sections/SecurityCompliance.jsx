import React from 'react'
import ISO from '../../assets/ISOIcon';
import Security from '../../assets/Security';

const SecurityCompliance = () => {
    return (
        <div className='bg-gray-50'>
            <div className='container py-20 max-md:px-5'>
                <div className='flex items-center gap-28 max-md:gap-10 max-md:flex-col'>
                    <div className='flex flex-col items-start gap-4 flex-1'>
                        <h2 className='text-display-xs font-semibold text-gray-900'>Enterprise-grade security and compliance</h2>
                        <p className='text-gray-600 font-light'>Proxify is compliant with global workforce regulations, including the Dutch DBA Act, the 24-Month Rule, and the UK’s IR35 laws. Our structure eliminate misclassification risks, providing a seamless and risk-free hiring experience. Combined with ISO 27001 certification, we uphold the highest standards of security, ensuring a trusted and compliant partnership.</p>
                    </div>
                    <div className='flex justify-between items-center max-md:w-full gap-10 max-md:flex-col'>
                        <div className='w-[1px] bg-gray-300 h-28 max-md:hidden'/>
                        <div className='flex items-center h-full flex-1 text-gray-700 gap-4 max-md:w-full'>
                            <ISO className='text-gray-700'/>
                            <p className='text-left font-medium text-sm'>ISO 27001<br />
                                Certified</p>
                        </div>
                        <div className='w-[1px] bg-gray-300 h-28 max-md:hidden'/>
                        <div className='flex flex-1 items-center text-gray-700 gap-4 max-md:w-full'>
                            <Security className='text-gray-700'/>
                            <p className='text-left font-medium text-sm'>No hiring<br />
                                compliance risks</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SecurityCompliance