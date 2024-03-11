"use client";

import { OutlinedInput } from "@mui/material";

const CustomAmountInput = ({
  locale,
  setAmount,
  setCustomAmountInputHasFocus,
  customAmount,
  setCustomAmount,
}: {
  locale: "ar" | "en";
  setAmount: (amount: number) => void;
  setCustomAmountInputHasFocus: (bool: boolean) => void;
  customAmount: number;
  setCustomAmount: (amount: number) => void;
}) => {
  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);

    if (isNaN(value) || value < 0) {
      return;
    }

    setCustomAmount(value);
    setAmount(value);
  };

  return (
    <OutlinedInput
      size="small"
      startAdornment="$"
      color="primary"
      value={customAmount}
      placeholder={locale === "ar" ? "قيمة أخرى" : "Other"}
      onFocus={() => setCustomAmountInputHasFocus(true)}
      onBlur={() => setCustomAmountInputHasFocus(false)}
      onChange={handleAmountChange}
      sx={{
        borderRadius: "4px",
        fontSize: "18px",
        maxWidth: "150px",
        border: "2px solid #ffffff",
        marginTop: { xs: "20px", md: "initial" },
        marginLeft: locale === "ar" ? "20px" : "initial",
        marginRight: locale === "ar" ? "initial" : "20px",
        bgcolor: customAmount ? "#ffffff" : "initial",
        color: customAmount ? "initial" : "#ffffff",
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
