// ThemeContext.tsx
import React, { createContext, useContext, useState } from "react";
import { COLORS } from "../utils/theme";

type ThemeName =
  | "default"
  | "primary"
  | "secondary"
  | "tertiary"
  | "quaternary";

type ThemeContextType = {
  theme: ThemeName;
  setTheme: (theme: ThemeName) => void;
  colors: typeof COLORS.default;
};

const ThemeContext = createContext<ThemeContextType | null>(null);

export const ThemeContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState<ThemeName>("default");

  return (
    <ThemeContext.Provider
      value={{
        theme,
        setTheme,
        colors: COLORS[theme],
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const ctx = useContext(ThemeContext);
  if (!ctx) {
    throw new Error("useTheme must be used inside ThemeProvider");
  }
  return ctx;
};
