
export interface DashboardContextType {
    creditCardDetails: ICreditCardDetails[] | null;
    setCreditCardDetails: React.Dispatch<
      React.SetStateAction<ICreditCardDetails[] | null>
    >;
    transactions: ITransaction[] | null;
      setTransactions: React.Dispatch<
          React.SetStateAction<ITransaction[] | null>
          >;
  }
  
  export interface ICreditCardDetails {
    balance: number;
    cardNumber: string;
    expirationDate: string;
    cardHolderName: string;
    cardType: string;
    isPrimary: boolean
  }
  
  export interface ITransaction {
      amount: number;
      date: string;
      description: string;
      type: "deposit" | "withdrawal";
      icon: JSX.Element;
      backgroundColor: string;
  }