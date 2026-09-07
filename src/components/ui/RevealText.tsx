import type { ElementType, ReactNode } from "react";

/**
 * 行マスクのせり上がり。日本語は文字単位ではなく行・文節単位が読みやすく上品。
 * lines に配列で渡した各行が、120ms ずつ遅れてせり上がる。
 */
export default function RevealText({
  as: Tag = "h2",
  lines,
  className,
  delay = 0,
}: {
  as?: ElementType;
  lines: ReactNode[];
  className?: string;
  delay?: number;
}) {
  return (
    <Tag data-reveal-line className={className}>
      {lines.map((line, i) => (
        <span className="line" key={i}>
          <span style={{ ["--d" as string]: `${delay + i * 120}ms` }}>{line}</span>
        </span>
      ))}
    </Tag>
  );
}
