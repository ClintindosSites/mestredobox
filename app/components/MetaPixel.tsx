"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import Script from "next/script";

const PIXEL_ID = "997624240037200";

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
  }
}

export default function MetaPixel() {
  const pathname = usePathname();
  const previousPath = useRef<string | null>(null);

  useEffect(() => {
    // O primeiro PageView já é enviado na inicialização do Pixel.
    if (previousPath.current === null) {
      previousPath.current = pathname;
      return;
    }

    // Envia PageView somente quando o caminho muda.
    if (previousPath.current !== pathname) {
      previousPath.current = pathname;
      window.fbq?.("track", "PageView");
    }
  }, [pathname]);

  return (
    <Script
      id="meta-pixel"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
        __html: `
          !function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;
          s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', '${PIXEL_ID}');
          fbq('track', 'PageView');
        `,
      }}
    />
  );
}
