type ImageGridProps = {
  images: { src: string; alt: string; href?: string }[];
  columns?: 2 | 3 | 4;
};

export function ImageGrid({ images = [], columns = 3 }: ImageGridProps) {
  const gridClass = {
    2: "grid-cols-2",
    3: "grid-cols-2 sm:grid-cols-3",
    4: "grid-cols-2 sm:grid-cols-4",
  }[columns];

  return (
    <div className={`my-8 grid ${gridClass} gap-4`}>
      {images.map((image) => {
        const frame = (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={image.src}
            alt={image.alt}
            className="h-full w-full rounded-lg object-cover"
          />
        );

        return (
          <div key={image.src} className="relative aspect-square overflow-hidden">
            {image.href ? (
              <a
                href={image.href}
                target="_blank"
                rel="noreferrer"
                className="block h-full w-full"
              >
                {frame}
              </a>
            ) : (
              frame
            )}
          </div>
        );
      })}
    </div>
  );
}
