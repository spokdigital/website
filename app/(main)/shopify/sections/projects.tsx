import { ArrowUpRight } from "lucide-react";
import { Marquee } from "@/components/magicui/marquee";

type Project = {
    title: string;
    category: string;
    description: string;
    tags: string[];
    image?: string; // e.g. "/projects/glow-beauty.png"; falls back to a gradient
    href?: string; // case study or live site
};

const projects: Project[] = [
    {
        title: "Teeser",
        category: "Fashion & Apparel",
        description: "UAE graphic tee brand with oversized and regular fits, official merch and custom prints. Checkout runs on GulfCart, with delivery across the UAE and Saudi Arabia.",
        tags: ["Shopify", "GulfCart Checkout", "UAE & KSA"],
        image: "/shopify/2.png",
        href: "https://teeser.ae/",
    },

    {
        title: "Perfume Oasis",
        category: "Fragrance Retail",
        description: "Multi-brand store for authentic designer, niche and Arabian perfumes, with multi-currency pricing and Tabby and Tamara payments across the GCC.",
        tags: ["Shopify", "Multi-currency", "GCC"],
        image: "/shopify/1.png",
        href: "https://perfumeoasis.ae",
    },
    {
        title: "Opto Watch Co.",
        category: "Watch Accessories",
        description: "Dubai watch strap brand with alligator, Alcantara, sailcloth and FKM rubber straps, shipping worldwide via DHL.",
        tags: ["Shopify", "Global shipping", "Collectors"],
        image: "/shopify/2.png",
        href: "https://optowatchco.com/",
    },
    {
        title: "Confianza",
        category: "Luxury Furniture & Interiors",
        description: "Dubai luxury interior brand offering bespoke marble furniture, custom bedroom suites and full home renovations, sold through a premium Shopify store.",
        tags: ["Shopify", "Luxury furniture", "UAE"],
        image: "/shopify/3.png",
        href: "https://www.billionaire-mansions.com/",
    },
    {
        title: "Khazayan",
        category: "Luxury Furniture & Interiors",
        description: "Dubai luxury interior brand offering bespoke marble furniture, custom bedroom suites and full home renovations, sold through a premium Shopify store.",
        tags: ["Shopify", "Luxury furniture", "UAE"],
        image: "/shopify/5.png",
        href: "https://www.billionaire-mansions.com/",
    },
    {
        title: "Tylu Kreations",
        category: "Luxury Furniture & Interiors",
        description: "Dubai luxury interior brand offering bespoke marble furniture, custom bedroom suites and full home renovations, sold through a premium Shopify store.",
        tags: ["Shopify", "Luxury furniture", "UAE"],
        image: "/shopify/6.png",
        href: "https://www.billionaire-mansions.com/",
    },
    {
        title: "Suyu",
        category: "Luxury Furniture & Interiors",
        description: "Dubai luxury interior brand offering bespoke marble furniture, custom bedroom suites and full home renovations, sold through a premium Shopify store.",
        tags: ["Shopify", "Luxury furniture", "UAE"],
        image: "/shopify/8.png",
        href: "https://www.billionaire-mansions.com/",
    },
];
const GRADIENTS = [
    "from-rose-500 to-orange-400",
    "from-indigo-500 to-sky-400",
    "from-emerald-500 to-teal-400",
    "from-violet-500 to-fuchsia-400",
    "from-amber-500 to-yellow-400",
    "from-slate-700 to-slate-500",
];

function ProjectCard({ p, i }: { p: Project; i: number }) {
    const Wrapper = p.href ? "a" : "div";
    const wrapperProps = p.href ? { href: p.href } : {};

    return (
        <Wrapper
            {...wrapperProps}
            className=" flex w-[320px] shrink-0 flex-col transition-shadow hover:shadow-md sm:w-[380px]"
        >
            <div className="relative aspect-[3/4] w-full overflow-hidden">
                {p.image ? (
                    <img
                        src={p.image}
                        alt={p.title}
                        loading="lazy"
                        className="size-full object-top object-cover transition-transform duration-300 group-hover/card:scale-105"
                    />
                ) : (
                    <div className={`flex size-full items-end bg-gradient-to-br p-4 ${GRADIENTS[i % GRADIENTS.length]}`}>
                        <span className="text-2xl font-bold text-white/90">{p.title}</span>
                    </div>
                )}
                {p.href && (
                    <span className="absolute right-3 top-3 flex size-9 items-center justify-center rounded-full bg-white/90 text-neutral-900 opacity-0 shadow transition-opacity group-hover/card:opacity-100">
                        <ArrowUpRight size={18} aria-hidden />
                    </span>
                )}
            </div>


        </Wrapper>
    );
}

export default function Projects() {
    return (
        <section id="projects" className="overflow-hidden py-16">
            <div className="container text-center">
                <span className="inline-block rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary">
                    Our Work
                </span>
                <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-5xl">Projects We&apos;re Proud Of</h2>
            </div>

            <div className="relative mt-14" aria-label="Projects ">
                <Marquee pauseOnHover className="[--duration:50s]">
                    {projects.map((p, i) => (
                        <ProjectCard key={p.title} p={p} i={i} />
                    ))}
                </Marquee>

                {/* edge fades */}
                <div aria-hidden className="pointer-events-none absolute inset-y-0 left-0 w-1/6 bg-gradient-to-r from-white to-transparent" />
                <div aria-hidden className="pointer-events-none absolute inset-y-0 right-0 w-1/6 bg-gradient-to-l from-white to-transparent" />
            </div>
        </section>
    );
}