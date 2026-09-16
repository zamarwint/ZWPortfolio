"use client";

import { useEffect, useState, useRef } from "react";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";

// SCROLL TO ANCHOR LINK
export const ScrollToAnchor = () => {
  const pathname = usePathname();
  const lastHash = useRef("");

  useEffect(() => {
    const hash = pathname.split("#")[1];
    if (hash) {
      const element = document.getElementById(hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [pathname]);

  return null;
};

// TRACK THE VIEWPORT WIDTH
export const useViewportWidth = () => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Cleanup listener on unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return width;
};

// SCROLL TO TOP
export const scrollToTop = ({ path }: { path: string }) => {
  //   if (typeof window !== "undefined") {
  //     window.scrollTo({
  //       top: 0,
  //       behavior: "smooth",
  //     });

  //     return;
  //   }

  const locations = [
    {
      url: "/",
      anchor: "#hero",
    },
    {
      url: "/gallery",
      anchor: "#gallery",
    },
    {
      url: "/chat",
      anchor: "#chat",
    },
  ];

  for (const l of locations) {
    if (path === l.url) {
      return l.anchor;
    }
  }
};

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
