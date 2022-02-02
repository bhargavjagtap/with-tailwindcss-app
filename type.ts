import {IconType} from 'react-icons'
import { FunctionComponent } from "react";

export interface Service {
    Icon: IconType
    title: string,
    about: string,
}

export interface Skill {
    Icon: IconType
    name: string,
    level: string,
}

export interface IProject {
    name: string,
    description: string,
    image_path: string,
    deployed_url: string,
    github_url: string,
    category: Category[],
    key_tags: string[],
}

export type Category = "sanity" | "firebase" | "tailwind" | "nextjs" ;