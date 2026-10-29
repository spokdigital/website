
"use client";

import { Star, ShoppingBag, Gauge, CreditCard, ArrowUpRight } from "lucide-react";
import { Marquee } from "@/components/magicui/marquee";

type Review = {
    id: string;
    name: string;
    role: string;
    industry: string;
    service: string;
    text: string;
    time?: string;
    source?: "google";
    rating: 1 | 2 | 3 | 4 | 5;
};

export const reviews: Review[] = [
    {
        id: "store-development",
        name: "Ananya Sharma",
        role: "Founder & Creative Director",
        industry: "Beauty & Skincare",
        service: "Shopify Development",
        text: "We wanted a premium storefront with effortless product discovery. The team delivered a polished, fast, and intuitive experience, especially on mobile. Communication was clear and consistent throughout.",
        rating: 5,
    },
    {
        id: "performance",
        name: "Marcus Vance",
        role: "Head of E-commerce",
        industry: "Fashion & Apparel",
        service: "Performance Optimization",
        text: "Our mobile store was sluggish, but the optimization work significantly improved speed without compromising visuals. The process was structured, collaborative, and smooth from start to finish.",
        rating: 5,
    },
    {
        id: "checkout",
        name: "Priya Nair",
        role: "Co-Founder",
        industry: "Lifestyle & Home Decor",
        service: "Checkout UX",
        text: "Our mobile checkout needed improvement. The redesigned flow simplified forms, improved validation, and made payment options clearer, helping create a smoother customer experience.",
        rating: 5,
    },
    {
        id: "conversion",
        name: "David Sterling",
        role: "VP of Marketing",
        industry: "Health & Wellness",
        service: "Conversion Optimization",
        text: "The team improved our customer journey with better social proof, subscription flows, and strategic CTAs. The changes made the shopping experience clearer and more effective.",
        rating: 5,
    },
    {
        id: "migration",
        name: "Vikram Mehta",
        role: "Head of Operations",
        industry: "Consumer Packaged Goods",
        service: "Store Migration",
        text: "Moving thousands of products and customer records to Shopify felt daunting. The migration was carefully managed, with SEO redirects and thorough testing ensuring a smooth transition.",
        rating: 5,
    },
    {
        id: "b2b",
        name: "Elena Rostova",
        role: "Commercial Director",
        industry: "Wholesale & Distribution",
        service: "B2B E-commerce",
        text: "Our new B2B portal simplified bulk orders, custom pricing, and repeat purchases. It reduced manual work for our operations team and made ordering easier for our stockists.",
        rating: 5,
    },
];

const AVATAR_COLORS = [
    "bg-amber-600",
    "bg-rose-600",
    "bg-blue-600",
    "bg-emerald-600",
    "bg-violet-600",
    "bg-orange-600",
];

const SERVICE_ICONS = [ShoppingBag, Gauge, CreditCard];

const firstRow = reviews.slice(0, Math.ceil(reviews.length / 2));
const secondRow = reviews.slice(Math.ceil(reviews.length / 2));

function initials(name: string) {
    return name
        .replace(/[^\p{L}\s]/gu, "")
        .trim()
        .split(/\s+/)
        .filter(Boolean)
        .slice(0, 2)
        .map((word) => word[0].toUpperCase())
        .join("");
}

function GoogleMark({ size = 20 }: { size?: number }) {
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 48 48"
            role="img"
            aria-label="Google"
            className="shrink-0"
        >
            <path
                fill="#4285F4"
                d="M47.5 24.5c0-1.6-.1-3.1-.4-4.5H24v9h13.2c-.6 2.9-2.2 5.3-4.7 6.9v5.8h7.6c4.4-4.1 7.4-10.1 7.4-17.2z"
            />
            <path
                fill="#34A853"
                d="M24 48c6.3 0 11.6-2.1 15.5-5.7l-7.6-5.8c-2.1 1.4-4.7 2.3-7.9 2.3-6.1 0-11.3-4.1-13.2-9.7H3v6C6.9 42.1 14.9 48 24 48z"
            />
            <path
                fill="#FBBC05"
                d="M10.8 29.1a14.5 14.5 0 0 1 0-10.2v-6H3a24 24 0 0 0 0 22.2l7.8-6z"
            />
            <path
                fill="#EA4335"
                d="M24 9.5c3.4 0 6.5 1.2 8.9 3.5l6.7-6.7C35.5 2.3 30.3 0 24 0 14.9 0 6.9 5.9 3 12.9l7.8 6C12.7 13.6 17.9 9.5 24 9.5z"
            />
        </svg>
    );
}

