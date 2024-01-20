import { Breakpoints } from "@skynexui/responsive_stylesheet";

export type ResponsiveProperty<Type> = Partial<Record<Breakpoints, Type>>;

export interface StyleSheet {
  [key: string]: any;
}
