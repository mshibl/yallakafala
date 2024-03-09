"use client";

import { OutlinedInput } from "@mui/material";
import { useState } from "react";

const CustomAmountInput = ({
  // amount,
  // hasFocus,
  locale,
  // presetAmounts,
  setAmount,
  setCustomAmountInputHasFocus,
  // setIsUsingCustomAmount,
  customAmount,
  setCustomAmount,
}: {
  // amount: number;
  // hasFocus: boolean;
  locale: "ar" | "en";
  // presetAmounts: number[];
  setAmount: (amount: number) => void;
  setCustomAmountInputHasFocus: (bool: boolean) => void;
  // setIsUsingCustomAmount: (bool: boolean) => void;
  setCustomAmount: (amount: number) => void;
  customAmount: number;
}) => {
  // const [controlledAmount, setControlledAmount] = useState(0);

  // const isSelected = hasFocus && !presetAmounts.includes(amount);

  // handleFocus = () => {
  //   setCustomAmountInputHasFocus(true);
  // }

  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);

    if (isNaN(value) || value < 0) {
      return;
    }

    // if (value === 0) {
    //   setAmount(presetAmounts[0]);
    // } else {
    setCustomAmount(value);
    setAmount(value);
    // }
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
