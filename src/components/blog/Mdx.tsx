import type {
  AnchorHTMLAttributes,
  HTMLAttributes,
  IframeHTMLAttributes,
  ImgHTMLAttributes,
  ReactNode,
} from "react";
import Link from "next/link";
import { MDXRemote } from "next-mdx-remote/rsc";
import { highlight } from "sugar-high";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import { ImageGrid } from "./ImageGrid";
import "katex/dist/katex.min.css";

function CustomLink({
  href = "",
  children,
  ...props
}: AnchorHTMLAttributes<HTMLAnchorElement>) {
  if (href.startsWith("/")) {
    return (
      <Link href={href} {...props}>
        {children}
      </Link>
    );
  }
  if (href.startsWith("#")) {
    return (
      <a href={href} {...props}>
        {children}
      </a>
    );
  }
  return (
    <a href={href} target="_blank" rel="noreferrer" {...props}>
      {children}
    </a>
  );
}

function Code({
  children,
  ...props
}: HTMLAttributes<HTMLElement> & { children?: ReactNode }) {
  const html = highlight(String(children));
  return <code dangerouslySetInnerHTML={{ __html: html }} {...props} />;
}

function slugify(value: unknown) {
  return String(value)
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-")
    .replace(/&/g, "-and-")
    .replace(/[^\w\-]+/g, "")
    .replace(/--+/g, "-");
}

function createHeading(level: 1 | 2 | 3 | 4) {
  function Heading({ children }: { children?: ReactNode }) {
    const slug = slugify(children);
    const Tag = `h${level}` as const;
    return (
      <Tag id={slug}>
        <a href={`#${slug}`} className="anchor">
          {children}
        </a>
      </Tag>
    );
  }
  Heading.displayName = `Heading${level}`;
  return Heading;
}

const components = {
  h1: createHeading(1),
  h2: createHeading(2),
  h3: createHeading(3),
  h4: createHeading(4),
  a: CustomLink,
  code: Code,
  ImageGrid,
  img: (props: ImgHTMLAttributes<HTMLImageElement>) => (
    // eslint-disable-next-line @next/next/no-img-element
    <img {...props} alt={props.alt ?? ""} className="rounded-lg" />
  ),
  iframe: ({
    frameBorder,
    allowFullScreen,
    frameborder,
    allowfullscreen,
    ...props
  }: IframeHTMLAttributes<HTMLIFrameElement> & {
    frameborder?: string;
    allowfullscreen?: string | boolean;
  }) => (
    <iframe
      {...props}
      frameBorder={frameBorder ?? frameborder ?? "0"}
      allowFullScreen={allowFullScreen ?? Boolean(allowfullscreen)}
      className="mx-auto my-6 max-w-full rounded-lg"
    />
  ),
};

export function CustomMDX({ source }: { source: string }) {
  return (
    <MDXRemote
      source={source}
      components={components}
      options={{
        mdxOptions: {
          remarkPlugins: [[remarkMath, { singleDollarTextMath: false }]],
          rehypePlugins: [rehypeKatex],
        },
      }}
    />
  );
}
