import React from 'react';

const CustomerAdminMenuList = () => {
  const customerAdminList = [
    {
      name: 'Customer admin',
      role: 'Responsable Clients',
      acronyme: 'TB',
      id: 1,
    },
    {
      name: 'Customer admin',
      role: 'Responsable Clients',
      acronyme: 'KC',
      id: 2,
    },
    {
      name: 'Customer admin',
      role: 'Responsable Clients',
      acronyme: 'D',
      id: 3,
    },
  ];

  let toggle = false;

  let classNameVisible = 'bg-white border-2 border-t-0 border-stone-200 z-10';
  let classNameHidden = 'bg-white border-2 border-stone-200 hidden';
  return (
    <>
      {customerAdminList.map((user) => {
        return (
          <div className={toggle ? classNameVisible : classNameHidden}>
            <div className=' p-1 flex gap-3'>
              <div className=' bg-cyan-200 w-8 h-8 rounded-full flex justify-center items-center'>
                <p className='font-bold text-sm'>{user.acronyme}</p>
              </div>
              <div className='flex flex-col text-xs'>
                <p className='font-semibold'>{user.name}</p>
                <p className=' text-gray-400' style={{ fontSize: '10px' }}>
                  {user.role}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default CustomerAdminMenuList;
