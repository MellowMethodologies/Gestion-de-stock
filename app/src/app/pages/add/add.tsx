import StockForm from '../../components/StockForm';

export default function AddStock() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Add New Stock</h1>
      <StockForm />
    </div>
  );
}
