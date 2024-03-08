// Define a callback type for better type checking
type BlackbaudInitFn = ({
  key,
  payment_configuration_id,
  transaction_type,
}: {
  key: string;
  payment_configuration_id: string;
  transaction_type: string;
}) => void;

declare global {
  interface Window {
    Blackbaud_Init: BlackbaudInitFn;
    Blackbaud_Open: () => void;
  }
}

export function loadBlackbaudCheckout(): void {
  const script: HTMLScriptElement = document.createElement("script");
  script.type = "text/javascript";
  script.src = "https://payments.blackbaud.com/Checkout/bbCheckout.2.0.js";

  // Handle script loading completion
  script.onload = (): void => {
    console.log("Script loaded successfully");
    console.log(window.Blackbaud_Init);
    // loads the Checkout form in the background, but will not display it
    window.Blackbaud_Init({
      key: "572a1cea-3682-4cfd-8b8a-39fb0131b093",
      payment_configuration_id: "1198511d-d7ba-429b-9ea5-00ef91fbd0f6",
      transaction_type: "card_not_present",
    });

    window.Blackbaud_Open();
    // callback();
  };

  // handle loading errors
  script.onerror = (error: Event | string): void => {
    console.error(`Error loading script: ${error}`);
  };

  document.body.appendChild(script);
}

// // Usage example with TypeScript
// loadScript("url_of_your_script.js", () => {
//   // Assuming myGlobalMethod is attached to window in your external script
//   // Use type assertion to tell TypeScript about the method on the window object
//   const myMethod: CallbackFunction | undefined = (window as any).myGlobalMethod;
//   if (typeof myMethod === "function") {
//     myMethod();
//   }
// });
