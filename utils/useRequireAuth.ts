"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

/**
 * Client-side route guard: redirects to /login if there's no auth token.
 *
 * Note: this is a UX convenience, not the real security boundary — the
 * backend's `authcheck` middleware is what actually protects the data.
 * This just stops logged-out users from landing on a broken/empty page.
 */
export function useRequireAuth() {
  const router = useRouter();
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("auth_token");
    if (!token) {
      router.replace("/login");
      return;
    }
    setChecked(true);
  }, [router]);

  return checked;
}
