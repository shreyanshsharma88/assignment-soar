import { ContactlessOutlined, CreditCardOutlined, PaidOutlined } from "@mui/icons-material";
import { ICreditCardDetails, IQuickTransferUser, ITransaction, IUserDetails, IWeeklyActivityChart } from "./types";

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

export const DummyWeeklyActivity: IWeeklyActivityChart = {
    labels: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    datasets: [
        {
            label: "Deposits",
            data: [100, 150, 200, 50, 100, 250, 300],
            backgroundColor: "#396aff",
            borderRadius: 100,
            barThickness: 15
        },
        {
            label: "Withdrawals",
            data: [50, 100, 150, 200, 250, 300, 350],
            backgroundColor: "#000",
            borderRadius: 100,
            barThickness: 15
        }
    ]   
}

export const DummyQuickTransferUsers: IQuickTransferUser[] = [
    {
        name: "John Doe",
        accountNumber: "1246567890",
        bank: "GTBank",
        avatar: "https://randomuser.me/api/portraits/men/75.jpg",
        position: "CEO"
    },
    {
        name: "Jane Doe",
        accountNumber: "9875367890",
        bank: "GTBank",
        avatar: "https://randomuser.me/api/portraits/women/75.jpg",
        position: "CTO"
    },
    {
        name: "Randy Press",
        accountNumber: "12300637890",
        bank: "GTBank",
        avatar: "https://randomuser.me/api/portraits/men/76.jpg",
        position: "COO"
    },
    {
        name: "Livia Bator",
        accountNumber: "1234567890",
        bank: "GTBank",
        avatar: "https://randomuser.me/api/portraits/women/76.jpg",
        position: "Co-worker"
    },
    {
        name: "Olivia Benji",
        accountNumber: "1230027890",
        bank: "GTBank",
        avatar: "https://randomuser.me/api/portraits/women/79.jpg",
        position: "Designer"
    },
    {
        name: "Mark Json",
        accountNumber: "1002002874",
        bank: "GTBank",
        avatar: "https://randomuser.me/api/portraits/men/89.jpg",
        position: "Friend"
    }
]

export const DummyUserDetails: IUserDetails = {
    name: "Charlene Reed",
    city: "Indianapolis",
    dob: "05/06/1998",
    email: "charlene@gmail.com",
    password: "password",
    permanentAddress: "1234 Main St",
    presentAddress: "1234 Main St",
    username: "charlene",
    country: "USA",
    postalCode: "46204",
    profilePic: "https://randomuser.me/api/portraits/women/77.jpg"
}