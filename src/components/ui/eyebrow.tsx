import type { ReactNode } from "react";

type EyebrowProps = {
  children: ReactNode;
};

export function Eyebrow({ children }: EyebrowProps) {
  return (
    <p className="font-mono text-xs uppercase tracking-[0.32em] text-accent-cyan">
      {children}
    </p>
  );
}
