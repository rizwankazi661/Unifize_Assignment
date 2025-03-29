export interface Transaction {
  date: number;
  isPaymentSuccess: boolean;
  to: string;
  amount: string;
  account: string;
  paymentMethod: string;
  attachment: boolean;
  type: string;
}
