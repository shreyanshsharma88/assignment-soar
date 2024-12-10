import React, {
  createContext,
  PropsWithChildren,
  useContext,
  useMemo,
  useState,
} from "react";
import {
  DashboardContextType,
  ICreditCardDetails,
  ITransaction,
} from "../utils";
import { DummyCreditCardDetails, DummyTransactions } from "../utils/dummyData";

export const DashboardProvider: React.FC<PropsWithChildren> = ({
  children,
}) => {
  // use OR null to avoid undefined incase actual api is used
  const [creditCardDetails, setCreditCardDetails] = useState<
    ICreditCardDetails[] | null
  >(DummyCreditCardDetails);
  const [transactions, setTransactions] = useState<ITransaction[] | null>(
    DummyTransactions
  );
  const value = useMemo(
    () => ({
      creditCardDetails,
      setCreditCardDetails,
      transactions,
      setTransactions,
    }),
    [creditCardDetails, transactions]
  );

  return (
    <DashboardContext.Provider value={value}>
      {children}
    </DashboardContext.Provider>
  );
};

export const DashboardContext = createContext<DashboardContextType>({
  creditCardDetails: null,
  setCreditCardDetails: () => null,
  transactions: null,
  setTransactions: () => null,
});
export const useDashboard = () => useContext(DashboardContext);
