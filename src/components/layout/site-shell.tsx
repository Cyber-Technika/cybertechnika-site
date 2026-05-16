import type { ReactNode } from "react";

import { Container } from "@/components/layout/container";

type SiteShellProps = {
  children: ReactNode;
};

export function SiteShell({ children }: SiteShellProps) {
  return (
    <div className="relative isolate min-h-screen overflow-hidden bg-background text-foreground">
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:72px_72px] [mask-image:linear-gradient(to_bottom,black,transparent_78%)]" />
      <header className="relative z-10 border-b border-line/80 bg-background/70 backdrop-blur">
        <Container className="flex h-20 items-center justify-between">
          <div className="font-mono text-sm uppercase tracking-[0.28em] text-muted">
            cybertechnika
          </div>
          <div className="hidden text-sm text-muted sm:block">
            DevSecOps / Infrastructure Engineering
          </div>
        </Container>
      </header>

      <main className="relative z-10">{children}</main>
    </div>
  );
}
