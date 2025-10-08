"use client";
import React, { useEffect, useRef } from "react";
import { useRouter, usePathname } from "next/navigation";

export default function ConfirmBack({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const pathname = usePathname();

  const prevPathRef = useRef<string | null>(null);
  const confirmedRef = useRef(false);

  useEffect(() => {
    // Save previous path
    prevPathRef.current = pathname;

    const handlePopState = () => {
      if (confirmedRef.current) return;

      const ok = window.confirm("Your current game progress will be lost!");
      if (!ok) {
        // Cancel: push dummy state so next back triggers popstate
        window.history.pushState(null, "", window.location.href);
      } else {
        confirmedRef.current = true;
        router.push(prevPathRef.current || "/"); // go to previous route
      }
    };

    window.history.pushState(null, "", window.location.href);
    window.addEventListener("popstate", handlePopState);

    return () => window.removeEventListener("popstate", handlePopState);
  }, [pathname, router]);

  return <>{children}</>;
}
