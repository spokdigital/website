'use client';

import { useRef, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Confetti, type ConfettiRef } from '@/components/magicui/confetti';
import { trackBookDemo, trackFormSubmit } from '@/app/lib/fbq';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
gsap.registerPlugin(ScrollToPlugin);


export default function LeadForm() {
    const router = useRouter();
    const [sent, setSent] = useState(false);
    const confettiRef = useRef<ConfettiRef>(null);

    async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        const data = Object.fromEntries(new FormData(e.currentTarget).entries());
        try {
            const res = await fetch('/api/email', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ ...data, mode: 'call' }),
            });
            if (!res.ok) throw new Error('Request failed');
            setSent(true);
            trackFormSubmit();
            confettiRef.current?.fire({
                particleCount: 120,
                spread: 90,
                origin: { y: 0.6 },
            });
        } catch {
            alert("Something went wrong — please try again or reach us directly.");
        }
    }

    return (
        <div
            id="form"
            className="relative items-start overflow-hidden rounded-[20px] border border-primary/20  "
        >
            <Confetti
                ref={confettiRef}
                manualstart
                className="pointer-events-none absolute inset-0 z-50 size-full"
            />

            <div className="border-b border-primary/20 bg-primary/[.07] px-5 py-4">
                <h2 className=" text-2xl font-semibold tracking-[-.02em] text-foreground">
                    {sent ? "Leave your number, we'll call" : "Leave your number, we'll call"}
                </h2>
                <p className="mt-1 text-[13.5px]  text-muted">
                    A specialist calls you within one business day — no slides, just answers.
                </p>
            </div>

            <div className="px-[30px] pt-4 pb-[30px]">
                {sent ? (
                    <div className="flex flex-col gap-3.5 pt-3.5 pb-1.5">
                        <div className="flex size-11 items-center justify-center rounded-full border border-primary/45 bg-primary/15 text-[19px] text-primary">✓</div>
                        <h3 className="font-display text-2xl tracking-[-.02em] text-fg">We'll call you.</h3>
                        <p className="text-[15px] leading-relaxed text-muted">
                            A specialist will ring you within one business day at the time you picked. If it's urgent, email
                            support@gulfcart.ae and we'll bring it forward.
                        </p>
                        <button
                            onClick={() => setSent(false)}
                            className="mt-1 cursor-pointer self-start rounded-[10px] border border-outline/40 px-5 py-2.5 text-[13.5px] font-semibold text-fg hover:border-primary/50"
                        >
                            Send another
                        </button>
                    </div>
                ) : (
                    <form onSubmit={onSubmit} className="flex flex-col gap-[13px]">
                        <div className='grid grid-cols-1 sm:grid-cols-2 gap-[13px]'>
                            <label className="flex flex-col gap-1.5">
                                <span className="text-xs font-semibold text-dim">Full name</span>
                                <input name="name" required placeholder="Your name" className="field border border-neutral-400 rounded-md px-3 py-1.5" />
                            </label>

                            <label className="flex flex-col gap-1.5">
                                <span className="text-xs font-semibold text-dim">Website</span>
                                <input
                                    name="website"
                                    required
                                    placeholder="yourstore.com"
                                    pattern="^(https?:\/\/)?([\da-zA-Z-]+\.)+[a-zA-Z]{2,}(\/[^\s]*)?$"
                                    title="Enter a valid domain, e.g. yourstore.com (https:// optional)"
                                    className="field border border-neutral-400 rounded-md px-3 py-1.5"
                                />
                            </label>
                        </div>

                        <div className="grid grid-cols-1 gap-[13px] sm:grid-cols-2">
                            <label className="flex flex-col gap-1.5">
                                <span className="text-xs font-semibold text-dim">Email</span>
                                <input name="email" required type="email" placeholder="you@brand.com" className="field border border-neutral-400 rounded-md px-3 py-1.5" />
                            </label>
                            <label className="flex flex-col gap-1.5">
                                <span className="text-xs font-semibold text-dim">Phone number</span>
                                <input name="phone" required placeholder="+971 50 000 0000" className="field border border-neutral-400 rounded-md px-3 py-1.5" />
                            </label>
                        </div>

                        <label className="flex flex-col gap-1.5">
                            <span className="text-xs font-semibold text-dim">Best time to call</span>
                            <select name="slot" defaultValue="Morning (9am – 12pm GST)" className="field border border-neutral-400 rounded-md px-3 py-1.5">
                                <option>Morning (9am – 12pm GST)</option>
                                <option>Afternoon (12pm – 4pm GST)</option>
                                <option>Evening (4pm – 8pm GST)</option>
                            </select>
                        </label>

                        <button
                            type="submit"
                            className="mt-[5px] cursor-pointer rounded-3xl bg-primary py-[15px] font-display text-[15.5px] font-bold tracking-[-.01em] text-background hover:bg-primary/70"
                        >
                            Call me back
                        </button>

                        <button
                            type="button"
                            onClick={() => {
                                trackBookDemo('form');
                                gsap.to(window, {
                                    duration: 1,
                                    scrollTo: { y: '#booking', offsetY: 80 }, // offsetY = sticky header height
                                    ease: 'power2.inOut',
                                });
                            }}
                            className="cursor-pointer rounded-3xl border border-primary/80 py-[15px] font-display text-[15.5px] font-bold tracking-[-.01em] text-foreground hover:border-primary/50"
                        >
                            Book a demo instead
                        </button>

                        <div className="mt-0.5 flex justify-center gap-3.5 text-[11.5px] text-ghost">
                            <span>Reply in 1 business day</span><span>·</span><span>Details never resold</span>
                        </div>
                    </form>
                )}
            </div>
        </div>
    );
}