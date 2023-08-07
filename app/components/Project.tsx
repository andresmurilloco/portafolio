
import React from 'react'
import Images from './Images';
import Link from 'next/link';
import { Skill } from '.';

export interface Props {
    project: {}
}

const Project = ({ project }: Props) => {
    const { git, description, image: images, endDate, initialDate, skills, url, name }:any = project;

    return (
        <div>
            <h2>{name}</h2>
            {images.data.map((image:any) => (
                <Images key={image.id} image={image}/>
            ))}
            <p>Started on: {initialDate} / {endDate === '' ? `Ended on: ${endDate}`:'To be ended'}</p>
            {skills.skills.map((skill:any) =>(
                <Skill key={skill} skill={skill}/>
            ))}
            <p>{description}</p>
            <Link href={url}>Link to {name}</Link>
            <Link href={git}>Git of {name}</Link>
        </div>
    )
}

export default Project