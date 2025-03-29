import { useState, useEffect, useMemo } from "react";
import dummyData from "../../data/transactions.json";
import { Transaction } from "../../dataTypes/interfaces/Transaction";

const useTransactions = () => {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  useEffect(() => {
    getTransactions();
  }, []);

  function getTransactions() {
    setTransactions(dummyData.transactions);
  }

  const formatDate = useMemo(() => {
    return (timestamp: number) => {
      const date = new Date(timestamp * 1000);
      return date.toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
      });
    };
  }, []);

  return { transactions, formatDate };
};

export default useTransactions;
