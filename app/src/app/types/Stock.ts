export interface Stock {
    id: number;
    name: string;
    price: number;
    quantity?: number;
    change: 'up' | 'down';
  }
  