"use client";

import Script from "next/script";
import Button from "./Button";
import { calendlyUrl } from "../constants";

interface BookingBlockProps {
  url?: string;
  title?: string;
  blurb?: string;
}

const BookingBlock = ({
  url = calendlyUrl,
  title = "Book a 30 minute call",
  blurb = "Pick a time that works and we'll talk through what you're building. No pitch, no pressure — just a conversation about the problem.",
}: BookingBlockProps) => {
  return (
    <div className="grid grid-cols-1 gap-[44px] rounded-lg border border-ink-600 bg-ink-800 p-[30px] md:grid-cols-[minmax(280px,1fr)_1.25fr] md:p-[44px]">
      <div className="flex flex-col justify-center gap-4">
        <h3 className="font-display text-display-3 font-medium text-paper-0">{title}</h3>
        <p className="text-body text-paper-300">{blurb}</p>
        <div>
          <Button href={url} target="_blank" rel="noopener noreferrer">
            Open Calendly
          </Button>
        </div>
      </div>
      <div>
        <Script src="https://assets.calendly.com/assets/external/widget.js" strategy="lazyOnload" />
        <div className="calendly-inline-widget rounded-[14px]" data-url={url} style={{ minWidth: 320, height: 600 }} />
      </div>
    </div>
  );
};

export default BookingBlock;
