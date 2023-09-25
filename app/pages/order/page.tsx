"use client";
import React, { useState } from 'react';
import { getMenuData, saveOrder } from '../../utils/menuData';

interface Order {
  table: string;
  menu: string;
  amount: number;
}

const OrderPage: React.FC = () => {
  const [selectedTable, setSelectedTable] = useState('');
  const [selectedMenu, setSelectedMenu] = useState('');
  const [selectedAmount, setSelectedAmount] = useState(1);
  const [orders, setOrders] = useState<Order[]>([]);
  const menus = getMenuData();

  const handleAddOrder = () => {
    if (selectedTable && selectedMenu && selectedAmount > 0) {
      const newOrder: Order = {
        table: selectedTable,
        menu: selectedMenu,
        amount: selectedAmount,
      };

      // Save the order
      saveOrder(newOrder);

      // Update the orders state
      setOrders([...orders, newOrder]);

      // Reset selection
      setSelectedTable('');
      setSelectedMenu('');
      setSelectedAmount(1);
    }
  };

  return (
    <div className='bg-gray-200 p-4'>
      <div className='g-green rounded-lg mx-4 p-4'>
        <h1 className='text-3xl font-semibold'>Order Page</h1>
        &nbsp;
        <div className='flex items-center space-x-2 mb-4'>
          {/* Tab Buttons */}
          <button
            className={`${
              selectedTable === 'Meja 1' ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-700'
            } px-4 py-2 rounded-md`}
            onClick={() => setSelectedTable('Meja 1')}
          >
            Meja 1
          </button>
          <button
            className={`${
              selectedTable === 'Meja 2' ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-700'
            } px-4 py-2 rounded-md`}
            onClick={() => setSelectedTable('Meja 2')}
          >
            Meja 2
          </button>
          <button
            className={`${
              selectedTable === 'Meja 3' ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-700'
            } px-4 py-2 rounded-md`}
            onClick={() => setSelectedTable('Meja 3')}
          >
            Meja 3
          </button>
        </div>
        &nbsp;
        <div className='flex items-center space-x-2 mb-4'>
            <div className='flex items-center space-x-4 mb-4'>
              <label className='text-gray-700 font-medium'>Menu:</label>
                <div className='relative inline-block w-65'>
                  <select
                    className='block w-full bg-white border border-gray-300 hover:border-gray-500 px-4 py-2 pr-8 rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-500'
                    value={selectedMenu}
                    onChange={(e) => setSelectedMenu(e.target.value)}
                  >
                    <option value="">Pilih Menu</option>
                    {menus.map((menu) => (
                      <option key={menu.ID} value={menu.Menu}>
                        {menu.Menu}
                      </option>
                    ))}
                  </select>
                </div>

            </div>
            &nbsp;
            <div className='flex items-center space-x-4 mb-4'>
              <label className='text-gray-700 font-medium'>Jumlah:</label>
                <div className='relative inline-block w-25'>
                  <select
                    value={selectedAmount.toString()}
                    onChange={(e) => setSelectedAmount(Number(e.target.value))}
                    className="w-full bg-white border border-gray-300 text-gray-700 px-4 py-2 pr-8 rounded-md leading-tight focus:outline-none focus:ring focus:border-blue-500"
                  >
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                  </select>      
                </div>
                &nbsp;
                <button
                className='bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md' 
                onClick={handleAddOrder}>Tambah</button>
            </div>
            
        </div>
        &nbsp;
        <h2>Log Pesanan:</h2>
        <ul>
          {orders.map((order, index) => (
            <li key={index}>
              Meja: {order.table}, Menu: {order.menu}, Jumlah: {order.amount}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default OrderPage;
