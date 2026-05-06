"use client";

import { useEffect, useId } from "react";
import Script from "next/script";

declare global {
  interface Window {
    paypal?: {
      HostedButtons: (options: { hostedButtonId: string }) => {
        render: (selector: string) => Promise<unknown> | unknown;
      };
    };
  }
}

interface PayPalHostedButtonProps {
  hostedButtonId: string;
}

export function PayPalHostedButton({ hostedButtonId }: PayPalHostedButtonProps) {
  const reactId = useId();
  const containerId = `paypal-hosted-button-${reactId.replace(/[:]/g, "")}`;

  useEffect(() => {
    if (!window.paypal) return;

    const renderButton = async () => {
      const container = document.getElementById(containerId);
      if (!container || container.childElementCount > 0) return;

      await window.paypal?.HostedButtons({ hostedButtonId }).render(`#${containerId}`);
    };

    void renderButton();
  }, [containerId, hostedButtonId]);

  return (
    <>
      <Script
        src="https://www.paypal.com/sdk/js?components=hosted-buttons&currency=USD"
        strategy="afterInteractive"
      />
      <div id={containerId} />
    </>
  );
}
