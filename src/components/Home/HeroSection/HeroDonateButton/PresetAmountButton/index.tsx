import { Button } from "@mui/material";

const PresetAmountButton = ({
  amount,
  setAmount,
  selected,
  locale,
}: {
  amount: number;
  setAmount: (amount: number) => void;
  selected: boolean;
  locale: "ar" | "en";
}) => {
  return (
    <Button
      variant="contained"
      sx={{
        marginLeft: locale === "ar" ? "20px" : "initial",
        marginRight: locale === "ar" ? "initial" : "20px",
        border: "2px solid #ffffff",
        bgcolor: selected ? "#ffffff" : "initial",
        color: selected ? "primary.main" : "#ffffff",
        fontSize: "20px",
        "&:hover": {
          bgcolor: "#ffffff",
          color: "primary.main",
        },
      }}
      onClick={() => setAmount(amount)}
    >
      {amount}$
    </Button>
  );
};

export default PresetAmountButton;
