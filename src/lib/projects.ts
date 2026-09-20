import fs from "fs";
import path from "path";
import { parseFrontmatter } from "./frontmatter";

export type Project = {
  slug: string;
  title: string;
  summary: string;
  image: string;
  href?: string;
  cta?: string;
  tags: string[];
  order: number;
  featured: boolean;
};

const PROJECTS_DIR = path.join(process.cwd(), "content/projects");

function splitTags(value?: string) {
  if (!value) return [];
  return value
    .split(",")
    .map((tag) => tag.trim())
    .filter(Boolean);
}

export function getProjects(): Project[] {
  if (!fs.existsSync(PROJECTS_DIR)) return [];

  return fs
    .readdirSync(PROJECTS_DIR)
    .filter((file) => path.extname(file) === ".mdx")
    .map((file) => {
      const raw = fs.readFileSync(path.join(PROJECTS_DIR, file), "utf-8");
      const { metadata } = parseFrontmatter(raw);
      return {
        slug: path.basename(file, ".mdx"),
        title: metadata.title ?? path.basename(file, ".mdx"),
        summary: metadata.summary ?? "",
        image: metadata.image ?? "",
        href: metadata.href || undefined,
        cta: metadata.cta || undefined,
        tags: splitTags(metadata.tags),
        order: Number(metadata.order ?? 99),
        featured: metadata.featured !== "false",
      };
    })
    .sort((a, b) => a.order - b.order || a.title.localeCompare(b.title));
}

export function getFeaturedProjects() {
  return getProjects().filter((project) => project.featured);
}
