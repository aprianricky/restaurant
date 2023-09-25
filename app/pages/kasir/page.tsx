"use client";
import React, { useState } from 'react';
import { getOrders, Order, getMenuData } from '../../utils/menuData'; 

interface KasirPageProps {}

const KasirPage: React.FC<KasirPageProps> = () => {
  const orders: Order[] = getOrders(); // Ambil Pesanan

  // Ekstrak nama tabel unik dari pesanan
  const tableNames: string[] = Array.from(new Set(orders.map((order) => order.table)));

  const [selectedTable, setSelectedTable] = useState<string>('');
  const [receipt, setReceipt] = useState<Order[]>([]);

  const handlePrintReceipt = () => {
    // Filter pesanan dari tabel terpilih
    const tableOrders = orders.filter((order) => order.table === selectedTable);

    // Menyiapkan struk
    setReceipt(tableOrders);
  };

  const handleClearTable = () => {
    // Filter pesanan untuk membersihkan tabel
    const updatedOrders = orders.filter((order) => order.table !== selectedTable);

    // Menyimpan data terbaru
    localStorage.setItem('orderData', JSON.stringify(updatedOrders));

    // Mengosongkan tabel dan struk
    setSelectedTable('');
    setReceipt([]);
  };

  return (
    <div className='bg-gray-200 p-4'>
      <div className='g-green rounded-lg mx-4 p-4'>
        <h1 className='text-3xl font-semibold'>Kasir Page</h1>
        &nbsp;
        <div className='flex items-center space-x-2 mb-4'>
            <label className='text-gray-700 font-medium'>Pilih Meja:</label>
            <div className='relative inline-block w-70'>
              <select 
              className='block w-full bg-white border border-gray-300 hover:border-gray-500 px-4 py-2 pr-8 rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-500'
              value={selectedTable} onChange={(e) => setSelectedTable(e.target.value)}>
                <option value="">Pilih Meja</option>
                {tableNames.sort().map((tableName) => (
                  <option key={tableName} value={tableName}>
                    {tableName}
                  </option>
                ))}
              </select>
            </div>
            &nbsp;
            <button
            className='bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md'
            onClick={handlePrintReceipt}>Print Struk</button>
            {selectedTable && (
              <button 
              className='bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md'
              onClick={handleClearTable}>Kosongkan Meja</button>
            )}
        </div>

        <h2>Receipt:</h2>
        <table className='min-w-full'>
            <thead className='bg-white border-b'>
              <tr>
                <th scope='col' className='text-sm font-medium text-gray-900 px-6 py-4 text-left'>Jumlah</th>
                <th scope='col' className='text-sm font-medium text-gray-900 px-6 py-4 text-left'>Menu</th>
                <th scope='col' className='text-sm font-medium text-gray-900 px-6 py-4 text-left'>Harga</th>
              </tr>
            </thead>
            <tbody>
              {receipt.map((order, index) => (
                <tr 
                className='bg-gray-100 border-b'
                key={index}>
                  <td className='px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900'>{order.amount}</td>
                  <td className='text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap'>{order.menu}</td>
                  <td className='text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap'>Gratis</td>
                </tr>
              ))}
            </tbody>
        </table>     
      </div>
    </div>
  );
};

export default KasirPage;
