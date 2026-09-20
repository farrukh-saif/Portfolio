import Link from "next/link";
import { posts } from "@/lib/posts";

export function BlogTeaser() {
  return (
    <section
      id="blog"
      className="relative scroll-mt-24 px-5 py-28 md:px-10"
    >
      <div className="mx-auto mb-10 max-w-3xl text-center">
        <p className="font-mono text-[11px] tracking-[0.32em] text-cyan-200/80">
          04 / NOTES
        </p>
        <h2 className="mt-4 text-3xl font-medium tracking-tight text-white md:text-5xl">
          Blog
        </h2>
      </div>
      <div className="mx-auto flex max-w-3xl flex-col gap-4">
        {posts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="panel block p-6 text-center transition-colors hover:border-white/20 md:p-8"
          >
            <p className="font-mono text-[11px] text-white/45">{post.date}</p>
            <h3 className="mt-3 text-2xl font-medium text-white">{post.title}</h3>
            <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-white/75">
              {post.summary}
            </p>
          </Link>
        ))}
      </div>
    </section>
  );
}
