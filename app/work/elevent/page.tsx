import ArchitectureDiagram from "@/components/ArchitectureDiagram";
import Footer from "@/components/Footer";
import { SITE } from "@/constant/site";
import type { Metadata } from "next";
import Link from "next/link";
import type { ReactNode } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { MdOutlineArrowOutward } from "react-icons/md";

const description =
  "How I built and operate Elevent, a live event-operations platform, as its sole developer: architecture, frontend decisions, a production-platform bug and the numbers.";

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
  { id: "problem", label: "Problem and users" },
  { id: "architecture", label: "Architecture" },
  { id: "ownership", label: "Owned vs. decided" },
  { id: "decisions", label: "Frontend decisions" },
  { id: "bug", label: "A production-platform bug" },
  { id: "metrics", label: "Metrics" },
  { id: "stack", label: "Stack" },
  { id: "screenshots", label: "Screenshots" },
];

const users = [
  ["Vendors", "Food trucks, food kiosks and retail kiosks that onboard, verify their documents and apply to events."],
  ["Event clients", "Companies that book a vendor line-up for their event and follow it in their own portal."],
  ["Organizers", "The team running events, with sub-roles for F&B, retail, client management and accreditation."],
  ["Food-safety auditors", "Inspect vendors and record audits."],
  ["Finance", "Sales reconciliation, invoicing and payouts."],
  ["Freelancers and job seekers", "Event staff applying for work."],
  ["Admins", "Platform settings, users and permissions."],
];

const owned = [
  "The entire frontend: 120+ pages, the design system on shadcn/ui and Tailwind CSS, role-based portals for 7 user types, the typed API client layer and SEO.",
  "Shipping and operating the whole product: backend API and database, hosting, CI, deploys, backups and monitoring.",
  "Working with the product owner: 4 structured testing rounds and 99 tracked change requests.",
];

const decided = [
  "Session tokens live in httpOnly cookies behind a Next.js proxy, never in JavaScript.",
  "One permission source drives the UI; the API is the security boundary.",
  "The hosting split: website at the Cloudflare edge; API, worker and database on DigitalOcean, with the API reachable only through a tunnel.",
  "Money is stored as exact decimals, never floats, and business dates follow UAE time.",
  "PostgreSQL with migrations as the only way the schema changes, and every migration can be rolled back.",
];

const decisions = [
  {
    title: "Tokens never touch JavaScript",
    what: "Every browser request goes through a Next.js route that reads the session from an httpOnly cookie and forwards it to the API. Sign-in and refresh are server routes that set the cookies, and any token in an API response is stripped before it reaches the browser.",
    why: "If an XSS bug ever slips through, there is no token in the page for it to steal. Forged requests are stopped by two independent checks: the request has to come from the site’s own origin, and it has to carry a token that matches a cookie minted on page load. It’s minted on load because a visitor’s first request is usually signing in.",
    tradeoff: "Every API call takes one extra hop through the edge. In return there is one place that handles auth, token refresh (one refresh at a time, with other requests queued behind it), error handling and file uploads and downloads.",
  },
  {
    title: "One permission source drives the whole UI",
    what: "After sign-in the app loads the user’s roles and permissions once. A <PermissionGate> component and a permission-filtered sidebar decide what each of the 13 roles sees, and if that call fails the UI fails closed.",
    why: "Roles and sub-roles changed during the owner’s testing rounds. With a single source, a new sub-role meant granting permissions on the server, not editing pages.",
    tradeoff: "The UI hides; the API refuses. Every endpoint checks permissions itself, and data a client shouldn’t see is removed on the server before it is sent, so a hidden button is never the only protection.",
  },
  {
    title: "Fix the primitives, then the pages",
    what: "For the responsive pass across 120+ pages, I fixed the shared design-system components first, then swept pages top-down, checking each one at 360, 390, 768, 1024 and 1280 px.",
    why: "Most overflow bugs came from a handful of shared components. Fixing pages one by one would have meant fixing the same bug dozens of times.",
    tradeoff: "It front-loads work before any single page looks finished. An automated Playwright check now flags any page that scrolls sideways at those widths.",
  },
];

const metrics = [
  ["Oct 2026", "live in production"],
  ["120+", "pages in the web app"],
  ["7 · 45", "user types · permissions"],
  ["99", "change requests from 4 owner testing rounds"],
  ["< 200 ms", "p95 for interactive API endpoints on a seeded baseline"],
  ["1.36 s → 0.17 s", "vendor-approval queue after removing an N+1 query"],
  ["700+", "automated backend tests run in CI on every push"],
  ["7 days", "point-in-time restore, plus nightly encrypted off-site copies"],
];

