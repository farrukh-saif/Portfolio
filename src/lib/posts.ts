import fs from "fs";
import path from "path";

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

function parseFrontmatter(fileContent: string) {
  const match = /---\s*([\s\S]*?)\s*---/.exec(fileContent);
  if (!match) {
    return { metadata: {} as PostMetadata, content: fileContent.trim() };
  }

  const content = fileContent.replace(match[0], "").trim();
  const metadata: Partial<PostMetadata> = {};

  for (const line of match[1].trim().split("\n")) {
    const sep = line.indexOf(": ");
    if (sep === -1) continue;
    const key = line.slice(0, sep).trim() as keyof PostMetadata;
    const value = line.slice(sep + 2).trim().replace(/^['"](.*)['"]$/, "$1");
    metadata[key] = value;
  }

  return { metadata: metadata as PostMetadata, content };
}

export function getBlogPosts(): Post[] {
  if (!fs.existsSync(CONTENT_DIR)) return [];

  return fs
    .readdirSync(CONTENT_DIR)
    .filter((file) => path.extname(file) === ".mdx")
    .map((file) => {
      const raw = fs.readFileSync(path.join(CONTENT_DIR, file), "utf-8");
      const { metadata, content } = parseFrontmatter(raw);
      return {
        metadata,
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
