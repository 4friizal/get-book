import { createContext } from "react";

const ctx = {
  theme: "",
  setTheme: () => {},
};

export const ThemeContext = createContext(ctx);
export const TokenContext = createContext();
export const RoleContext = createContext();