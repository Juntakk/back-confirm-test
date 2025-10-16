"use client";
import React, { useEffect, useRef } from "react";
import { useRouter } from "next/navigation";

/**
 * Wrap this around a page's contents to confirm before leaving via browser back.
 */
export default function ConfirmBack({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const confirmedRef = useRef(false);

  useEffect(() => {
    const handlePopState = (event: PopStateEvent) => {
      if (confirmedRef.current) return;

      const ok = window.confirm("Your current game progress will be lost!");
      if (!ok) {
        // Cancel back: push a new state to stay on page
        window.history.pushState(null, "", window.location.href);
      } else {
        confirmedRef.current = true;
        router.back();
      }
    };

    const handleBeforeUnload = (event: BeforeUnloadEvent) => {
      // Warn if user tries to refresh or close tab
      event.preventDefault();
      event.returnValue = "";
    };

    // Push one dummy state so the next "Back" triggers popstate
    window.history.pushState(null, "", window.location.href);

    window.addEventListener("popstate", handlePopState);
    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("popstate", handlePopState);
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, [router]);

  return <>{children}</>;
}
