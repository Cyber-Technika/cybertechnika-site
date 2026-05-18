import Image from "next/image";

import { Container } from "@/components/layout/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Panel } from "@/components/ui/panel";

const philosophy = [
  { title: "Automate", subtitle: "Everything", glyph: "⚙" },
  { title: "Secure", subtitle: "By Design", glyph: "◈" },
  { title: "Observe", subtitle: "Everything", glyph: "◉" },
  { title: "Iterate", subtitle: "Relentlessly", glyph: "↻" },
];

const projectRows = [
  {
    title: "Dev Setup Automation",
    description: "Fully automated workstation bootstrap with repeatable scripts.",
    tags: ["automation", "windows", "powershell"],
    image: "/assets/generated/project-dev-setup.png",
  },
  {
    title: "HomeLab Infrastructure",
    description: "Self-hosted services with clean routing, monitoring, and backups.",
    tags: ["homelab", "docker", "cloudflare"],
    image: "/assets/generated/project-homelab.png",
  },
  {
    title: "ISO 27001 Journey",
    description: "Policies, controls, and risk posture shaped into practice.",
    tags: ["governance", "iso 27001", "compliance"],
    image: "/assets/generated/project-iso.png",
  },
];

const deploymentLog = [
  "> git push origin main",
  "> building optimized production build...",
  "> running security scan...",
  "> all checks passed",
  "> deploying to edge...",
  "> success! live on cybertechnika.pro",
];

const stackLines = [
  "infrastructure:",
  "  - linux",
  "  - docker",
  "  - cloudflare",
  "  - nginx",
  "  - proxmox",
  "automation:",
  "  - ansible",
  "  - github actions",
  "security:",
  "  - zero trust",
  "  - iam / auth",
  "observability:",
  "  - uptime monitoring",
  "  - log management",
];

const toolMarks = [
  { label: "Terraform", src: "/assets/tool-icons/terraform.svg" },
  { label: "Kubernetes", src: "/assets/tool-icons/kubernetes.svg" },
  { label: "Docker", src: "/assets/tool-icons/docker.svg" },
  { label: "Cloudflare", src: "/assets/tool-icons/cloudflare.svg" },
  { label: "Ansible", src: "/assets/tool-icons/ansible.svg" },
  { label: "Linux", src: "/assets/tool-icons/linux.svg" },
  { label: "Windows", src: "/assets/tool-icons/windows8.svg" },
  { label: "PowerShell", src: "/assets/tool-icons/powershell.svg" },
  { label: "GitHub", src: "/assets/tool-icons/github.svg" },
  { label: "VS Code", src: "/assets/tool-icons/vscode.svg" },
  { label: "Nginx", src: "/assets/tool-icons/nginx.svg" },
  { label: "Azure", src: "/assets/tool-icons/azure.svg" },
  { label: "Grafana", src: "/assets/tool-icons/grafana.svg" },
];

