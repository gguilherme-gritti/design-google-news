"use client";

import "@/common/styles/font/imports.css";

import { useState } from "react";
import ThemesProviders from "@/common/styles/theme/provider";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { defaultReactQuerySettings } from "../react-query/constants";


const Providers = ({ children }: { children: React.ReactNode }) => {
  const [client] = useState(new QueryClient(defaultReactQuerySettings));

  return (
    <ThemesProviders>
      <QueryClientProvider client={client}>
        {children}
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </ThemesProviders>
  );
};

export default Providers;
