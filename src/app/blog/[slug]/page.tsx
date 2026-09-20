import Link from "next/link";
import { notFound } from "next/navigation";
import { CustomMDX } from "@/components/blog/Mdx";
import { formatDate, getBlogPosts, getPost } from "@/lib/posts";

export function generateStaticParams() {
  return getBlogPosts().map((post) => ({ slug: post.slug }));
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
    title: post.metadata.title,
    description: post.metadata.summary,
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
    <article className="relative z-10 mx-auto min-h-screen max-w-2xl px-5 pb-24 pt-32">
      <p className="text-center font-mono text-[11px] tracking-[0.2em] text-white/45">
        {formatDate(post.metadata.publishedAt)}
      </p>
      <h1 className="mt-4 text-center text-4xl font-medium tracking-tight text-white md:text-5xl">
        {post.metadata.title}
      </h1>
      <div className="mdx mt-10">
        <CustomMDX source={post.content} />
      </div>
      <div className="mt-14 text-center">
        <Link
          href="/blog"
          className="inline-block font-mono text-[11px] tracking-[0.2em] text-cyan-200/80 hover:text-white"
        >
          ALL NOTES
        </Link>
      </div>
    </article>
  );
}