function ReviewCard({
    review,
    index,
}: {
    review: Review;
    index: number;
}) {
    const ServiceIcon = SERVICE_ICONS[index % SERVICE_ICONS.length];

    return (
        <article className="group flex min-h-[340px] w-[320px] shrink-0 flex-col rounded-2xl border border-neutral-200/80 bg-white p-5 text-left shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-neutral-300 hover:shadow-xl sm:min-h-[330px] sm:w-[390px] sm:p-6">
            {/* Service label */}
            <div className="flex items-center justify-between gap-3">
                <span className="inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-neutral-50 px-3 py-1.5 text-xs font-medium text-neutral-700">
                    <ServiceIcon size={14} aria-hidden="true" />
                    {review.service}
                </span>

                {review.source === "google" && (
                    <GoogleMark size={20} />
                )}
            </div>

            {/* Rating */}
            <div className="mt-5 flex items-center gap-2">
                <div
                    className="flex items-center gap-0.5"
                    role="img"
                    aria-label={`${review.rating} out of 5 stars`}
                >
                    {Array.from({ length: 5 }, (_, index) => (
                        <Star
                            key={index}
                            size={15}
                            aria-hidden="true"
                            className={
                                index < review.rating
                                    ? "fill-amber-400 text-amber-400"
                                    : "text-neutral-300"
                            }
                        />
                    ))}
                </div>

                {review.time && (
                    <span className="text-xs text-neutral-500">
                        {review.time}
                    </span>
                )}

                {review.source === "google" && (
                    <span className="ml-auto text-xs text-neutral-500">
                        Google review
                    </span>
                )}
            </div>

            {/* Review copy */}
            <blockquote className="mt-4 flex-1 text-[14px] leading-7 text-neutral-600 sm:text-[15px]">
                “{review.text}”
            </blockquote>

            {/* Reviewer */}
            <div className="mt-6 flex items-center gap-3 border-t border-neutral-100 pt-5">
                <div
                    aria-hidden="true"
                    className={`flex size-11 shrink-0 items-center justify-center rounded-full text-sm font-semibold text-white ${AVATAR_COLORS[index % AVATAR_COLORS.length]}`}
                >
                    {initials(review.name)}
                </div>

                <div className="min-w-0 flex-1">
                    <p className="truncate text-sm font-semibold text-neutral-900">
                        {review.name}
                    </p>
                    <p className="mt-1 truncate text-xs text-neutral-500">
                        {review.role} · {review.industry}
                    </p>
                </div>

                <ArrowUpRight
                    size={18}
                    aria-hidden="true"
                    className="shrink-0 text-neutral-300 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-neutral-900"
                />
            </div>
        </article>
    );
}

export default function Reviews() {
    return (
        <section
            id="reviews"
            aria-labelledby="reviews-heading"
            className="overflow-hidden bg-white py-16"
        >
            {/* Section heading */}
            <div className="container mx-auto px-5">
                <div className="mx-auto max-w-3xl text-center">
                    <span className="inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-neutral-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-neutral-600">
                        <span className="size-1.5 rounded-full bg-emerald-500" />
                        Client Experiences
                    </span>

                    <h2
                        id="reviews-heading"
                        className="mt-6 text-3xl font-semibold tracking-tight text-neutral-950 sm:text-5xl lg:text-6xl"
                    >
                        Good work.
                        <br className="hidden sm:block" />{" "}
                        <span className="text-primary">
                            Stronger brands.
                        </span>
                    </h2>

                    <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-neutral-500 sm:text-base">
                        Thoughtful design, better shopping experiences, and
                        e-commerce solutions built around real business needs.
                    </p>
                </div>
            </div>

            {/* Review marquee */}
            <div
                className="relative mt-12 flex flex-col gap-4 sm:mt-16"
                aria-label="Client testimonials"
            >
                <Marquee
                    pauseOnHover
                    className="[--duration:65s] [--gap:1rem]"
                >
                    {firstRow.map((review, index) => (
                        <ReviewCard
                            key={review.id}
                            review={review}
                            index={index}
                        />
                    ))}
                </Marquee>

                <Marquee
                    reverse
                    pauseOnHover
                    className="[--duration:70s] [--gap:1rem]"
                >
                    {secondRow.map((review, index) => (
                        <ReviewCard
                            key={review.id}
                            review={review}
                            index={index + firstRow.length}
                        />
                    ))}
                </Marquee>

                {/* Edge fades */}
                <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-y-0 left-0 z-10 w-8 bg-gradient-to-r from-white to-transparent sm:w-28 lg:w-44"
                />
                <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-y-0 right-0 z-10 w-8 bg-gradient-to-l from-white to-transparent sm:w-28 lg:w-44"
                />
            </div>
        </section>
    );
}
