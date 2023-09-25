"use client";
import React, { useState } from 'react';
import { getMenuData, saveMenuData } from '../../utils/menuData';
import { MdDelete } from 'react-icons/md';


const MenuPage: React.FC = () => {
  const [menu, setMenu] = useState('');
  const [menus, setMenus] = useState(getMenuData());

  const handleAddMenu = () => {
    if (menu.trim() === '') {
      return;
    }

    const newMenu = {
      ID: (menus.length + 1).toString(),
      Menu: menu,
    };

    const updatedMenus = [...menus, newMenu];
    setMenus(updatedMenus);
    saveMenuData(updatedMenus);
    setMenu('');
  };

  const handleDeleteMenu = (id: string) => {
    const updatedMenus = menus.filter((item) => item.ID !== id);
    setMenus(updatedMenus);
    saveMenuData(updatedMenus);
  };

  return (
    <div className='bg-gray-200 p-4'>
        <div className='g-green rounded-lg mx-4 p-4'>
            <h1 className='text-3xl font-semibold'>Menu Page</h1>
            &nbsp;
            <div className='flex items-center space-x-2'>
                <input
                className='px-4 py-2 border border-gray-300 rounded-md flex-grow focus:outline-none focus:ring focus:border-blue-500'
                type="text"
                placeholder="Tambahkan menu"
                value={menu}
                onChange={(e) => setMenu(e.target.value)}
                />
                <button 
                className='bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md'
                onClick={handleAddMenu}>Tambah</button>
            </div>
            &nbsp;
            <table className='min-w-full'>
                <thead className='bg-white border-b'>
                <tr>
                    <th scope='col' className='text-sm font-medium text-gray-900 px-6 py-4 text-left'>ID</th>
                    <th scope='col' className='text-sm font-medium text-gray-900 px-6 py-4 text-left'>Menu</th>
                    <th scope='col' className='text-sm font-medium text-gray-900 px-6 py-4 text-left'>Hapus</th>
                </tr>
                </thead>
                <tbody>
                {menus.map((menuItem) => (
                    <tr
                    className='bg-gray-100 border-b' 
                    key={menuItem.ID}>
                    <td className='px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900'>{menuItem.ID}</td>
                    <td className='text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap'>{menuItem.Menu}</td>
                    <td className='text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap'>
                        <button 
                        className='rounded-md px-4 py-2 mt-4 hover:bg-blue-600 flex items-center justify-center'
                        onClick={() => handleDeleteMenu(menuItem.ID)}>
                            <MdDelete />
                        </button>
                    </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    </div>
  );
};

export default MenuPage;
