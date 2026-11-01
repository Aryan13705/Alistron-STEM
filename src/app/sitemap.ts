import { MetadataRoute } from "next";
import { ALISTRON_EVENTS } from "@/data/events";
import { PROJECTS_DATA } from "@/data/projects";

export const dynamic = "force-static";

const baseUrl = "https://alistron.in";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  // trailingSlash is on, so canonical URLs end with "/".
  const page = (path: string, changeFrequency: "weekly" | "monthly" | "yearly", priority: number) => ({
    url: `${baseUrl}${path}`,
    lastModified,
    changeFrequency,
    priority,
  });

  return [
    page("/", "weekly", 1.0),
    page("/neurotech/", "weekly", 0.9),
    page("/stem/", "weekly", 0.9),
    page("/projects/", "weekly", 0.8),
    page("/events/", "weekly", 0.8),
    page("/about/", "monthly", 0.7),
    page("/contact/", "monthly", 0.8),
    page("/privacy/", "yearly", 0.3),
    ...PROJECTS_DATA.map((p) => page(`/projects/${p.id}/`, "monthly", 0.6)),
    ...ALISTRON_EVENTS.map((e) => page(`/events/${e.slug}/`, "monthly", 0.6)),
  ];
}
