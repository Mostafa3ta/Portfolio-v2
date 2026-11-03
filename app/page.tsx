import {
  Experience,
  Footer,
  Nav,
  ProjectsPreview,
  Socials,
  Skills,
  ContactCTA,
} from "@/components";
import { CONTACT, SITE } from "@/constant/site";
import type { Metadata } from "next";
import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";
import { MdOutlineArrowOutward } from "react-icons/md";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: SITE.name,
  jobTitle: SITE.jobTitle,
  url: SITE.url,
  email: `mailto:${CONTACT.email}`,
  address: { "@type": "PostalAddress", addressLocality: "Alexandria", addressCountry: "EG" },
  sameAs: [CONTACT.linkedin, CONTACT.github],
  knowsAbout: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Web accessibility", "Web performance"],
  knowsLanguage: ["ar", "en"],
};

export default function Home() {
  return (
    <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 md:px-12 md:py-20 lg:px-24 lg:py-0">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />
      <div className="lg:flex lg:justify-between lg:gap-4">
        <header className="lg:sticky lg:top-0 lg:flex lg:max-h-fit lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
          <div>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              <span className="bg-gradient-to-r from-slate-200 via-teal-200 to-slate-200 bg-clip-text text-transparent">
                Mostafa Mahmoud
              </span>
            </h1>
            <p className="mt-3 text-lg font-semibold tracking-tight text-slate-200 sm:text-xl">
              <span className="whitespace-nowrap">Web Developer ·</span> <span className="whitespace-nowrap">QA Testing ·</span> <span className="whitespace-nowrap">Technical Support</span>
            </p>
            <p className="mt-2 text-sm text-slate-400">
              <span className="whitespace-nowrap">Alexandria, Egypt ·</span> <span className="whitespace-nowrap">Open to international relocation ·</span> <span className="whitespace-nowrap">Available immediately</span>
            </p>
            <p className="mt-4 max-w-xs leading-normal text-slate-300">
              Web developer with 3 years of experience shipping and maintaining <span className="text-teal-300 font-semibold">production</span> platforms end to end — building features, testing them across devices and browsers, and supporting live users. Comfortable across development, QA, and technical support work, with an AI-assisted workflow and rigorous human review.
            </p>
            <div className="mt-7">
              <a
                href="https://drive.google.com/file/d/1mp4K7hO4RgEgGsbUtZmDmMH8xlmPSFfo/view"
                className="inline-flex items-center gap-2 rounded-lg bg-teal-400/10 px-4 py-2.5 leading-tight text-slate-200 hover:bg-teal-400/20 hover:text-teal-300 focus-visible:text-teal-300 font-semibold group/link text-base transition-all duration-300 border border-teal-400/20 hover:border-teal-400/40"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="View CV (opens in new tab)"
              >
                <span>View CV</span>
                <MdOutlineArrowOutward className="h-4 w-4 transition-transform group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5" />
              </a>
            </div>
          </div>
          <Nav />
          <Socials />
        </header>

        <main id="content" tabIndex={-1} className="pt-24 focus:outline-none lg:w-1/2 lg:py-24">
          <section id="experience" aria-labelledby="experience-heading" className="sections_style">
            <Experience />
          </section>
          <section id="projects" aria-labelledby="projects-heading" className="sections_style">
            <Skills />
            <ProjectsPreview />
            <div className="mt-12">
              <Link
                href="/projects"
                className="inline-flex items-center leading-tight font-semibold text-slate-200 group"
              >
                <span>
                  <span className="border-b border-transparent pb-px transition group-hover:border-teal-300 motion-reduce:transition-none">
                    View All Projects{" "}
                  </span>
                  <span className="whitespace-nowrap">
                    <FaArrowRightLong className="ml-1 inline-block h-4 w-4 shrink-0 -translate-y-px transition-transform group-hover:translate-x-2 group-focus-visible:translate-x-2 motion-reduce:transition-none" />
                  </span>
                </span>
              </Link>
            </div>
          </section>
          <section id="contact" aria-labelledby="contact-heading">
            <ContactCTA />
          </section>
          <Footer />
        </main>
      </div>
    </div>
  );
}
