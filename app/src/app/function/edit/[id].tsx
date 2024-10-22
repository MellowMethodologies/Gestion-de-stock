'use client'
import { useRouter } from 'next/router';
import StockForm from '../../components/StockForm';
import { Stock } from '../../types/Stock';

const stock: Stock = { id: 1, name: 'Tech Corp', price: 150.4, quantity: 50, change: 'up' };

export default function EditStock() {
  const router = useRouter();
  const { id } = router.query;

  // Fetch stock data based on ID, for simplicity we hardcode here

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Edit Stock - {id}</h1>
      <StockForm stock={stock} />
    </div>
  );
}
