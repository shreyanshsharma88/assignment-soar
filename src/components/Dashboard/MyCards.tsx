import { CreditCard } from "@mui/icons-material";
import { Button, Collapse, Stack, Typography, useTheme } from "@mui/material";
import { useDashboard } from "../../providers";
import { ICreditCardDetails } from "../../utils";
import { useSearchParams } from "react-router-dom";

export const MyCards = () => {
  const { creditCardDetails } = useDashboard();
  const [sp, ssp] = useSearchParams();

  return (
    <Stack width="100%" gap={4}>
      <Stack
        alignItems="center"
        direction="row"
        justifyContent="space-between"
        width="100%"
      >
        <Typography variant="h3" fontWeight={600} color="info.dark">
          My Cards
        </Typography>
        <Button
          variant="text"
          onClick={() => {
            console.log("here");
            if (!sp.get("moreCards")) {
              ssp({ ...sp, moreCards: "true" });
            } else {
              const params = new URLSearchParams(sp);
              params.delete("moreCards");
              ssp(params.toString());
            }
          }}
          sx={{
            cursor: "pointer",
            zIndex: 100,
          }}
        >
          {!sp.get("moreCards") ? " See All" : "View Less"}
        </Button>
      </Stack>
      <Stack overflow="auto" direction="row" gap={3}>
        {creditCardDetails?.slice(0, 2).map((card, index) => (
          <CustomCard {...card} key={`${card.cardNumber}${index}`} />
        ))}
      </Stack>
      <Collapse in={!!sp.get("moreCards")}>
        <Stack overflow="auto" direction="row" gap={5}>
          {creditCardDetails?.slice(2).map((card, index) => (
            <CustomCard {...card} key={`${card.cardNumber}${index}`} />
          ))}
        </Stack>
      </Collapse>
    </Stack>
  );
};

const CustomCard = (card: ICreditCardDetails) => {
  const theme = useTheme();
  const cardNumber =
    card.cardNumber.slice(0, 4) + " **** **** " + card.cardNumber.slice(12);
  return (
    <Stack
      sx={{
        backgroundColor: card.isPrimary
          ? "#2f2f39"
          : theme.palette.primary.light,
        borderRadius: "16px",

        width: "100%",
        height: "100%",
        display: "flex",
        gap: "20px",
        color: card.isPrimary ? "white !important" : "inherit",
        maxWidth: "500px",
        minWidth: "300px",
      }}
      border="1px solid #f3f6f9"
    >
      <Stack padding="25px">
        <Stack direction="row" justifyContent="space-between">
          <Stack direction="column">
            <Typography
              variant="caption"
              color={card.isPrimary ? "white !important" : "inherit"}
            >
              Balance
            </Typography>
            <Typography fontSize="18px" fontWeight={600}>
              ${card.balance}
            </Typography>
          </Stack>
          <CreditCard
            sx={{
              color: card.isPrimary ? "white !important" : "#464246",
              fontSize: "35px",
            }}
          />
        </Stack>
        <Stack width="75%" direction="row" justifyContent="space-between">
          <Stack direction="column">
            <Typography
              variant="caption"
              color={card.isPrimary ? "white !important" : "inherit"}
            >
              CARD HOLDER
            </Typography>
            <Typography fontSize="18px" fontWeight={600}>
              {card.cardHolderName}
            </Typography>
          </Stack>
          <Stack direction="column">
            <Typography
              variant="caption"
              color={card.isPrimary ? "white !important" : "inherit"}
            >
              VALID THRU
            </Typography>
            <Typography fontSize="18px" fontWeight={600}>
              {card.expirationDate}
            </Typography>
          </Stack>
        </Stack>
      </Stack>
      <Stack
        p={"25px"}
        borderRadius=" 0 0 16px 16px  "
        direction="row"
        bgcolor={card.isPrimary ? "#5c5b68" : "inherit"}
        pt={2}
        borderTop={card.isPrimary ? "none" : "3px solid #f3f6f9"}
      >
        <Typography fontSize={20} fontWeight={550}>
          {cardNumber}
        </Typography>
      </Stack>
    </Stack>
  );
};
