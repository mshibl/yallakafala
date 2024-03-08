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

export function loadBlackbaudCheckout(): void {
  // Don't run this script locally
  if (window.location.hostname === "localhost") {
    console.log("Running locally, skipping blackbaud checkout script load.");
    return;
  }

  const script: HTMLScriptElement = document.createElement("script");
  script.type = "text/javascript";
  script.src = "https://payments.blackbaud.com/Checkout/bbCheckout.2.0.js";

  // Handle script loading completion
  script.onload = (): void => {
    console.log("Blackbaud checkout script loaded successfully.");

    // loads the Checkout form in the background, but will not display it
    window.Blackbaud_Init({
      key: "572a1cea-3682-4cfd-8b8a-39fb0131b093",
      payment_configuration_id: "1198511d-d7ba-429b-9ea5-00ef91fbd0f6",
      transaction_type: "card_not_present",
    });
  };

  // handle loading errors
  script.onerror = (error: Event | string): void => {
    console.error(`Error loading blackbaud checkout script: ${error}`);
  };

  document.body.appendChild(script);
}
