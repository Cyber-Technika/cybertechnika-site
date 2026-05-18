import type { ReactNode } from "react";

import { Container } from "@/components/layout/container";

type SiteShellProps = {
  children: ReactNode;
};

export function SiteShell({ children }: SiteShellProps) {
  return (
    <div className="relative isolate min-h-screen overflow-hidden bg-background text-foreground">
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:72px_72px] [mask-image:linear-gradient(to_bottom,black,transparent_78%)]" />
      <div aria-hidden="true" className="scan-line-track pointer-events-none absolute inset-0 z-0">
        <div className="scan-line absolute inset-x-0 top-0" />
      </div>
      <header className="relative z-10 border-b border-line/80 bg-background/70 backdrop-blur">
        <Container className="flex min-h-20 items-center justify-between gap-6 py-5">
          <div className="flex items-center gap-4">
            <div className="text-3xl font-black italic tracking-tight text-accent-pink">
              CT
            </div>
            <div>
              <div className="font-mono text-sm tracking-[0.08em] text-foreground">
                cybertechnika.pro
              </div>
              <div className="mt-1 text-xs uppercase tracking-[0.24em] text-accent-pink">
                /DevSecOps Engineer
              </div>
            </div>
          </div>

          <nav className="hidden items-center gap-6 text-sm text-muted md:flex">
            {["Home", "About", "Stack", "Projects", "Journal", "Contact"].map((item) => (
              <span
                key={item}
                className="nav-link relative inline-flex cursor-pointer transition duration-200 hover:text-foreground"
              >
                {item}
              </span>
            ))}
          </nav>

          <div className="flex items-center gap-2 rounded-full border border-accent-cyan/30 bg-accent-cyan/10 px-3 py-1 font-mono text-xs uppercase tracking-[0.22em] text-accent-cyan">
            <span className="h-1.5 w-1.5 rounded-full bg-accent-green shadow-[0_0_12px_rgba(166,226,46,0.8)]" />
            system online
          </div>
        </Container>
      </header>

      <main className="relative z-10">{children}</main>
    </div>
  );
}
