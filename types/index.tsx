import type { IconType } from "react-icons";

export interface NavProps {
    id: string;
    label: string;
}
export interface WorkProps {
    name: string;
    tagline: string;
    description: string;
    /** The live site or demo. */
    link: string;
    /** Public repository; when set, the card shows "Live demo" and "Source" links instead of the hostname. */
    source?: string;
    caseStudy?: string;
    featured?: boolean;
    img: { src: string; width: number; height: number; contain?: boolean };
    techs: string[];
}
export interface ExperienceProps {
    title: string;
    company: string;
    from: string;
    to: string;
    link: string;
    description: string[];
    location: string;
    techs: string[];
}
export interface SkillGroupProps {
    label: string;
    /** `color` is the icon's brand colour on hover, as a complete Tailwind class (e.g. `group-hover:text-yellow-400`). */
    skills: { name: string; icon: IconType; color: string }[];
}
export interface SocilasProps {
    name: string;
    link: string;
    icon: JSX.Element;
}
