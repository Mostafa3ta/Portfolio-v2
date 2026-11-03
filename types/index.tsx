import type { IconType } from "react-icons";

export interface NavProps {
    id: string;
    label: string;
}
export interface ProjectProps {
    name: string;
    link: string;
    description: string;
    img: string;
    techs: string[];
    isProduction?: boolean;
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
