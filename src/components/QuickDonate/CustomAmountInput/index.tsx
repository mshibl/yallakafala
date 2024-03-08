import { OutlinedInput } from "@mui/material";

const CustomAmountInput = ({
  amount,
  setAmount,
  presetAmounts,
  locale,
}: {
  amount: number;
  setAmount: (amount: number) => void;
  presetAmounts: number[];
  locale: "ar" | "en";
}) => {
  const nonStandardAmount = !presetAmounts.includes(amount);

  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);
    if (isNaN(value) || value < 0) {
      return;
    }

    if (value === 0) {
      setAmount(presetAmounts[0]);
    } else {
      setAmount(value);
    }
  };

  return (
    <OutlinedInput
      size="small"
      startAdornment="$"
      color="primary"
      value={nonStandardAmount ? amount : ""}
      placeholder={locale === "ar" ? "قيمة أخرى" : "Other"}
      onChange={handleAmountChange}
      sx={{
        borderRadius: "4px",
        fontSize: "18px",
        maxWidth: "150px",
        border: "2px solid #ffffff",
        bgcolor: nonStandardAmount ? "#ffffff" : "initial",
        marginLeft: locale === "ar" ? "20px" : "initial",
        marginRight: locale === "ar" ? "initial" : "20px",
        marginTop: { xs: "20px", md: "initial" },
        color: nonStandardAmount ? "initial" : "#ffffff",
        paddingLeft: locale === "ar" ? "initial" : "10px",
        paddingRight: locale === "ar" ? "10px" : "initial",
        "& input": {
          paddingLeft: locale === "ar" ? "initial" : "10px",
          paddingRight: locale === "ar" ? "10px" : "initial",
        },
      }}
    />
  );
};

export default CustomAmountInput;
