import { useState } from "react";
import useGreetingContract from "./useGreetingContract";

const useGreet = () => {
  const contract = useGreetingContract();
  const [loading, setLoading] = useState(false);

  const greet = async (message: string) => {
    if (!contract) return;

    setLoading(true);

    try {
      const transaction = await contract.greet(message);

      await transaction.wait();
    } catch {
    } finally {
      setLoading(false);
    }
  };

  return { greet, loading };
};

export default useGreet;
