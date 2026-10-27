type GtagFunction = (
  command: string,
  eventName: string,
  parameters: {
    send_to: string;
    value: number;
    currency: string;
    event_callback?: () => void;
    event_timeout?: number;
  }
) => void;

declare global {
  interface Window {
    gtag?: GtagFunction;
  }
}

export function reportGoogleAdsConversion(url?: string) {
  if (typeof window === "undefined") return;

  let navigated = false;

  const navigate = () => {
    if (navigated || !url) return;

    navigated = true;
    window.location.href = url;
  };

  if (typeof window.gtag !== "function") {
    navigate();
    return;
  }

  if (url) {
    window.setTimeout(navigate, 2000);
  }

  window.gtag("event", "conversion", {
    send_to: "AW-18490605644/40YLCJ6OyasdEMyAgfFE",
    value: 1.0,
    currency: "BRL",
    event_callback: navigate,
    event_timeout: 2000,
  });
}
