"use client";
import React, { useState, useEffect } from "react";
import Script from "next/script";
import CookieConsent from "./CookieConsent";

type ConsentOptions = {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
};

export default function GoogleAnalytics() {
  const [analyticsEnabled, setAnalyticsEnabled] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handlePreferenceChange = (preferences: ConsentOptions) => {
    setAnalyticsEnabled(preferences.analytics);
  };

  if (!mounted) {
    // Don't render anything during server-side rendering to avoid hydration issues
    return null;
  }

  return (
    <>
      {analyticsEnabled && (
        <>
          <Script
            src="https://www.googletagmanager.com/gtag/js?id=G-9KJQRHYW1Z"
            strategy="afterInteractive"
          />
          <Script id="google-analytics" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());

              gtag('config', 'G-9KJQRHYW1Z');
            `}
          </Script>
        </>
      )}

      <CookieConsent onPreferenceChange={handlePreferenceChange} />
    </>
  );
}
