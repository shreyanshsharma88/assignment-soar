import { ContactlessOutlined, CreditCardOutlined, PaidOutlined } from "@mui/icons-material";
import { ICreditCardDetails, ITransaction } from "./types";

export const DummyCreditCardDetails: ICreditCardDetails[] = [
  {
    balance: 5756,
    cardHolderName: "Eddy Cusuma",
    expirationDate: "12/22",
    cardNumber: "1234 5678 9101 1121",
    cardType: "Mastercard",
    isPrimary: true
  },
  {
    balance: 10000,
    cardHolderName: "John Doe",

    expirationDate: "12/22",
    cardNumber: "1234 5678 9101 1121",
    cardType: "Visa",
    isPrimary: false
  },
  {
    balance: 10000,
    cardHolderName: "Jane Doe",
    expirationDate: "12/22",
    cardNumber: "1234 5678 9101 1121",
    cardType: "Mastercard",
    isPrimary: false
    },
    {
        balance: 10000,
        cardHolderName: "Jane Doe",
        expirationDate: "12/22",
        cardNumber: "1234 5678 9101 1121",
        cardType: "Mastercard",
        isPrimary: false
    },
];

export const DummyTransactions: ITransaction[] = [
    {
        amount: 850,
        date: "2021-09-01",
        description: "Deposit from my card",
        type: "deposit",
        icon: <CreditCardOutlined sx={{color: '#ffc555'}}/>,
        backgroundColor: '#fff5d9'
        
    },
    {
        amount: 850,
        date: "2021-09-01",
        description: "Deposit paypal",
        type: "withdrawal",
        icon: <ContactlessOutlined sx={{color:"info.main"}}/>,
        backgroundColor:"#e7edff"
    },
    {
        amount: 8150,
        date: "2021-09-01",
        description: "Jemi Wilson",
        type: "deposit",
        icon: <PaidOutlined color="success"/>,
        backgroundColor: 'success.light'

    },
    {
        amount: 850,
        date: "2021-09-01",
        description: "Deposit paypal",
        type: "withdrawal",
        icon: <ContactlessOutlined sx={{color:"info.main"}}/>,
        backgroundColor:"#e7edff"
    }
]
