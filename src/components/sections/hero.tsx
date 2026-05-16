import { Container } from "@/components/layout/container";
import { Eyebrow } from "@/components/ui/eyebrow";

export function Hero() {
  return (
    <section className="flex min-h-[calc(100vh-5rem)] items-center py-16 sm:py-24">
      <Container>
        <div className="max-w-4xl">
          <Eyebrow>Infrastructure / Security / Automation</Eyebrow>

          <div className="mt-6 border-l border-accent-cyan/40 pl-6 sm:pl-8">
            <p className="font-mono text-sm text-muted">
              $ booting cybertechnika.pro
            </p>

            <h1 className="mt-5 max-w-4xl text-4xl font-semibold tracking-[-0.04em] text-balance sm:text-5xl lg:text-6xl">
              Elegant infrastructure engineering, built with security in the
              bloodstream.
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-muted sm:text-lg">
              A premium DevSecOps portfolio foundation shaped around automation,
              zero trust, observability, and systems that remain understandable
              under pressure.
            </p>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {["Everything as Code", "Security First", "Observability Matters"].map(
              (principle) => (
                <div
                  key={principle}
                  className="rounded-2xl border border-line bg-background-elevated/80 p-4 text-sm text-muted shadow-[0_18px_60px_rgba(0,0,0,0.22)]"
                >
                  {principle}
                </div>
              ),
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}
