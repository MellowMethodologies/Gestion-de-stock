import { useState } from 'react';
import { Stock } from '../types/Stock';

interface StockFormProps {
  stock?: Stock;
}

const StockForm: React.FC<StockFormProps> = ({ stock }) => {
  const [formData, setFormData] = useState({
    name: stock?.name || '',
    price: stock?.price || '',
    quantity: stock?.quantity || '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Perform form submission logic
    console.log('Form submitted:', formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-4">
        <label className="block mb-2">Stock Name</label>
        <input
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="border p-2 rounded w-full"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block mb-2">Price</label>
        <input
          name="price"
          type="number"
          value={formData.price}
          onChange={handleChange}
          className="border p-2 rounded w-full"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block mb-2">Quantity</label>
        <input
          name="quantity"
          type="number"
          value={formData.quantity}
          onChange={handleChange}
          className="border p-2 rounded w-full"
        />
      </div>
      <button className="bg-green-500 text-white p-2 rounded" type="submit">
        {stock ? 'Save Changes' : 'Add Stock'}
      </button>
    </form>
  );
};

export default StockForm;
