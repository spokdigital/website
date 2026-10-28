'use client';

import { useEffect } from 'react';
import Script from 'next/script';
import { trackFormSubmit } from '@/app/lib/fbq';

export default function BookADemoPage() {
    useEffect(() => {
        function handleCalendlyMessage(e: MessageEvent) {
            if (
                e.origin === 'https://calendly.com' &&
                e.data?.event === 'calendly.event_scheduled'
            ) {
                trackFormSubmit();
            }
        }

        window.addEventListener('message', handleCalendlyMessage);
        return () => window.removeEventListener('message', handleCalendlyMessage);
    }, []);

    return (
        <section className="shell px-[26px] py-16">
            <div className="mx-auto max-w-[760px] text-center">
                <div className="eyebrow">BOOK A DEMO</div>
                <h1 className="mt-4 text-[32px] leading-tight tracking-[-.032em] text-fg sm:text-[40px]">
                    Twenty minutes on your live checkout
                </h1>
                <p className="mx-auto mt-[14px] max-w-[520px] text-[16px] leading-relaxed text-muted">
                    Pick a slot below — we'll walk through where buyers drop off and what fixing it is worth.
                </p>
            </div>

            <div className="mt-10 overflow-hidden rounded-[20px] border border-outline/20 bg-surface">
                {/* Replace with your actual Calendly event URL */}
                <div
                    className="calendly-inline-widget"
                    data-url="https://calendly.com/info-spokdigital/30min"
                    style={{ minWidth: '320px', height: '700px' }}
                />
            </div>

            <Script
                src="https://assets.calendly.com/assets/external/widget.js"
                strategy="lazyOnload"
            />
        </section>
    );
}