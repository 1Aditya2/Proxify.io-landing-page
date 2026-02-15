import React from 'react'

const UserCard = ({ name, role, skills, image }) => {
    return (
        <div>
            <div className='rounded-2xl w-72 h-96 overflow-hidden'>
                <img src={image} alt='sd' className='w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110' />
            </div>
            <div className='absolute left-2 bottom-2 z-10'>
                <p className='font-medium text-base text-white'>{name}</p>
                <p className='font-normal text-base text-white'>{role}</p>
                <div className='flex items-center gap-2'>
                    {skills.map((each) => <div className='rounded-2xl text-white bg-gray-900 font-semibold text-sm px-2 py-1'>{each}</div>)}
                </div>
            </div>
        </div>
    )
}

export default UserCard