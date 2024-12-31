"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export default function ThemeToggler() {
  const { theme, setTheme } = useTheme();

  return (
    <div className="hover:cursor-pointer">
      {theme === "dark" ? (
        <Sun size={20} onClick={() => setTheme("light")} />
      ) : (
        <Moon size={20} onClick={() => setTheme("dark")} />
      )}
    </div>
  );
}
