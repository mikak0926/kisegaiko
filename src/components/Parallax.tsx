"use client";

import { useCallback, useEffect, useRef, type ReactNode } from "react";
import { useRaf } from "@/hooks/useRaf";

/** 背景画像などをゆっくり追従させる。speed は 0.05〜0.2 程度が上品。 */
export default function Parallax({
  speed = 0.12,
  className,
  children,
}: {
  speed?: number;
  className?: string;
  children: ReactNode;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const top = useRef(0);

  useEffect(() => {
    const measure = () => {
      if (ref.current) {
        top.current = ref.current.getBoundingClientRect().top + window.scrollY;
      }
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  const onScroll = useCallback(
    (y: number) => {
      const el = ref.current;
      if (!el) return;
      el.style.transform = `translate3d(0, ${(y - top.current) * speed}px, 0)`;
    },
    [speed],
  );

  useRaf(onScroll);

  return (
    <div ref={ref} className={className} style={{ willChange: "transform" }}>
      {children}
    </div>
  );
}
