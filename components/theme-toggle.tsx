"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "./theme-provider";

export function ThemeToggle() {
  const { isDark, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      className="p-2 rounded-full transition-colors hover:bg-yellow/20 text-foreground"
    >
      {isDark ? <Sun size={20} /> : <Moon size={20} />}
    </button>
  );
}
