"use client";

import Script from "next/script";
import { useEffect, useRef, useState } from "react";
import { loginWithGoogle } from "@/utils/auth";
import { useToast } from "@/context/ToastContext";
import { useRouter } from "next/navigation";

// Minimal shape of the Google Identity Services API this component uses —
// the actual `google` global is injected by the script tag below, so
// there's no npm package/types for it.
declare global {
  interface Window {
    google?: {
      accounts: {
        id: {
          initialize: (config: {
            client_id: string;
            callback: (response: { credential: string }) => void;
          }) => void;
          renderButton: (
            parent: HTMLElement,
            options: Record<string, unknown>
          ) => void;
        };
      };
    };
  }
}

export default function GoogleSignInButton() {
  const buttonRef = useRef<HTMLDivElement>(null);
  const [scriptLoaded, setScriptLoaded] = useState(false);
  const { showToast } = useToast();
  const router = useRouter();

  const clientId = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID;

  useEffect(() => {
    if (!scriptLoaded || !clientId || !buttonRef.current || !window.google) {
      return;
    }

    window.google.accounts.id.initialize({
      client_id: clientId,
      callback: async (response) => {
        try {
          const success = await loginWithGoogle(response.credential);
          if (success) {
            showToast("Login Successful", "success");
            router.push("/");
          } else {
            showToast("Google sign-in failed", "error");
          }
        } catch (err) {
          console.error(err);
          showToast("An error occurred during Google sign-in", "error");
        }
      },
    });

    window.google.accounts.id.renderButton(buttonRef.current, {
      theme: "filled_black",
      size: "large",
      width: 320,
      text: "continue_with",
      shape: "pill",
    });
    // router/showToast are stable across renders in practice here; re-running
    // this effect on every render would just re-mount the same button.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [scriptLoaded, clientId]);

  if (!clientId) {
    // Fails loudly in dev instead of silently rendering nothing, so a
    // missing env var doesn't look like "the button is just broken".
    if (process.env.NODE_ENV !== "production") {
      console.warn(
        "GoogleSignInButton: NEXT_PUBLIC_GOOGLE_CLIENT_ID is not set."
      );
    }
    return null;
  }

  return (
    <>
      <Script
        src="https://accounts.google.com/gsi/client"
        strategy="afterInteractive"
        onLoad={() => setScriptLoaded(true)}
      />
      <div className="flex justify-center" ref={buttonRef} />
    </>
  );
}