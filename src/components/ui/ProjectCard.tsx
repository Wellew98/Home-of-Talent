import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";
import type { Project } from "@/data/projects";

/**
 * Project card — large editorial image, category badge, name, location (brief s.13).
 */
export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="group">
      <Link href={`/projects/${project.slug}`} className="block">
        <div className="relative aspect-[16/10] overflow-hidden rounded-[2px] border border-hairline bg-tint">
          <Image
            src={project.image}
            alt={`${project.name} — ${project.category}`}
            fill
            sizes="(min-width: 640px) 50vw, 100vw"
            className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          />
          <span className="absolute left-4 top-4 rounded-[2px] bg-charcoal/85 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.1em] text-ondark">
            {project.category}
          </span>
          {project.status === "in-progress" && (
            <span className="absolute right-4 top-4 rounded-[2px] bg-copper px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.1em] text-white">
              On site now
            </span>
          )}
        </div>
        <div className="mt-5 flex items-start justify-between gap-4">
          <div>
            <h3 className="font-display text-[22px] font-bold tracking-tight text-ink transition-colors group-hover:text-copper">
              {project.name}
            </h3>
            <p className="mt-1 flex items-center gap-1.5 text-[14px] text-muted">
              <MapPin className="h-3.5 w-3.5 text-sage" aria-hidden />
              {project.location}
            </p>
          </div>
          <ArrowRight className="mt-2 h-5 w-5 shrink-0 text-copper transition-transform group-hover:translate-x-1" />
        </div>
        <p className="mt-3 max-w-xl text-[15px] leading-relaxed text-muted">
          {project.shortDescription}
        </p>
      </Link>
    </article>
  );
}
