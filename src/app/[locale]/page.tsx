"use client";

// import { loadBlackbaudCheckout } from "@/src/utils/blackbaud-checkout";
import { Box } from "@mui/material";
import { use, useEffect } from "react";

declare global {
  interface Window {
    Blackbaud_Init: ({
      key,
      payment_configuration_id,
      transaction_type,
      amount,
    }: {
      key: string;
      payment_configuration_id: string;
      transaction_type?: string;
      amount?: number;
    }) => void;
    Blackbaud_Open: ({ amount }: { amount: number }) => void;
  }
}

const Home = () => {
  // loads the Checkout form in the background, but will not display it
  useEffect(() => {
    setTimeout(() => {
      try {
        window.Blackbaud_Init({
          key: "572a1cea-3682-4cfd-8b8a-39fb0131b093",
          payment_configuration_id: "1198511d-d7ba-429b-9ea5-00ef91fbd0f6",
          // amount: 10.0,
          transaction_type: "card_not_present",
        });

        window.Blackbaud_Open({
          amount: 12.0,
        });
      } catch (err) {
        console.error(err);
      }
    }, 500);
  }, []);

  // loadBlackbaudCheckout()

  return <Box height="500px"></Box>;
};

export default Home;
