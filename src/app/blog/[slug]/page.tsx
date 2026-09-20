import Link from "next/link";
import { notFound } from "next/navigation";
import { getPost, posts } from "@/lib/posts";

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return {
    title: `${post.title} — Farrukh Saif`,
    description: post.summary,
  };
}

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  return (
    <article className="relative z-10 mx-auto min-h-screen max-w-2xl px-5 pb-24 pt-32 text-center">
      <p className="font-mono text-[11px] tracking-[0.2em] text-white/45">
        {post.date}
      </p>
      <h1 className="mt-4 text-4xl font-medium tracking-tight text-white md:text-5xl">
        {post.title}
      </h1>
      <div className="mt-10 space-y-6 text-left text-base leading-8 text-white/80">
        {post.body.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
      <Link
        href="/blog"
        className="mt-14 inline-block font-mono text-[11px] tracking-[0.2em] text-cyan-200/80 hover:text-white"
      >
        ALL NOTES
      </Link>
    </article>
  );
}
