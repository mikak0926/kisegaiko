import Image from "next/image";

/**
 * 下から蓋が開き、内側の画像は逆方向に縮む二重動作のリビール。
 *
 * 監視対象(host)と clip-path をかける層(.clip)を分けている。
 * host 自身に clip-path をかけると、要素が視覚的に潰れて
 * IntersectionObserver が交差を検出できず、永久に開かなくなるため。
 */
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
      className={`relative overflow-hidden bg-sekkai/15 ${className}`}
      style={{ ["--d" as string]: `${delay}ms` }}
    >
      <div className="clip absolute inset-0">
        <Image
          src={src}
          alt={alt}
          fill
          sizes={sizes}
          priority={priority}
          className="object-cover"
        />
      </div>
    </div>
  );
}
