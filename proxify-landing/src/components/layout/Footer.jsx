import React from 'react'
import Logo from '../../assets/Logo'
import { Facebook, Globe, Instagram, Linkedin, Youtube } from 'lucide-react'
import { bottomNavItems, navItems } from '../../data/data'

const Footer = () => {
  return (
    <footer className='pb-12 pt-16 flex flex-col gap-12 text-white bg-gray-900'>
      <div className='container flex justify-between gap-12 items-start max-lg:px-5 max-md:flex-col'>
        <div className='flex flex-col gap-8'>
          <Logo fill={'white'} />
          <div className='flex flex-col gap-4'>
            <div className='flex gap-1 flex-col items-start'>
              <a className='!text-white text-lg font-semibold hover:!text-purple-300' href='/'>+91 232 32 323232</a>
              <a className='!text-white text-lg font-semibold hover:!text-purple-300' href='/'>hello@proxify.io</a>
            </div>
            <div className='flex gap-1 flex-col items-start'>
              <a className='!text-white text-lg font-semibold hover:!text-purple-300' href='/'>207 Regent Street, Suite 8</a>
              <a className='!text-white text-lg font-semibold hover:!text-purple-300' href='/'>Third Floor, London</a>
            </div>
          </div>
          <div className='flex gap-6 items-start'>
            <Instagram className='hover:!text-purple-300' />
            <Facebook className='hover:!text-purple-300' />
            <Youtube className='hover:!text-purple-300' />
            <Linkedin className='hover:!text-purple-300' />
          </div>
        </div>
        <div className='flex gap-16 items-start justify-center max-md:flex-col'>
          {navItems.map(({ header, list }, i) => {
            return (
              <div className='flex flex-col gap-3' key={`${header}-${i}`}>
                <p className='font-semibold'>{header}</p>
                {list.map((e) => <a className='!text-white w-fit text-sm font-light hover:!text-purple-300' href='/'>{e}</a>)}
              </div>
            );
          })}

        </div>
      </div>
      <div className='container pt-10 max-md:gap-4 flex justify-between max-md:items-start items-center border-t border-gray-600 max-lg:px-5 max-md:flex-col'>
        <div>
          <Globe />
        </div>
        <div className='flex gap-6 items-center max-md:flex-col max-md:items-start'>
          {bottomNavItems.map((e) => <a className='!text-white text-sm font-light hover:!text-purple-300' href='/'>{e}</a>)}
        </div>
      </div>
    </footer>
  )
}

export default Footer