import React, { createContext, useContext, useState, useMemo } from "react";
import { useColorScheme } from "react-native";
import { App_Max_Scale, App_Min_Scale } from "../utils/constant";
import { COLORS } from "../utils/theme";

type ThemeName =
  | "default"
  | "primary"
  | "secondary"
  | "tertiary"
  | "quaternary";

type AppContextType = {
  // text
  textScale: number;
  setAppTextScale: (scale: number) => void;

  // theme
  theme: ThemeName;
  setTheme: (theme: ThemeName) => void;
  colors: typeof COLORS.default;

  // system
  isDarkMode: boolean;
};

const AppContext = createContext<AppContextType | null>(null);

export const AppContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  /* ---------------- TEXT SCALE ---------------- */
  const [textScale, setTextScale] = useState(1);

  const setAppTextScale = (scale: number) => {
    if (scale > App_Max_Scale || scale < App_Min_Scale) return;
    setTextScale(scale);
  };

  /* ---------------- THEME ---------------- */
  const [theme, setTheme] = useState<ThemeName>("default");

  /* ---------------- SYSTEM ---------------- */
  const isDarkMode = useColorScheme() === "dark";

  /* ---------------- DERIVED COLORS ---------------- */
  const colors = useMemo(() => {
    return COLORS[theme];
  }, [theme]);

  return (
    <AppContext.Provider
      value={{
        textScale,
        setAppTextScale,
        theme,
        setTheme,
        colors,
        isDarkMode,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

/* ---------------- CUSTOM HOOK ---------------- */
export const useAppContext = () => {
  const ctx = useContext(AppContext);
  if (!ctx) {
    throw new Error("useAppContext must be used inside AppContextProvider");
  }
  return ctx;
};
