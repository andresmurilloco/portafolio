import React from 'react'

export interface Props {
    project: {}
}

export interface Data {
    git: string;
    description: string;
    image: object;
    endDate: Date;
    initialDate: Date;
    skills: string[];
    url: string;
    name: string;
}

const Project = ({ project }: Props) => {
    const { git, description, image, endDate, initialDate, skills, url, name }: Data = project;

    return (
        <div>
            <h1>{name}</h1>
            <p>{description}</p>
            <p>{url}</p>
            <p>{git}</p>
        </div>
    )
}

export default Project