export function DashboardHome() {
  return (
    <Container className="py-5">
      <section className="grid gap-4 xl:grid-cols-[minmax(0,1fr)_360px]">
        <Panel className="relative min-h-[430px] overflow-hidden p-0">
          <Image
            src="/assets/generated/hero-city.png"
            alt="Original cyberpunk hero artwork"
            fill
            priority
            className="object-cover"
            sizes="(min-width: 1280px) 70vw, 100vw"
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(9,11,17,0.96)_0%,rgba(9,11,17,0.86)_35%,rgba(9,11,17,0.2)_70%,rgba(9,11,17,0.08)_100%)]" />
          <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-background via-background/70 to-transparent" />

          <div className="relative z-10 flex min-h-[430px] max-w-lg flex-col justify-between p-6 sm:p-8">
            <div>
              <p className="font-mono text-sm text-accent-pink">
                &gt; samuelmeddows@cybertechnika:~$ whoami
              </p>
              <h1 className="mt-6 text-4xl font-semibold tracking-[0.08em] sm:text-5xl">
                SAMUEL MEDDOWS
              </h1>
              <p className="mt-4 text-lg font-medium">Systems Engineer</p>
              <p className="mt-1 text-base">
                <span className="text-accent-pink">DevSecOps</span>
                <span className="text-muted"> · </span>
                <span className="text-accent-green">Automation</span>
                <span className="text-muted"> · </span>
                <span className="text-accent-cyan">Security</span>
              </p>
              <p className="mt-6 max-w-sm font-mono text-sm leading-7 text-foreground/85">
                I build, automate, and secure the systems that power digital
                infrastructure.
                <br />
                Everything is Code. Security First.
              </p>
            </div>

            <div>
              <p className="font-mono text-sm text-accent-pink">
                &gt; samuelmeddows@cybertechnika:~${" "}
                <span className="terminal-cursor" aria-hidden="true" />
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <button className="rounded-md bg-accent-pink px-5 py-3 font-mono text-sm font-semibold uppercase tracking-[0.12em] text-background transition hover:brightness-110">
                  View Projects
                </button>
                <button className="rounded-md border border-accent-cyan/60 bg-background/40 px-5 py-3 font-mono text-sm uppercase tracking-[0.12em] text-accent-cyan transition hover:bg-accent-cyan/10">
                  Download Resume
                </button>
              </div>
            </div>
          </div>
        </Panel>

        <div className="grid gap-4">
          <Panel className="p-5">
            <div className="flex items-center justify-between">
              <Eyebrow>Live System Telemetry</Eyebrow>
              <span className="font-mono text-xs text-accent-pink">• live</span>
            </div>
            <div className="mt-5 grid gap-3 sm:grid-cols-3 xl:grid-cols-3">
              <Metric title="Site Uptime" value="99.99%" accent="text-accent-cyan" />
              <Metric title="GitHub Activity" value="247" accent="text-foreground" />
              <Metric title="Pipeline Status" value="All Green" accent="text-accent-green" />
            </div>
            <div className="mt-5 rounded-2xl border border-line bg-black/15 p-4">
              <Eyebrow>Deployment Log</Eyebrow>
              <div className="mt-4 space-y-1 font-mono text-xs leading-6 text-accent-green">
                {deploymentLog.map((line) => (
                  <p key={line}>{line}</p>
                ))}
              </div>
            </div>
          </Panel>

          <Panel className="relative min-h-28 overflow-hidden p-6">
            <div className="absolute inset-0 opacity-20">
              <Image
                src="/assets/generated/hero-city.png"
                alt=""
                fill
                aria-hidden="true"
                className="object-cover object-right"
                sizes="360px"
              />
            </div>
            <div className="relative">
              <div className="text-3xl text-accent-pink">“</div>
              <p className="mt-2 text-sm leading-7">
                Simplicity is the ultimate sophistication.
                <br />
                Automation is the force multiplier.
                <br />
                Security is non-negotiable.
              </p>
              <p className="mt-3 font-mono text-xs text-accent-pink">
                — Cybertechnika Philosophy
              </p>
            </div>
          </Panel>
        </div>
      </section>

      <section className="mt-4 grid gap-4 md:grid-cols-4">
        {philosophy.map((item) => (
          <Panel
            key={item.title}
            className="group flex items-center gap-4 px-5 py-4 transition hover:border-line-strong hover:bg-background-elevated"
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-full border border-accent-cyan/40 text-xl text-accent-cyan transition group-hover:shadow-[0_0_18px_rgba(102,217,239,0.25)]">
              {item.glyph}
            </div>
            <div>
              <h2 className="font-mono uppercase tracking-[0.14em] text-accent-pink">
                {item.title}
              </h2>
              <p className="mt-1 text-xs text-muted">{item.subtitle}</p>
            </div>
          </Panel>
        ))}
      </section>

      <section className="mt-4 grid gap-4 xl:grid-cols-[1fr_0.88fr_1.22fr]">
        <Panel className="overflow-hidden p-0">
          <div className="grid min-h-[310px] sm:grid-cols-[1fr_0.95fr]">
            <div className="p-6">
              <Eyebrow>About Me</Eyebrow>
              <h2 className="mt-5 text-2xl font-semibold uppercase tracking-[0.08em]">
                Engineer. Automator. Problem Solver.
              </h2>
              <p className="mt-5 text-sm leading-7 text-muted">
                I’m a systems engineer transitioning deeply into DevSecOps and
                infrastructure security.
              </p>
              <p className="mt-4 text-sm leading-7 text-muted">
                I thrive on building scalable, secure, observable systems that
                just work.
              </p>
            </div>
            <div className="relative min-h-60">
              <Image
                src="/assets/generated/about-cat.png"
                alt="Original cyberpunk cat artwork"
                fill
                className="object-cover"
                sizes="360px"
              />
            </div>
          </div>
        </Panel>

        <Panel className="overflow-hidden p-0">
          <div className="grid min-h-[310px] sm:grid-cols-[0.95fr_1fr]">
            <div className="p-5">
              <Eyebrow>Core Stack</Eyebrow>
              <pre className="mt-4 overflow-hidden font-mono text-xs leading-5 text-muted">
                {stackLines.join("\n")}
              </pre>
            </div>
            <div className="relative min-h-60">
              <Image
                src="/assets/generated/core-stack-skull.png"
                alt="Original technical skull artwork"
                fill
                className="object-cover"
                sizes="320px"
              />
            </div>
          </div>
        </Panel>

        <Panel className="p-5">
          <Eyebrow>Featured Projects</Eyebrow>
          <div className="mt-5 space-y-4">
            {projectRows.map((project) => (
              <article
                key={project.title}
                className="grid gap-4 rounded-2xl border border-line bg-black/10 p-3 sm:grid-cols-[148px_1fr]"
              >
                <div className="relative min-h-24 overflow-hidden rounded-xl">
                  <Image
                    src={project.image}
                    alt=""
                    fill
                    className="object-cover"
                    sizes="148px"
                  />
                </div>
                <div>
                  <h3 className="font-mono text-sm text-accent-pink">
                    {project.title}
                  </h3>
                  <p className="mt-2 text-xs leading-6 text-muted">
                    {project.description}
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded border border-line px-2 py-1 font-mono text-[10px] uppercase tracking-[0.12em] text-accent-cyan"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </Panel>
      </section>

      <section className="mt-4 grid gap-4 lg:grid-cols-[2.08fr_1fr]">
        <Panel className="rounded-xl border-accent-cyan/25 bg-background/70 px-6 py-4">
          <Eyebrow>{"// Tech Stack / Tools"}</Eyebrow>
          <div className="mt-5 flex flex-wrap items-center gap-5">
            {toolMarks.map((tool) => (
              <div
                key={tool.label}
                className="flex h-11 min-w-11 items-center justify-center"
                title={tool.label}
              >
                <Image
                  src={tool.src}
                  alt={tool.label}
                  width={40}
                  height={40}
                  className="h-10 w-10 object-contain"
                />
              </div>
            ))}
          </div>
        </Panel>

        <Panel className="relative overflow-hidden rounded-xl border-accent-cyan/30 bg-background/70 px-4 py-4">
          <div className="absolute left-0 top-0 h-5 w-px bg-accent-pink" />
          <div className="absolute left-0 top-0 h-px w-5 bg-accent-pink" />
          <div className="absolute right-0 top-0 h-5 w-px bg-accent-cyan" />
          <div className="absolute right-0 top-0 h-px w-5 bg-accent-cyan" />
          <div className="grid gap-5 sm:grid-cols-3 sm:gap-0">
            <FooterSignal
              title="Tools"
              accent="text-accent-cyan"
              glyph="terminal"
              lines={["Terraform /", "Kubernetes /", "Linux"]}
            />
            <FooterSignal
              title="Contact"
              accent="text-accent-pink"
              glyph="chat"
              lines={["Channel", "Placeholder"]}
            />
            <FooterSignal
              title="Location"
              accent="text-accent-green"
              glyph="pin"
              lines={["Region", "Placeholder"]}
            />
          </div>
        </Panel>
      </section>

      <footer className="mt-4 flex flex-col gap-2 border-t border-line pt-4 font-mono text-[11px] text-muted sm:flex-row sm:items-center sm:justify-between">
        <span>© 2026 Cybertechnika.pro — Built with passion, caffeine and automation.</span>
        <span>Everything is Code. Security First.</span>
      </footer>
    </Container>
  );
}

type MetricProps = {
  title: string;
  value: string;
  accent: string;
};

function Metric({ title, value, accent }: MetricProps) {
  return (
    <div className="rounded-2xl border border-line bg-black/15 p-4">
      <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted">
        {title}
      </p>
      <p className={`mt-3 font-mono text-lg ${accent}`}>{value}</p>
    </div>
  );
}

type FooterSignalProps = {
  title: string;
  accent: string;
  glyph: "terminal" | "chat" | "pin";
  lines: string[];
};

function FooterSignal({ title, accent, glyph, lines }: FooterSignalProps) {
  return (
    <div className="border-line sm:border-l sm:px-5 first:sm:border-l-0 first:sm:pl-0 last:sm:pr-0">
      <div className="flex items-center gap-3">
        <FooterGlyph glyph={glyph} accent={accent} />
        <p className={`font-mono text-[10px] uppercase tracking-[0.18em] ${accent}`}>
          {title}
        </p>
      </div>
      <div className="mt-4 space-y-1 font-mono text-xs leading-5 text-muted">
        {lines.map((line) => (
          <p key={line}>{line}</p>
        ))}
      </div>
    </div>
  );
}

function FooterGlyph({
  glyph,
  accent,
}: {
  glyph: FooterSignalProps["glyph"];
  accent: string;
}) {
  if (glyph === "terminal") {
    return (
      <span className={`flex h-8 w-8 items-center justify-center border ${accent}`}>
        &gt;_
      </span>
    );
  }

  if (glyph === "chat") {
    return <span className={`text-2xl leading-none ${accent}`}>⌁</span>;
  }

  return <span className={`text-2xl leading-none ${accent}`}>⌖</span>;
}
