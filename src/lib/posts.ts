import fs from "fs";
import path from "path";
import { parseFrontmatter } from "./frontmatter";

export type PostMetadata = {
  title: string;
  publishedAt: string;
  summary: string;
  tags?: string;
  image?: string;
};

export type Post = {
  slug: string;
  metadata: PostMetadata;
  content: string;
};

const CONTENT_DIR = path.join(process.cwd(), "content");

export function getBlogPosts(): Post[] {
  if (!fs.existsSync(CONTENT_DIR)) return [];

  return fs
    .readdirSync(CONTENT_DIR)
    .filter((file) => path.extname(file) === ".mdx")
    .map((file) => {
      const raw = fs.readFileSync(path.join(CONTENT_DIR, file), "utf-8");
      const { metadata, content } = parseFrontmatter(raw);
      return {
        metadata: metadata as PostMetadata,
        content,
        slug: path.basename(file, ".mdx"),
      };
    })
    .sort(
      (a, b) =>
        new Date(b.metadata.publishedAt).getTime() -
        new Date(a.metadata.publishedAt).getTime(),
    );
}

export function getPost(slug: string) {
  return getBlogPosts().find((post) => post.slug === slug);
}

export function formatDate(date: string) {
  const value = date.includes("T") ? date : `${date}T00:00:00`;
  return new Date(value).toLocaleString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}
