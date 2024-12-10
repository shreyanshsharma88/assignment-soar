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
  IWeeklyActivityChart,
} from "../utils";
import { DummyCreditCardDetails, DummyTransactions, DummyWeeklyActivity } from "../utils/dummyData.tsx";

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
  const [weeklyActivity, setWeeklyActivity] = useState<IWeeklyActivityChart>(DummyWeeklyActivity)
  const value = useMemo(
    () => ({
      creditCardDetails,
      setCreditCardDetails,
      transactions,
      setTransactions,
      weeklyActivity,
      setWeeklyActivity
    }),
    [creditCardDetails, transactions, weeklyActivity]
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
  setWeeklyActivity: () => null,
  weeklyActivity: DummyWeeklyActivity
});
export const useDashboard = () => useContext(DashboardContext);
