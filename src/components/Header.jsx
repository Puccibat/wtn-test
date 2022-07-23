import React from 'react'
import Logo from '../assets/images/logo.png'
import Envelop from '../assets/images/envelop.png'
import Shape from '../assets/images/shape.png'

const Header = () => {
  return (
    <div className='h-20'>
      <div className="flex">
        <div className="bg-black w-3/4 h-16 lg:w-5/6 border-r-2 border-white flex pt-1 pl-1">
          <div className="flex flex-col">
            <p className='text-cyan-400 text-xs'>ADMIN Customers</p>
            <img className='h-9 w-32' src={Logo} alt="logo" />
          </div>
          <div className='bg-cyan-400 w-16 h-9 mt-3 ml-20 flex justify-center items-center gap-2'>
            <img src={Envelop} alt="envelop icon" />
            <p className=' text-white font-semibold'>4</p>
          </div>
        </div>
        <div className="bg-black opacity-80 w-1/4 lg:w-1/6 flex justify-evenly items-center">
          <div className=' bg-stone-400 w-8 h-8 rounded-full flex justify-center items-center'>
            <p className='font-bold'>A</p>
          </div>
          <div className='hidden lg:contents text-white text-xs'>Customer Admin #1</div>
          <img className=' cursor-pointer' src={Shape} alt="chevron icon" />
        </div>
      </div>
      <div className="bg-cyan-400 h-4 text-white text-xs font-bold">Gestion des messages clients</div>
    </div>
  )
}

export default Header