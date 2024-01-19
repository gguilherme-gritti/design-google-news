"use client";

import { useState } from "react";
import ThemesProviders from "@/common/styles/theme/provider";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { defaultReactQuerySettings } from "../react-query/constants";

const Providers = ({ children }: { children: React.ReactNode }) => {
  const [client] = useState(new QueryClient(defaultReactQuerySettings));

  return (
    <QueryClientProvider client={client}>
      <ThemesProviders>{children}</ThemesProviders>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

export default Providers;
