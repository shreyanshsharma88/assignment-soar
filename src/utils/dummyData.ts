import { ICreditCardDetails ,ITransaction } from "./types";

export const DummyCreditCardDetails: ICreditCardDetails[] = [
  {
    balance: 5756,
    cardHolderName: "Eddy Cusuma",
    expirationDate: "12/22",
    cardNumber: "1234 5678 9101 1121",
    cardType: "Mastercard",
  },
  {
    balance: 10000,
    cardHolderName: "John Doe",

    expirationDate: "12/22",
    cardNumber: "1234 5678 9101 1121",
    cardType: "Visa",
  },
  {
    balance: 10000,
    cardHolderName: "Jane Doe",
    expirationDate: "12/22",
    cardNumber: "1234 5678 9101 1121",
    cardType: "Mastercard",
    },
    {
        balance: 10000,
        cardHolderName: "Jane Doe",
        expirationDate: "12/22",
        cardNumber: "1234 5678 9101 1121",
        cardType: "Mastercard",
    },
];

export const DummyTransactions: ITransaction[] = [
    {
        amount: 850,
        date: "2021-09-01",
        description: "Deposit from my card",
        type: "deposit",
    },
    {
        amount: 850,
        date: "2021-09-01",
        description: "Deposit paypal",
        type: "withdrawal",
    },
    {
        amount: 8150,
        date: "2021-09-01",
        description: "Jemi Wilson",
        type: "deposit",

    },
    {
        amount: 850,
        date: "2021-09-01",
        description: "Deposit paypal",
        type: "withdrawal",
    }
]
