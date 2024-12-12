import {
  Box,
  Button,
  CircularProgress,
  IconButton,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useDashboard } from "../../providers";
import { IQuickTransferUser, ITransaction } from "../../utils";
import { useMemo, useState } from "react";
import { NavigateNext, Send } from "@mui/icons-material";
import { useDummyPromise } from "../../hooks";
import { format } from "date-fns";

export const QuickTransfer = () => {
  const { quickTransferUsers, setTransactions } = useDashboard();
  const [showAllUsers, setShowAllUsers] = useState(false);
  const [selectedUserNumber, setSelectedUser] =
    useState<IQuickTransferUser | null>(null);
  const [amount, setAmount] = useState<number>();
  const { dummyPromise, loading } = useDummyPromise();
  const users = useMemo(() => {
    if (showAllUsers) return quickTransferUsers;
    return quickTransferUsers?.slice(0, 3);
  }, [quickTransferUsers, showAllUsers]);
  return (
    <Stack
      bgcolor="common.white"
      borderRadius="25px"
      gap={4}
      p={2}
      width="100%"
      maxWidth={400}
    
    >
      <Stack overflow='auto' direction="row" gap={2} justifyContent="space-between">
        {users?.map((user) => (
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
        {!showAllUsers && (
          <IconButton
            onClick={() => setShowAllUsers(true)}
            sx={{
              boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
              height: 60,
              width: 60,
              alignSelf: "center",
            }}
          >
            <NavigateNext sx={{ color: "info.light" }} />
          </IconButton>
        )}
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
      textAlign='center'
    >
      <Box
        component="img"
        src={user.avatar}
        height={75}
        width={75}
        borderRadius="100%"
      />
      <Typography sx={{
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis",
        width: "100px",
      }} fontWeight={user.isSelected ? 600 : 400}>
        {user.name}
      </Typography>
      <Typography variant="caption" fontWeight={user.isSelected ? 600 : 400}>
        {user.position}
      </Typography>
    </Stack>
  );
};
