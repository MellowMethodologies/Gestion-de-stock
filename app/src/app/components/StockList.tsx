'use client';
import { Stock } from '../types/Stock';
import StockCard from './StockCard';
import Link from 'next/link';
import { useState } from 'react';

const stocks: Stock[] = [
  { id: 1, name: 'Tech Corp', price: 150.4, change: 'up' },
  { id: 2, name: 'Health Inc', price: 300, change: 'down' },
  { id: 3, name: 'Retail Co', price: 75.6, change: 'up' },
  { id: 4, name: 'Retail Co', price: 75.6, change: 'up' },
  { id: 5, name: 'Retail Co', price: 75.6, change: 'up' },
  { id: 6, name: 'Retail Co', price: 75.6, change: 'up' },
];

const StockList = () => {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div>
      <div className="flex justify-between mb-4">
        <input
          className="border p-2 rounded w-1/2 text-black"
          placeholder="Search stocks..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <Link href="/add">
          <button className="bg-green-500 text-white p-2 rounded">
            Add Stock
          </button>
        </Link>
      </div>
      <div className="grid grid-cols-3 gap-4">
        {stocks
          .filter((stock) =>
            stock.name.toLowerCase().includes(searchTerm.toLowerCase())
          )
          .map((stock) => (
            <StockCard key={stock.id} stock={stock} />
          ))}
      </div>
    </div>
  );
};

export default StockList;
