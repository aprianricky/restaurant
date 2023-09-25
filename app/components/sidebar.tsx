import React from 'react';
import '.././globals.css';
import Link from "next/link";
import { FiHome, FiMenu, FiShoppingCart, FiSliders, FiDollarSign } from 'react-icons/fi';

const Sidebar: React.FC = () => {
  return (
    <nav className="sidebar">
      <ul className="menu">
        <li>
          <a href="/">
            <FiHome />
            Home
          </a>
        </li>
        <li>
          <Link href="../pages/menu">
            <FiMenu />
            Menu
          </Link>
        </li>
        <li>
          <Link href="../pages/order">
            <FiShoppingCart />
            Order
          </Link>
        </li>
        <li>
          <Link href="../pages/dapur">
            <FiSliders />
            Dapur
          </Link>
        </li>
        <li>
          <Link href="../pages/kasir">
            <FiDollarSign />
            Kasir
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Sidebar;
