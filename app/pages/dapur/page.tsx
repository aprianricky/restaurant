"use client";
import React, { useState } from 'react';
import { getOrders, Order } from '../../utils/menuData'; // Import the function to get orders

interface DapurPageProps {}

const DapurPage: React.FC<DapurPageProps> = () => {
  const [orders, setOrders] = useState<Order[]>(getOrders()); // Use useState to manage orders state
  const [selectedTable, setSelectedTable] = useState<string>(''); // Track selected table

  // Extract the unique table names from the orders
  const tableNames: string[] = Array.from(new Set(orders.map((order) => order.table)));

  const handleDeleteData = () => {
    if (selectedTable) {
      // Show a browser-native confirmation dialog
      const confirmed = window.confirm('Hapus Pesanan?');

      if (confirmed) {
        // Delete all data records for the selected table (both menu and orders)
        const updatedOrders = orders.filter((order) => order.table !== selectedTable);
        localStorage.setItem('orderData', JSON.stringify(updatedOrders));

        // Reset the selected table and orders state
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
              onClick={() => setSelectedTable(tableName)} // Set the selected table on click
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




