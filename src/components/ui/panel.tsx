import type { ReactNode } from "react";

type PanelProps = {
  children: ReactNode;
  className?: string;
};

export function Panel({ children, className = "" }: PanelProps) {
  return (
    <div
      className={`panel-glow rounded-[1.75rem] border border-line bg-background-glass backdrop-blur-xl ${className}`}
    >
      {children}
    </div>
  );
}
