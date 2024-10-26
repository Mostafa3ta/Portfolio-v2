export interface NavProps {
    name: string;
    link: string;
}
export interface ProjectProps {
    name: string;
    link: string;
    description: string;
    img: string;
    techs: string[];
}
export interface ExperienceProps {
    title: string;
    company: string;
    from: string;
    to: string;
    link: string;
    description: string;
    city: string;
    techs: string[];
}
export interface SocilasProps {
    name: string;
    link: string;
    icon: JSX.Element;
}