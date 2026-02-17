'use client';

import { ChakraProvider, defaultSystem } from "@chakra-ui/react";
import { Provider as ReduxProvider } from "react-redux";
import { store } from "../../store";

function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props;

  return (
    <html suppressHydrationWarning>
      <body>
        <ReduxProvider store={store}>
          <ChakraProvider value={defaultSystem}>
            {children}
          </ChakraProvider>
        </ReduxProvider>
      </body>
    </html>
  );
}

export default RootLayout;