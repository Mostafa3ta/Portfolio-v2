import type { IconType } from "react-icons";

export interface NavProps {
    id: string;
    label: string;
}
export interface WorkProps {
    name: string;
    tagline: string;
    description: string;
    link: string;
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
    skills: { name: string; icon: IconType }[];
}
export interface SocilasProps {
    name: string;
    link: string;
    icon: JSX.Element;
}
