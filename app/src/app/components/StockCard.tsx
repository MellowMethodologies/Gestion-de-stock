import { Stock } from '../types/Stock';
import Link from 'next/link';

interface StockCardProps {
  stock: Stock;
}

const StockCard: React.FC<StockCardProps> = ({ stock }) => {
  return (
    <div className="border p-4 rounded shadow-lg">
      <h2 className="text-xl font-bold">{stock.name}</h2>
      <p>Price: ${stock.price}</p>
      <div className="flex justify-between items-center mt-2">
        <span className={`text-${stock.change === 'up' ? 'green' : 'red'}-500`}>
          {stock.change === 'up' ? '▲ Up' : '▼ Down'}
        </span>
        <div className="flex space-x-2">
          <Link href={`/edit/${stock.id}`}>
            <button className="bg-blue-500 text-white px-2 py-1 rounded">
              Edit
            </button>
          </Link>
          <button className="bg-red-500 text-white px-2 py-1 rounded">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default StockCard;
