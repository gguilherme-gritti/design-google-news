import { TTheme } from "@/common/styles/theme/theme";
import { TSizeCardContentSpacing } from "./CardContent";

export const getMargin = (theme: TTheme, size: TSizeCardContentSpacing) => {
  const { spacing } = theme;

  return {
    marginBottom: spacing.size[size].value,
  };
};
