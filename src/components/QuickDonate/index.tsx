"use client";

import { Box, Button, OutlinedInput } from "@mui/material";
import { useEffect, useState } from "react";
import PresetAmountButton from "./PresetAmountButton";
import CustomAmountInput from "./CustomAmountInput";
import { loadBlackbaudCheckout } from "@/src/utils/blackbaud-checkout";
import SubmitDonationButton from "./SubmitDonationButton";

const QuickDonate = ({ locale }: { locale: "ar" | "en" }) => {
  useEffect(() => {
    loadBlackbaudCheckout();
  }, []);

  const [amount, setAmount] = useState(10);
  const presetAmounts = [10, 25, 50]; // USD

  const handleSubmit = () => {
    window.Blackbaud_Open({ amount });
  };

  return (
    <Box display="flex" width="100%" flexDirection="column">
      <Box display="flex" flexDirection={{ xs: "column", md: "row" }}>
        <Box display="flex">
          {presetAmounts.map((presetAmount) => (
            <PresetAmountButton
              key={presetAmount}
              amount={presetAmount}
              setAmount={setAmount}
              selected={amount === presetAmount}
              locale={locale}
            />
          ))}
        </Box>
        <CustomAmountInput
          amount={amount}
          setAmount={setAmount}
          presetAmounts={presetAmounts}
          locale={locale}
        />
      </Box>
      <SubmitDonationButton handleSubmit={handleSubmit} locale={locale} />
    </Box>
  );
};

export default QuickDonate;
