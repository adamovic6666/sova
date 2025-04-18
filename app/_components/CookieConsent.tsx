"use client";
import { useEffect, useState } from "react";
import styles from "./CookieConsent.module.css";

type ConsentOptions = {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
};

type CookieConsentProps = {
  onPreferenceChange: (preferences: ConsentOptions) => void;
};

export default function CookieConsent({
  onPreferenceChange,
}: CookieConsentProps) {
  const [showModal, setShowModal] = useState(false);
  const [showBanner, setShowBanner] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [preferences, setPreferences] = useState<ConsentOptions>({
    necessary: true, // Always true as these are required
    analytics: false,
    marketing: false,
  });

  // Handle component mounting
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Check for stored consent once mounted
  useEffect(() => {
    if (!isMounted) return;

    console.log("CookieConsent: Initializing...");
    const storedConsent = localStorage.getItem("cookie-consent-preferences");
    console.log("CookieConsent: Stored consent:", storedConsent);

    if (storedConsent) {
      try {
        const parsedConsent = JSON.parse(storedConsent);
        setPreferences(parsedConsent);
        onPreferenceChange(parsedConsent);
        console.log("CookieConsent: Parsed consent:", parsedConsent);
      } catch (e) {
        // If JSON parse fails, show the banner after 5 seconds
        console.log("CookieConsent: Error parsing stored consent:", e);
        setTimeout(() => {
          setShowBanner(true);
        }, 5500);
      }
    } else {
      // Show banner after 5 seconds if no consent stored
      console.log(
        "CookieConsent: No stored consent, showing banner after 5 seconds"
      );
      setTimeout(() => {
        setShowBanner(true);
      }, 5500);
    }
  }, [isMounted, onPreferenceChange]);

  const savePreferences = (newPreferences: ConsentOptions) => {
    if (typeof window !== "undefined") {
      localStorage.setItem(
        "cookie-consent-preferences",
        JSON.stringify(newPreferences)
      );
    }
    setPreferences(newPreferences);
    onPreferenceChange(newPreferences);
    setShowModal(false);
    setShowBanner(false);
  };

  const handleAcceptAll = () => {
    const allAccepted = {
      necessary: true,
      analytics: true,
      marketing: true,
    };
    savePreferences(allAccepted);
  };

  const handleAcceptNecessary = () => {
    const necessaryOnly = {
      necessary: true,
      analytics: false,
      marketing: false,
    };
    savePreferences(necessaryOnly);
  };

  const handleSavePreferences = () => {
    savePreferences(preferences);
  };

  const handleToggleConsent = (key: keyof ConsentOptions) => {
    if (key === "necessary") return; // Can't toggle necessary

    setPreferences((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const openConsentManager = () => {
    setShowModal(true);
    setShowBanner(false);
  };

  // Don't render anything during server-side rendering
  if (!isMounted) {
    return null;
  }

  return (
    <>
      {/* Cookie Banner */}
      {showBanner && (
        <div className={styles.cookieBanner}>
          <div className="container">
            <div className={styles.cookieContent}>
              <div>
                <h3 className={styles.cookieTitle}>Cookie Consent</h3>
                <p className={styles.cookieText}>
                  We use cookies to improve your experience on our website. By
                  clicking "Accept All", you consent to the use of all cookies.
                  You may visit our{" "}
                  <a href="/privacy-notice" className={styles.cookieLink}>
                    Privacy Policy
                  </a>{" "}
                  for more information.
                </p>
              </div>
              <div className={styles.cookieButtons}>
                <button
                  onClick={openConsentManager}
                  className={styles.cookieButton}
                >
                  Manage Preferences
                </button>
                <button
                  onClick={handleAcceptNecessary}
                  className={styles.cookieButton}
                >
                  Accept Necessary
                </button>
                <button
                  onClick={handleAcceptAll}
                  className={styles.cookieButtonPrimary}
                >
                  Accept All
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Preference Modal */}
      {showModal && (
        <div className={styles.modalOverlay}>
          <div className={styles.modal}>
            <div className={styles.modalContent}>
              <div className={styles.modalHeader}>
                <h2 className={styles.modalTitle}>Cookie Preferences</h2>
                <button
                  onClick={() => setShowModal(false)}
                  className={styles.closeButton}
                >
                  ✕
                </button>
              </div>

              <p className={styles.modalText}>
                We use cookies to ensure the website functions properly, improve
                your experience, and personalize content and ads. You can choose
                your cookie preferences below. For more information, please
                visit our{" "}
                <a href="/privacy-notice" className={styles.cookieLink}>
                  Privacy Policy
                </a>
                .
              </p>

              <div className={styles.cookieOptions}>
                {/* Necessary Cookies */}
                <div className={styles.cookieOption}>
                  <div className={styles.optionHeader}>
                    <h3 className={styles.optionTitle}>Necessary Cookies</h3>
                    <div className={styles.toggleDisabled}>
                      <div className={styles.toggleHandle}></div>
                    </div>
                  </div>
                  <p className={styles.optionDescription}>
                    These cookies are essential for the website to function
                    properly. They cannot be disabled.
                  </p>
                </div>

                {/* Analytics Cookies */}
                <div className={styles.cookieOption}>
                  <div className={styles.optionHeader}>
                    <h3 className={styles.optionTitle}>Analytics Cookies</h3>
                    <button
                      onClick={() => handleToggleConsent("analytics")}
                      className={
                        preferences.analytics
                          ? styles.toggleActive
                          : styles.toggle
                      }
                    >
                      <div
                        className={
                          preferences.analytics
                            ? styles.toggleHandleActive
                            : styles.toggleHandle
                        }
                      ></div>
                    </button>
                  </div>
                  <p className={styles.optionDescription}>
                    These cookies help us understand how visitors interact with
                    our website, which pages are visited most often, and how
                    visitors navigate the site.
                  </p>
                </div>

                {/* Marketing Cookies */}
                <div className={styles.cookieOption}>
                  <div className={styles.optionHeader}>
                    <h3 className={styles.optionTitle}>Marketing Cookies</h3>
                    <button
                      onClick={() => handleToggleConsent("marketing")}
                      className={
                        preferences.marketing
                          ? styles.toggleActive
                          : styles.toggle
                      }
                    >
                      <div
                        className={
                          preferences.marketing
                            ? styles.toggleHandleActive
                            : styles.toggleHandle
                        }
                      ></div>
                    </button>
                  </div>
                  <p className={styles.optionDescription}>
                    These cookies are used to track visitors across websites.
                    They are set to display targeted ads that are relevant and
                    engaging for individual users.
                  </p>
                </div>
              </div>

              <div className={styles.modalFooter}>
                <button
                  onClick={handleAcceptNecessary}
                  className={styles.cookieButton}
                >
                  Necessary Only
                </button>
                <button
                  onClick={handleAcceptAll}
                  className={styles.cookieButton}
                >
                  Accept All
                </button>
                <button
                  onClick={handleSavePreferences}
                  className={styles.cookieButtonPrimary}
                >
                  Save Preferences
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Floating button to reopen consent manager */}
      <button
        onClick={() => setShowModal(true)}
        className={styles.floatingButton}
        title="Cookie Settings"
      >
        🍪
      </button>
    </>
  );
}
