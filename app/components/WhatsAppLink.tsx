"use client";

import type { AnchorHTMLAttributes, MouseEvent } from "react";
import { reportGoogleAdsConversion } from "../lib/google-ads";

type WhatsAppLinkProps = AnchorHTMLAttributes<HTMLAnchorElement>;

export default function WhatsAppLink({
  onClick,
  target = "_blank",
  rel = "noopener noreferrer",
  children,
  ...props
}: WhatsAppLinkProps) {
  function handleClick(event: MouseEvent<HTMLAnchorElement>) {
    onClick?.(event);

    if (!event.defaultPrevented) {
      reportGoogleAdsConversion();
    }
  }

  return (
    <a {...props} target={target} rel={rel} onClick={handleClick}>
      {children}
    </a>
  );
}
