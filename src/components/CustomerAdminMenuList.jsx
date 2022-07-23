import React from 'react';

const CustomerAdminMenuList = () => {
  const customerAdminList = [
    {
      name: 'Customer admin',
      role: 'Responsable Clients',
      acronyme: 'TB',
    },
    {
      name: 'Customer admin',
      role: 'Responsable Clients',
      acronyme: 'KC',
    },
    {
      name: 'Customer admin',
      role: 'Responsable Clients',
      acronyme: 'D',
    },
  ];

  let toggle = true;

  let classNameVisible = 'bg-white border-2 border-stone-200';
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
                <p>{user.name}</p>
                <p>{user.role}</p>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default CustomerAdminMenuList;
