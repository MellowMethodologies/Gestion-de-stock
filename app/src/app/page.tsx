
import StockList from './components/StockList';

export default function Home() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Stock Manager</h1>
      <StockList />
    </div>
  );
}
