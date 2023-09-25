// utils/menuData.ts
import * as LocalStorage from 'local-storage';

const MENU_STORAGE_KEY = 'menuData';
const ORDERS_STORAGE_KEY = 'orderData';

export interface Menu {
  ID: string;
  Menu: string;
}

export interface Order {
  table: string;
  menu: string;
  amount: number;
}

export const getMenuData = (): Menu[] => {
  const storedData = LocalStorage.get(MENU_STORAGE_KEY);
  if (storedData) {
    return storedData as Menu[];
  } else {
    // Initial default data
    const defaultData: Menu[] = [
      {
        ID: '1',
        Menu: 'Nasi Goreng',
      },
      {
        ID: '2',
        Menu: 'Lalapan Ayam Goreng',
      },
    ];
    saveMenuData(defaultData);
    return defaultData;
  }
};

export const saveMenuData = (data: Menu[]): void => {
  LocalStorage.set(MENU_STORAGE_KEY, data);
};

export const saveOrder = (order: Order): void => {
  const existingOrders: Order[] = LocalStorage.get(ORDERS_STORAGE_KEY) || [];
  const updatedOrders = [...existingOrders, order];
  LocalStorage.set(ORDERS_STORAGE_KEY, updatedOrders);
};

export const getOrders = (): Order[] => {
  return LocalStorage.get(ORDERS_STORAGE_KEY) || [];
};
