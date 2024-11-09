// hooks/useThemeImage.js
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export const useThemeImage = (images) => {
  const [mounted, setMounted] = useState(false);
  const { theme, systemTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  const currentTheme = theme === "system" ? systemTheme : theme;
  const imageSrc = images[currentTheme] || images.light;

  return { imageSrc, mounted };
};