const stack = [
  ["Frontend", "Next.js (App Router), React, TypeScript, Tailwind CSS, shadcn/ui (Radix), React Hook Form, Zod, FullCalendar, Leaflet"],
  ["Backend", "FastAPI, SQLAlchemy, Alembic, PostgreSQL 16"],
  ["Platform", "Cloudflare Workers (OpenNext), DigitalOcean, Docker, GitLab CI, UptimeRobot"],
  ["Mobile (in progress)", "React Native, Expo, TanStack Query"],
];

const screenshots = [
  "Vendor onboarding and document verification",
  "Organizer event-operations dashboard",
  "Mobile app: on-site audit",
];

function Section({ id, title, children }: { id: string; title: string; children: ReactNode }) {
  return (
    <section id={id} aria-labelledby={`${id}-heading`} className="mt-16 scroll-mt-8">
      <h2 id={`${id}-heading`} className="text-sm font-bold uppercase tracking-widest text-slate-200">{title}</h2>
      <div className="mt-5">{children}</div>
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
            A live event-operations platform for food, retail and catering events in the UAE and GCC. I’m its sole developer: I own the
            frontend, and I shipped and operate the whole product.
          </p>
          <dl className="mt-8 grid gap-4 rounded-xl border border-slate-700/50 bg-slate-800/30 p-5 text-sm sm:grid-cols-2">
            <div>
              <dt className="text-xs font-semibold uppercase tracking-wide text-slate-400">Role</dt>
              <dd className="mt-1 text-slate-200">Frontend Engineer · Sole Developer</dd>
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

        <nav aria-label="On this page" className="mt-10">
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

        <Section id="problem" title="The problem and the users">
          <div className="space-y-4 leading-relaxed text-slate-400">
            <p>
              Events in the UAE bring in dozens of food trucks, kiosks and retail vendors at once. Each vendor comes with licences,
              food-safety and staff documents that expire, a contract, setup needs, a POS terminal, and sales that have to be
              reconciled and paid out. Without one system, all of that lives in spreadsheets and message threads, and nobody can
              audit it.
            </p>
            <p>
              Elevent puts the whole vendor lifecycle on one platform: curation, document verification with expiry tracking,
              e-signed contracts, setup, on-site operations, POS sales, reconciliation, payouts and a full audit trail.
            </p>
          </div>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            {users.map(([name, text]) => (
              <li key={name} className="rounded-lg border border-slate-700/50 bg-slate-800/20 p-4">
                <p className="font-semibold text-slate-200">{name}</p>
                <p className="mt-1 text-sm leading-normal text-slate-400">{text}</p>
              </li>
            ))}
          </ul>
        </Section>

        <Section id="architecture" title="Architecture">
          <figure>
            <div className="rounded-xl border border-slate-700/50 bg-slate-900/60 p-4 sm:p-6">
              <ArchitectureDiagram />
            </div>
            <figcaption className="mt-5">
              <ul className="space-y-2 text-sm leading-normal text-slate-400">
                <li>The browser only ever talks to the Next.js app. Its proxy attaches the session from an httpOnly cookie and forwards each call to the API.</li>
                <li>The API isn’t exposed to the internet directly; both the web app and the mobile app reach it through a Cloudflare Tunnel.</li>
                <li>A background worker sends scheduled reminders, such as documents about to expire, and transactional email.</li>
                <li>Backups: daily managed-database backups with 7-day point-in-time restore, a save point before every deploy, and nightly encrypted off-site copies with tested restores.</li>
              </ul>
            </figcaption>
          </figure>
        </Section>

        <Section id="ownership" title="What I owned vs. what I decided">
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-xl border border-slate-700/50 bg-slate-800/30 p-5">
              <h3 className="font-semibold text-slate-200">Owned: built and run</h3>
              <ul className="mt-3 space-y-2 text-sm leading-normal text-slate-400">
                {owned.map((item) => <li key={item}>{item}</li>)}
              </ul>
            </div>
            <div className="rounded-xl border border-slate-700/50 bg-slate-800/30 p-5">
              <h3 className="font-semibold text-slate-200">Decided, and can explain</h3>
              <ul className="mt-3 space-y-2 text-sm leading-normal text-slate-400">
                {decided.map((item) => <li key={item}>{item}</li>)}
              </ul>
            </div>
          </div>
          <p className="mt-5 rounded-xl border border-teal-400/20 bg-teal-400/5 p-5 text-sm leading-normal text-slate-300">
            <span className="font-semibold text-teal-200">How the backend got built.</span> I’m a frontend engineer, and I don’t claim
            backend specialism. I built the API, database and infrastructure with AI-assisted development, working from my own specs,
            reviewing every change and testing it. I can walk through every decision on this list.
          </p>
        </Section>

        <Section id="decisions" title="Three frontend decisions">
          <ol className="space-y-8">
            {decisions.map((decision, index) => (
              <li key={decision.title}>
                <h3 className="text-lg font-semibold text-slate-100">
                  <span aria-hidden className="mr-2 text-teal-300">{index + 1}.</span>
                  {decision.title}
                </h3>
                <dl className="mt-3 space-y-3 text-sm leading-relaxed">
                  <div>
                    <dt className="font-semibold text-slate-300">What</dt>
                    <dd className="text-slate-400">{decision.what}</dd>
                  </div>
                  <div>
                    <dt className="font-semibold text-slate-300">Why</dt>
                    <dd className="text-slate-400">{decision.why}</dd>
                  </div>
                  <div>
                    <dt className="font-semibold text-slate-300">Trade-off</dt>
                    <dd className="text-slate-400">{decision.tradeoff}</dd>
                  </div>
                </dl>
              </li>
            ))}
          </ol>
        </Section>

        <Section id="bug" title="A production-platform bug, and the fix">
          <h3 className="text-lg font-semibold text-slate-100">iPhones wouldn’t play the homepage video</h3>
          <dl className="mt-3 space-y-3 text-sm leading-relaxed">
            <div>
              <dt className="font-semibold text-slate-300">What happened</dt>
              <dd className="text-slate-400">
                Testing on the live Cloudflare platform, the homepage video played everywhere except Safari on iPhone. It had
                worked locally.
              </dd>
            </div>
            <div>
              <dt className="font-semibold text-slate-300">Cause</dt>
              <dd className="text-slate-400">
                Safari loads video in byte ranges and expects <code className="text-slate-300">206 Partial Content</code> responses.
                Cloudflare’s static asset serving ignored the <code className="text-slate-300">Range</code> header and returned the
                whole file, so Safari never started playback. The local dev server supports ranges, which is why it never showed
                up there.
              </dd>
            </div>
            <div>
              <dt className="font-semibold text-slate-300">Fix</dt>
              <dd className="text-slate-400">
                A small Next.js route that serves media itself and answers range requests with 206 and the right{" "}
                <code className="text-slate-300">Content-Range</code> headers, verified against the production build. It was
                fixed before the video reached users.
              </dd>
            </div>
            <div>
              <dt className="font-semibold text-slate-300">Lesson</dt>
              <dd className="text-slate-400">Test media and caching on the real platform, not only on localhost.</dd>
            </div>
          </dl>
        </Section>

        <Section id="metrics" title="Metrics">
          <dl className="grid gap-3 sm:grid-cols-2">
            {metrics.map(([value, label]) => (
              <div key={label} className="rounded-xl border border-slate-700/50 bg-slate-800/30 p-4">
                <dt className="sr-only">{label}</dt>
                <dd>
                  <span className="block text-2xl font-bold text-teal-200">{value}</span>
                  <span aria-hidden className="mt-1 block text-sm leading-snug text-slate-400">{label}</span>
                </dd>
              </div>
            ))}
          </dl>
          <p className="mt-4 rounded-lg border border-dashed border-slate-600 p-4 text-sm text-slate-400">
            <span className="font-semibold text-slate-300">Placeholder:</span> usage numbers (vendors, events, transactions) will be
            added once the client approves sharing them.
          </p>
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

        <Section id="screenshots" title="Screenshots">
          <ul className="grid gap-4 sm:grid-cols-2">
            {screenshots.map((caption) => (
              <li key={caption}>
                <figure>
                  <div className="flex aspect-video items-center justify-center rounded-xl border-2 border-dashed border-slate-600 bg-slate-800/20 p-4 text-center text-sm text-slate-400">
                    Screenshot pending client approval
                  </div>
                  <figcaption className="mt-2 text-sm text-slate-300">{caption}</figcaption>
                </figure>
              </li>
            ))}
          </ul>
        </Section>

        <div className="mt-16 rounded-xl border border-slate-700/50 bg-slate-800/30 p-6">
          <p className="text-lg font-semibold text-slate-100">Want to go deeper on any of this?</p>
          <p className="mt-1 text-sm text-slate-400">I’m happy to walk through the architecture, the decisions and the trade-offs in an interview.</p>
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
