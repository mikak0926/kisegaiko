import Image from "next/image";

/** 下から蓋が開き、内側の画像は逆方向に縮む二重動作のリビール。 */
export default function RevealImage({
  src,
  alt,
  className = "",
  sizes = "100vw",
  priority = false,
  delay = 0,
}: {
  src: string;
  alt: string;
  className?: string;
  sizes?: string;
  priority?: boolean;
  delay?: number;
}) {
  return (
    <div
      data-reveal-clip
      data-cursor="view"
      className={`relative overflow-hidden ${className}`}
      style={{ ["--d" as string]: `${delay}ms` }}
    >
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        priority={priority}
        className="object-cover"
      />
    </div>
  );
}
