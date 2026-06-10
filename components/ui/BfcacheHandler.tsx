"use client";

import { useEffect } from "react";

/**
 * Fixes the blank page issue when returning via browser back button (bfcache).
 * 
 * Problem: Framer Motion sets initial styles (opacity: 0, translateY: 30) inline.
 * When the browser restores the page from bfcache, IntersectionObserver
 * (used by whileInView) doesn't re-fire, so elements stay invisible.
 *
 * Solution: Detect page restoration via multiple events and force reload.
 */
export default function BfcacheHandler() {
  useEffect(() => {
    // 1. Classic bfcache detection
    const handlePageShow = (event: PageTransitionEvent) => {
      if (event.persisted) {
        window.location.reload();
      }
    };

    // 2. Visibility change — fires when user tabs back or returns via back button
    let wasHidden = false;
    const handleVisibilityChange = () => {
      if (document.visibilityState === "hidden") {
        wasHidden = true;
      }
      if (document.visibilityState === "visible" && wasHidden) {
        // Check if Framer Motion elements are stuck at opacity 0
        const hero = document.querySelector("h1");
        if (hero) {
          const style = window.getComputedStyle(hero);
          if (style.opacity === "0") {
            window.location.reload();
          }
        }
      }
    };

    // 3. Window focus — another chance to catch the issue
    const handleFocus = () => {
      requestAnimationFrame(() => {
        const hero = document.querySelector("h1");
        if (hero) {
          const style = window.getComputedStyle(hero);
          if (style.opacity === "0") {
            window.location.reload();
          }
        }
      });
    };

    window.addEventListener("pageshow", handlePageShow);
    document.addEventListener("visibilitychange", handleVisibilityChange);
    window.addEventListener("focus", handleFocus);

    return () => {
      window.removeEventListener("pageshow", handlePageShow);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      window.removeEventListener("focus", handleFocus);
    };
  }, []);

  return null;
}
