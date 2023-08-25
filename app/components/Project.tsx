import Link from 'next/link';
import Image from 'next/image';

//Images
import java from '../../public/assets/img/js.png'
import astro from '../../public/assets/img/astro.png'
import ts from '../../public/assets/img/ts.png'
import tail from '../../public/assets/img/tail.png'
import vite from '../../public/assets/img/vite.png'
import css from '../../public/assets/img/css.png'
import react from '../../public/assets/img/react.png'
import strapi from '../../public/assets/img/strapi.png'
import remix from '../../public/assets/img/remix.png'
import next from '../../public/assets/img/next.png'
import post from '../../public/assets/img/postgresql.png'
import other from '../../public/assets/img/other.png'
import web from '../../public/assets/img/web.png'
import gitLogo from '../../public/assets/img/git.png'

export interface Props {
    project: {}
}

const Project = ({ project }: Props) => {
    const { git, description, image, endDate, initialDate, skills, url, name }: any = project;    

    const imageProperties = image.data[0].attributes.formats.thumbnail;

    return (
        <div className='container-solo-project'>
            <Link href={url} className='project-title'>
                <h2>{name}</h2>
                <Image src={imageProperties.url} width={imageProperties.width} height={imageProperties.height} alt={`Image from ${name}`} />
            </Link>
            <p>Started on: {initialDate} / {endDate ? `Ended on: ${endDate}` : 'To be ended'}</p>
            <div className='container-skills'>
                {skills.skills.map((skill: any) => (
                    <div key={skill}>
                        <Image src={skill === 'javascript' ? java : skill === 'typescript' ? ts : skill === 'next' ? next : skill === 'react' ? react : skill === 'css' ? css : skill === 'astro' ? astro : skill === 'tailwind' ? tail : skill === 'vite' ? vite : skill === 'remix' ? remix : skill === 'postgresql' ? post : skill === 'strapi' ? strapi : other} alt={'Logo skills'} width={30} height={30} />
                    </div>
                ))}
            </div>
            <p>{description}</p>
            <div className='project-links'>
                <Link href={url}>
                    <Image src={web} width={35} height={35} alt='web logo'/>
                    <p>Website</p>
                </Link>
                <Link href={git}>
                <Image src={gitLogo} width={35} height={35} alt='git logo'/>
                <p>GitHub</p>
                    </Link>
            </div>
        </div>

    )
}

export default Project