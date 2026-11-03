import {
  Experience,
  Footer,
  Hero,
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
        <header className="lg:flex lg:w-1/2 lg:flex-col lg:self-start lg:py-16 tall:sticky tall:top-0 tall:h-screen tall:justify-between">
          <Hero />
          <Nav />
          <Socials />
        </header>

        <main id="content" tabIndex={-1} className="pt-24 focus:outline-none lg:w-1/2 lg:py-16">
          <section id="experience" aria-labelledby="experience-heading" className="sections_style">
            <Experience />
          </section>
          <section id="skills" aria-labelledby="skills-heading" className="sections_style">
            <Skills />
          </section>
          <section id="projects" aria-labelledby="projects-heading" className="sections_style">
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
