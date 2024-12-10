import { useState } from "react";

export const useDummyPromise = (ms?: number) => {
  const [loading, setLoading] = useState(false);

  const dummyPromise = async () => {
    setLoading(true);
    await new Promise((resolve) => setTimeout(resolve, ms ?? 3000));
    setLoading(false);
  };
  return {
    loading,
    dummyPromise,
  };
};
