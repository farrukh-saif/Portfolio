type Brand = "honeywell" | "uw" | "everpixel" | "odtu";

const honeywellStyle = {
  lg: { height: 42, maxWidth: 220 },
  md: { height: 34, maxWidth: 180 },
  sm: { height: 28, maxWidth: 148 },
} as const;

const everpixelStyle = {
  lg: { height: 36, maxWidth: 210 },
  md: { height: 28, maxWidth: 168 },
  sm: { height: 22, maxWidth: 132 },
} as const;

const odtuStyle = {
  lg: { height: 40, maxWidth: 160 },
  md: { height: 34, maxWidth: 136 },
  sm: { height: 28, maxWidth: 112 },
} as const;

const sealStyle = {
  lg: { height: 44, width: 44 },
  md: { height: 40, width: 40 },
  sm: { height: 36, width: 36 },
} as const;

export function BrandMark({
  brand,
  size = "md",
}: {
  brand: Brand;
  size?: "sm" | "md" | "lg";
}) {
  if (brand === "honeywell") {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src="/logos/honeywell-aerospace.png"
        alt="Honeywell Aerospace"
        style={honeywellStyle[size]}
        className="object-contain"
      />
    );
  }

  if (brand === "everpixel") {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src="/logos/everpixel.png"
        alt="EverPixel"
        style={everpixelStyle[size]}
        className="object-contain"
      />
    );
  }

  if (brand === "odtu") {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src="/logos/odtu.png"
        alt="ODTÜ / METU"
        style={odtuStyle[size]}
        className="object-contain"
      />
    );
  }

  return (
    <div className="inline-flex items-center justify-center rounded-full bg-white p-0.5">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/logos/uw-seal.png"
        alt="University of Waterloo"
        style={sealStyle[size]}
        className="rounded-full object-cover"
      />
    </div>
  );
}
