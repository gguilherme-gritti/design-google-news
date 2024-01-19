"use client";

import ThemesProviders from "@/common/styles/theme/provider";

const Providers = ({ children }: { children: React.ReactNode }) => {
  return <ThemesProviders>{children}</ThemesProviders>;
};

export default Providers;
