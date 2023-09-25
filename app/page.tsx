"use client";
import React, { useState } from 'react';

const HomePage: React.FC = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const openDialog = () => {
    setIsDialogOpen(true);
  };

  const closeDialog = () => {
    setIsDialogOpen(false);
  };

  return (
    <div className='bg-gray-200 p-4'>
      <div className='bg-green rounded-lg mx-4 p-4'>
        <h1 className='text-3xl font-semibold'>Restaurant - Ricky</h1>
        &nbsp;
        <p>Selamat datang di Restaurant kami. Di sini kami menyediakan berbagai kuliner yang tentunya akan memanjakan lidah Anda.
          Silakan pesan Menu terbaik kami, dan nikmati promo gratis untuk 2 kali kunjungan pertama Anda.
        </p>
        <button className='bg-blue-500 text-white px-4 py-2 mt-2 rounded-lg' onClick={openDialog}>
          Detail Project
        </button>
      </div>

      {isDialogOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold">Ambisius Coding Challenge #230916H</h2>
            <p className='mb-5'>Ini adalah project website guna memenuhi Coding Challenge sebagai tahapan rekrutment selanjutnya.
              Dibuat dengan mengikuti kaidah panduan yang tertera. Terima kasih atas kesempatannya.

              Salam Hormat,
              Ricky Aprian
            </p>
            <button onClick={closeDialog} className="bg-red-500 text-white rounded-md px-4 py-2 mt-4 hover:bg-red-600">
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default HomePage;
