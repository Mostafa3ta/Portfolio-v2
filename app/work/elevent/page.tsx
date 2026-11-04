import ArchitectureDiagram from "@/components/ArchitectureDiagram";
import Footer from "@/components/Footer";
import { SITE } from "@/constant/site";
import type { Metadata } from "next";
import Link from "next/link";
import type { ReactNode } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { MdOutlineArrowOutward } from "react-icons/md";

const description =
  "How I built and run Elevent, a live event-operations platform, as its sole developer: architecture, key frontend decisions, a production bug and results.";

export const metadata: Metadata = {
  title: "Elevent case study",
  description,
  alternates: { canonical: "/work/elevent" },
  openGraph: {
    type: "article",
    locale: "en_US",
    url: "/work/elevent",
    title: `Elevent case study | ${SITE.name}`,
    description,
    siteName: SITE.name,
  },
  twitter: {
    card: "summary_large_image",
    title: `Elevent case study | ${SITE.name}`,
    description,
  },
};

const sections = [
  { id: "problem", label: "Problem" },
  { id: "architecture", label: "Architecture" },
  { id: "role", label: "My role" },
  { id: "decisions", label: "Frontend decisions" },
  { id: "bug", label: "A production bug" },
  { id: "results", label: "Results" },
  { id: "stack", label: "Stack" },
];

const owned = [
  "The entire frontend: 120+ pages, the design system on shadcn/ui and Tailwind CSS, role-based portals and the typed API layer.",
  "The full product in production: backend, database, hosting, CI, deploys and monitoring, built with AI-assisted development and my own review and testing.",
];

const decided = [
  "Auth: session tokens in httpOnly cookies behind a Next.js proxy.",
  "Permissions drive the UI; the API enforces them.",
  "Hosting: Cloudflare edge for the web app, DigitalOcean for the API and database.",
  "Money as exact decimals, never floats; business dates in UAE time.",
];

const decisions = [
  {
    title: "Tokens never touch JavaScript",
    body: "Every browser request goes through a Next.js proxy that reads the session from an httpOnly cookie, and tokens are stripped from API responses. An XSS bug can’t steal a token the page never sees, and forged requests fail an origin check plus a double-submit token. The cost is one extra hop per call; the gain is one place for auth, token refresh and errors.",
  },
  {
    title: "One permission source drives the UI",
    body: "The app loads the user’s permissions once. A <PermissionGate> component and permission-filtered navigation decide what each of 13 roles sees, and the UI fails closed if that call fails. A new role means granting permissions on the server, not editing pages, and the API still enforces every check.",
  },
  {
    title: "Fix the primitives, then the pages",
    body: "For the responsive pass across 120+ pages, I fixed the shared components first, then swept pages at five widths from 360 to 1280 px. Most overflow bugs came from a few primitives. A Playwright check now flags any page that scrolls sideways.",
  },
];

const results = [
  ["Oct 2026", "live in production"],
  ["120+", "pages in the web app"],
  ["7 user types", "13 roles and 45 fine-grained permissions"],
  ["< 200 ms", "p95 for interactive API endpoints"],
  ["1.36 s → 0.17 s", "vendor-approval queue after fixing an N+1 query"],
  ["700+", "automated tests run in CI on every push"],
];

const stack = [
  ["Frontend", "Next.js (App Router), React, TypeScript, Tailwind CSS, shadcn/ui, React Hook Form, Zod"],
  ["Backend", "FastAPI, PostgreSQL, Alembic"],
  ["Platform", "Cloudflare Workers (OpenNext), DigitalOcean, Docker, GitLab CI"],
  ["Mobile", "React Native, Expo (in progress)"],
];

function Section({ id, title, children }: { id: string; title: string; children: ReactNode }) {
  return (
    <section id={id} aria-labelledby={`${id}-heading`} className="mt-14 scroll-mt-8">
      <h2 id={`${id}-heading`} className="text-sm font-bold uppercase tracking-widest text-slate-200">{title}</h2>
      <div className="mt-4">{children}</div>
    </section>
  );
}

