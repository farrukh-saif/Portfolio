import Link from "next/link";
import { posts } from "@/lib/posts";

export const metadata = {
  title: "Notes — Farrukh Saif",
  description: "Short notes on space optical AIT and biomedical imaging.",
};

export default function BlogPage() {
  return (
    <main className="relative z-10 mx-auto min-h-screen max-w-3xl px-5 pb-24 pt-32 text-center">
      <p className="font-mono text-[11px] tracking-[0.32em] text-cyan-200/80">
        NOTES
      </p>
      <h1 className="mt-4 text-4xl font-medium tracking-tight text-white md:text-6xl">
        Blog
      </h1>
      <p className="mx-auto mt-5 max-w-xl text-base leading-8 text-white/75">
        Alignment, reconstruction, and whatever is on the bench.
      </p>
      <div className="mt-12 flex flex-col gap-4">
        {posts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="panel block p-6 md:p-8"
          >
            <p className="font-mono text-[11px] text-white/45">{post.date}</p>
            <h2 className="mt-3 text-2xl font-medium text-white">{post.title}</h2>
            <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-white/75">
              {post.summary}
            </p>
          </Link>
        ))}
      </div>
    </main>
  );
}
