"use client";
import React, { useState } from 'react';
import { getOrders, Order } from '../../utils/menuData';

interface DapurPageProps {}

const DapurPage: React.FC<DapurPageProps> = () => {
  const [orders, setOrders] = useState<Order[]>(getOrders()); 
  const [selectedTable, setSelectedTable] = useState<string>(''); // Track tabel terpilih

  
  const tableNames: string[] = Array.from(new Set(orders.map((order) => order.table)));

  const handleDeleteData = () => {
    if (selectedTable) {
      // Fungsi untuk dialog konfirmasi dari browser-native
      const confirmed = window.confirm('Hapus Pesanan?');

      if (confirmed) {
        // Hapus semua record data untuk tabel terpilih (menu dan order)
        const updatedOrders = orders.filter((order) => order.table !== selectedTable);
        localStorage.setItem('orderData', JSON.stringify(updatedOrders));

        // Reset tabel terpilih dan state dari order
        setSelectedTable('');
        setOrders(updatedOrders);
      }
    }
  };

  return (
    <div className="bg-gray-200 p-4">
      <div className="g-green rounded-lg mx-4 p-4">
        <h1 className='text-3xl font-semibold'>Dapur Page</h1>
        &nbsp;
        <div className="flex flex-wrap">
          {tableNames.map((tableName) => (
            <div
              key={tableName}
              className={`w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 p-2 ${
                selectedTable === tableName ? 'cursor-pointer' : ''
              }`}
              onClick={() => setSelectedTable(tableName)} 
            >
              <div
                className={`bg-white rounded-lg shadow-lg p-4 ${
                  selectedTable === tableName ? 'border border-red-500' : ''
                }`}
              >
                <h2 className="text-lg font-semibold">{tableName}</h2>
                <ul>
                  {orders
                    .filter((order) => order.table === tableName)
                    .map((order, index) => (
                      <li key={index} className="mb-2">
                        <strong>Menu:</strong> {order.menu}
                        <br />
                        <strong>Jumlah:</strong> {order.amount}
                      </li>
                    ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
        <button onClick={handleDeleteData} className="mt-4 bg-red-500 text-white px-4 py-2 rounded">
          Batalkan Pesanan
        </button>
      </div>
    </div>
  );
};

export default DapurPage;




