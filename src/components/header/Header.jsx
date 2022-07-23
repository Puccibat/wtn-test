import React from 'react';
import CustomerAdminMenuList from './CustomerAdminMenuList';
import MessageUnreadCounter from './MessageUnreadCounter';
import CurrentCustomerAdmin from './CurrentCustomerAdmin';
import Logo from '../../assets/images/logo.png';

const Header = () => {
  return (
    <div className='h-20'>
      <div className='flex'>
        <div className='bg-black w-3/4 h-16 lg:w-5/6 border-r-2 border-white flex pt-1 pl-1'>
          <div className='flex flex-col'>
            <p className='text-cyan-400 text-xs'>ADMIN Customers</p>
            <img className='h-9 w-32' src={Logo} alt='logo' />
          </div>
          <MessageUnreadCounter />
        </div>
        <CurrentCustomerAdmin />
      </div>
      <div className='relative'>
        <div className='bg-cyan-400 h-4 w-full text-white text-xs font-bold absolute'>
          Gestion des messages clients
        </div>
        <div className='float-right relative flex flex-col w-44 lg:w-1/6 h-12'>
          <CustomerAdminMenuList />
        </div>
      </div>
    </div>
  );
};

export default Header;
