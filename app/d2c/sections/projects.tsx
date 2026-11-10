import React from "react";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { Marquee } from "@/components/magicui/marquee";

const PROJECTS = [
  { title: "Teeser", image: "/landing/d2c/projects/9.jpg", link: "https://teeser.ae/" },
  { title: "Gazelle glam", image: "/landing/d2c/projects/4.jpg", link: "https://gazelleglam.com/" },
  { title: "Perfume Oasis", image: "/landing/d2c/projects/1.jpg", link: "https://perfumeoasis.ae" },
  { title: "Opto Watch Co.", image: "/landing/d2c/projects/2.jpg", link: "https://optowatchco.com/" },
  { title: "Confianza", image: "/landing/d2c/projects/3.jpg", link: "https://confianza.ae/" },
  { title: "Khazayan", image: "/landing/d2c/projects/5.jpg", link: "https://khazayan.com/" },
  { title: "Tylu Kreations", image: "/landing/d2c/projects/6.jpg", link: "https://tylukreations.com/" },
  { title: "suyu", image: "/landing/d2c/projects/8.jpg", link: "http://suyuindia.com/" },
];

export function ProjectsCarousel() {
  return (
    <section
      id="projects"
      className="relative overflow-hidden  py-16 md:py-20"
    >
      {/* Header */}
      <div className="container text-center">
        <span className="inline-block rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 font-mono text-[10px] font-semibold uppercase tracking-[0.3em] text-red-500">
          Our Work
        </span>
        <h2 className="mt-4 font-Cormorant text-5xl font-light leading-none tracking-tight  lg:text-6xl">
          <span className="text-primary">Built</span> to Convert.{" "}
          <span className="text-primary">Proven</span> Across UAE
        </h2>
      </div>

      {/* Marquee */}
      <div className="relative mt-14" aria-label="Projects">
        <Marquee pauseOnHover className="[--duration40s]">
          {PROJECTS.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </Marquee>

        {/* edge fades */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-y-0 left-0 w-1/6 bg-gradient-to-r from-[#0a0a0a] to-transparent"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-y-0 right-0 w-1/6 bg-gradient-to-l from-[#0a0a0a] to-transparent"
        />
      </div>
    </section>
  );
}

function ProjectCard({
  title,
  image,
  link,
}: (typeof PROJECTS)[number]) {
  return (
    <Link
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={title}
      className="group relative block aspect-[16/10] w-[320px] shrink-0 overflow-hidden rounded-2xl border border-white/6 sm:w-[560px] lg:w-[680px]"
    >
      <img
        src={image}
        alt={title}
        loading="lazy"
        className="h-full w-full object-fit object-top transition-transform duration-700 ease-out group-hover:scale-[1.04]"
      />
      <span className="absolute right-3 top-3 flex size-9 items-center justify-center rounded-full bg-white/90 text-neutral-900 opacity-0 shadow transition-opacity duration-300 group-hover:opacity-100">
        <ArrowUpRight size={18} aria-hidden />
      </span>
    </Link>
  );
}

export default ProjectsCarousel;