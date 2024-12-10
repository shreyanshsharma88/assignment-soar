import { Box, Stack, Typography } from "@mui/material";
import { useDashboard } from "../../providers";
import { ITransaction } from "../../utils";

export const Transactions = () => {
  const { transactions } = useDashboard();
  return (
    <Stack gap={2}>
      <Typography variant="h3" fontWeight={600} color="info.dark">
        Transactions
      </Typography>
      <Stack
        width="100%"
        borderRadius="20px"
        bgcolor="common.white"
        p={2}
        gap={2}
      >
        {transactions?.map((transaction, index) => (
          <TransactionDetail key={index} {...transaction} />
        ))}
      </Stack>
    </Stack>
  );
};

const TransactionDetail = (transaction: ITransaction) => {
  return (
    <Stack alignItems="center" width="100%" direction="row" gap={4}>
      <Box
        borderRadius="100%"
        height={50}
        width={50}
        bgcolor={transaction.backgroundColor}
        justifyContent="center"
        alignItems="center"
        display="flex"
      >
        {transaction.icon}
      </Box>
      <Stack>
        <Typography
          width={165}
          sx={{
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
          variant="h6"
          fontSize='18px'
          fontWeight={600}
        >
          {transaction.description}
        </Typography>
        <Typography variant="caption" fontSize='16px'>{transaction.date}</Typography>
      </Stack>
      <Typography
        variant="h5"
        fontWeight={600}
        color={transaction.type === "withdrawal" ? "error" : "success"}
      >
        {transaction.type === "withdrawal" ? "-" : "+"}
        {transaction.amount}
      </Typography>
    </Stack>
  );
};
