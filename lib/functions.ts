"use client";

import { useEffect } from "react";
import { useTheme } from "next-themes";

export function useKeyboardShortcuts() {
  // Keyboard shortcuts.

  const { setTheme, resolvedTheme } = useTheme();

  useEffect(() => {
    if (typeof window === undefined) return;

    const handleKeyAltT = (e: KeyboardEvent) => {
      if (e.key === "t" && e.altKey) {
        // Change theme
        setTheme(resolvedTheme === "dark" ? "light" : "dark");
      }
    };

    window.addEventListener("keydown", handleKeyAltT);

    return () => window.removeEventListener("keydown", handleKeyAltT);
  }, [setTheme, resolvedTheme]);
}