export default function EleventCaseStudy() {
  return (
    <div className="mx-auto min-h-screen max-w-3xl px-6 py-12 md:px-12 md:py-20 lg:py-24">
      <Link
        href="/"
        className="group mb-10 inline-flex items-center font-semibold leading-tight text-teal-300 hover:text-teal-200"
      >
        <FaArrowLeft aria-hidden className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1 motion-reduce:transition-none" />
        {SITE.name}
      </Link>

      <main id="content" tabIndex={-1} className="focus:outline-none">
        <header>
          <p className="text-xs font-semibold uppercase tracking-widest text-teal-300">Case study</p>
          <h1 className="mt-2 text-4xl font-bold tracking-tight text-slate-100 sm:text-5xl">Elevent</h1>
          <p className="mt-4 text-lg leading-normal text-slate-300">
            A live event-operations platform for food and retail vendors at UAE events. I’m its sole developer: I own the
            frontend, and I shipped and run the whole product.
          </p>
          <dl className="mt-8 grid gap-4 rounded-xl border border-slate-700/50 bg-slate-800/30 p-5 text-sm sm:grid-cols-2">
            <div>
              <dt className="text-xs font-semibold uppercase tracking-wide text-slate-400">Role</dt>
              <dd className="mt-1 text-slate-200">Frontend Engineer (Sole Developer)</dd>
            </div>
            <div>
              <dt className="text-xs font-semibold uppercase tracking-wide text-slate-400">Timeline</dt>
              <dd className="mt-1 text-slate-200">Jan 2026 – present · live since Oct 2026</dd>
            </div>
            <div>
              <dt className="text-xs font-semibold uppercase tracking-wide text-slate-400">Platforms</dt>
              <dd className="mt-1 text-slate-200">Web app; iOS and Android app in progress</dd>
            </div>
            <div>
              <dt className="text-xs font-semibold uppercase tracking-wide text-slate-400">Live site</dt>
              <dd className="mt-1">
                <a href="https://elevent.ae/" target="_blank" rel="noreferrer noopener" className="group/link inline-flex items-baseline font-medium text-slate-200 hover:text-teal-300 focus-visible:text-teal-300">
                  elevent.ae
                  <MdOutlineArrowOutward aria-hidden className="icon_style" />
                  <span className="sr-only"> (opens in new tab)</span>
                </a>
              </dd>
            </div>
          </dl>
        </header>

        <nav aria-label="On this page" className="mt-8">
          <ul className="flex flex-wrap gap-2 text-sm">
            {sections.map((section) => (
              <li key={section.id}>
                <a href={`#${section.id}`} className="inline-block rounded-full border border-slate-700 px-3 py-1 text-slate-300 hover:border-teal-400/50 hover:text-teal-300 focus-visible:text-teal-300">
                  {section.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <Section id="problem" title="The problem">
          <p className="leading-relaxed text-slate-400">
            Events bring in dozens of food trucks and kiosks, each with expiring licences, a contract, a POS terminal and sales
            to reconcile. Elevent replaces the spreadsheets with one platform, from vendor onboarding to payouts, with a portal
            for each of its 7 user types (13 roles, 45 permissions): vendors, event clients, organizers, food-safety auditors,
            finance, freelancers and admins.
          </p>
        </Section>

        <Section id="architecture" title="Architecture">
          <figure>
            <div className="rounded-xl border border-slate-700/50 bg-slate-900/60 p-4 sm:p-6">
              <ArchitectureDiagram />
            </div>
            <figcaption className="mt-4">
              <ul className="space-y-2 text-sm leading-normal text-slate-400">
                <li>The browser only talks to the Next.js app, which keeps the session in an httpOnly cookie and proxies every API call.</li>
                <li>The API, a background worker for reminders and email, and the database run on DigitalOcean, with automated backups.</li>
              </ul>
            </figcaption>
          </figure>
        </Section>

        <Section id="role" title="My role">
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-xl border border-slate-700/50 bg-slate-800/30 p-5">
              <h3 className="font-semibold text-slate-200">Owned</h3>
              <ul className="mt-3 space-y-2 text-sm leading-normal text-slate-400">
                {owned.map((item) => <li key={item}>{item}</li>)}
              </ul>
            </div>
            <div className="rounded-xl border border-slate-700/50 bg-slate-800/30 p-5">
              <h3 className="font-semibold text-slate-200">Decided</h3>
              <ul className="mt-3 space-y-2 text-sm leading-normal text-slate-400">
                {decided.map((item) => <li key={item}>{item}</li>)}
              </ul>
            </div>
          </div>
        </Section>

        <Section id="decisions" title="Three frontend decisions">
          <ol className="space-y-6">
            {decisions.map((decision, index) => (
              <li key={decision.title}>
                <h3 className="font-semibold text-slate-100">
                  <span aria-hidden className="mr-2 text-teal-300">{index + 1}.</span>
                  {decision.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-400">{decision.body}</p>
              </li>
            ))}
          </ol>
        </Section>

        <Section id="bug" title="A production bug, and the fix">
          <h3 className="font-semibold text-slate-100">iPhones wouldn’t play the homepage video</h3>
          <p className="mt-2 text-sm leading-relaxed text-slate-400">
            On the live Cloudflare platform, Safari on iPhone never started the homepage video. Safari requests video in byte
            ranges and expects <code className="text-slate-300">206 Partial Content</code>, but Cloudflare’s static serving
            ignored the <code className="text-slate-300">Range</code> header. I added a small route that answers range requests
            with 206 and the right <code className="text-slate-300">Content-Range</code>, verified it on the production build,
            and shipped it before the video reached users.
          </p>
        </Section>

        <Section id="results" title="Results">
          <dl className="grid gap-3 sm:grid-cols-2">
            {results.map(([value, label]) => (
              <div key={label} className="rounded-xl border border-slate-700/50 bg-slate-800/30 p-4">
                <dt className="sr-only">{label}</dt>
                <dd>
                  <span className="block text-2xl font-bold text-teal-200">{value}</span>
                  <span aria-hidden className="mt-1 block text-sm leading-snug text-slate-400">{label}</span>
                </dd>
              </div>
            ))}
          </dl>
        </Section>

        <Section id="stack" title="Stack">
          <dl className="space-y-3 text-sm">
            {stack.map(([layer, tools]) => (
              <div key={layer} className="grid gap-1 sm:grid-cols-4 sm:gap-4">
                <dt className="font-semibold text-slate-300">{layer}</dt>
                <dd className="text-slate-400 sm:col-span-3">{tools}</dd>
              </div>
            ))}
          </dl>
        </Section>

        <div className="mt-14 rounded-xl border border-slate-700/50 bg-slate-800/30 p-6">
          <p className="text-lg font-semibold text-slate-100">Want to go deeper?</p>
          <p className="mt-1 text-sm text-slate-400">I’m happy to walk through the architecture and the trade-offs in an interview.</p>
          <Link
            href="/#contact"
            className="mt-4 inline-flex items-center gap-2 rounded-lg border border-teal-400/40 bg-teal-400/10 px-4 py-2.5 font-semibold leading-tight text-teal-200 transition-colors duration-300 hover:border-teal-300 hover:bg-teal-400/20"
          >
            Get in touch
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
}
