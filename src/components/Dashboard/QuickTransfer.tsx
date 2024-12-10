import {
  Box,
  Button,
  CircularProgress,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useDashboard } from "../../providers";
import { IQuickTransferUser, ITransaction } from "../../utils";
import { useState } from "react";
import { Send } from "@mui/icons-material";
import { useDummyPromise } from "../../hooks";
import { format } from "date-fns";

export const QuickTransfer = () => {
  const { quickTransferUsers, setTransactions } = useDashboard();
  const [selectedUserNumber, setSelectedUser] =
    useState<IQuickTransferUser | null>(null);
  const [amount, setAmount] = useState<number>();
  const { dummyPromise, loading } = useDummyPromise();
  return (
    <Stack
      bgcolor="common.white"
      borderRadius="25px"
      gap={4}
      p={2}
      width="100%"
    >
      <Stack direction="row" justifyContent="space-between">
        {quickTransferUsers?.map((user) => (
          <UserAvatar
            key={user.accountNumber}
            name={user.name}
            accountNumber={user.accountNumber}
            bank={user.bank}
            avatar={user.avatar}
            position={user.position}
            isSelected={
              selectedUserNumber?.accountNumber === user.accountNumber
            }
            handleClick={() => setSelectedUser(user)}
          />
        ))}
      </Stack>
      <Stack direction="row" gap={2} alignItems="center">
        <Typography variant="caption" fontSize="16px">
          Write Amount
        </Typography>
        <TextField
          placeholder="Amount"
          onChange={(e) => setAmount(Number(e.target.value))}
          value={amount}
          type="number"
          sx={{
            ".MuiOutlinedInput-notchedOutline": {
              border: "none",
            },
            ".MuiOutlinedInput-root": {
              paddingRight: "0",
            },
          }}
          slotProps={{
            input: {
              endAdornment: (
                <Button
                  variant="text"
                  disabled={!selectedUserNumber}
                  sx={{
                    backgroundColor: "common.black",
                    borderRadius: "24px",
                    width: "100%",
                    color: "common.white",
                    fontWeight: 400,
                    "&.Mui-disabled": {
                      color: "gray",
                    },
                  }}
                  onClick={() => {
                    dummyPromise().then(() => {
                      setTransactions((p) => {
                        const data = {
                          amount: amount!,
                          date: format(new Date(), "yyyy-MM-dd"),
                          description: `Transfer to ${selectedUserNumber?.name}`,
                          type: "withdrawal",
                          icon: <Send sx={{ color: "common.white" }} />,
                          backgroundColor: "success.main",
                        };
                        if (!p) {
                          return [data as ITransaction];
                        }
                        return [data as ITransaction, ...p];
                      });
                    });
                  }}
                >
                  {
                    <>
                      {loading ? (
                        <CircularProgress />
                      ) : (
                        <>
                          {" "}
                          Send
                          <Send sx={{ pl: 1 }} />
                        </>
                      )}
                    </>
                  }
                </Button>
              ),
              sx: {
                backgroundColor: "primary.main",
                borderRadius: "25px",
                border: "none",
                height: "50px",
              },
            },
          }}
        />
      </Stack>
    </Stack>
  );
};

const UserAvatar = (
  user: IQuickTransferUser & { isSelected: boolean; handleClick: () => void }
) => {
  return (
    <Stack
      gap={1}
      onClick={user.handleClick}
      alignItems="center"
      sx={{ cursor: "pointer" }}
    >
      <Box
        component="img"
        src={user.avatar}
        height={75}
        width={75}
        borderRadius="100%"
      />
      <Typography fontWeight={user.isSelected ? 600 : 400}>
        {user.name}
      </Typography>
      <Typography variant="caption" fontWeight={user.isSelected ? 600 : 400}>
        {user.position}
      </Typography>
    </Stack>
  );
};
