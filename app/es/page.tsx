//Libraries and utilities
import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

//Components
import Projects from './components/Projects'
import LayoutEs from './components/layout'

//Images
import imageMe from '../../public/assets/img/me.png'
import lilogo from '../../public/assets/img/li.webp'
import gmail from '../../public/assets/img/gmail.png'
import wa from '../../public/assets/img/wa.png'
import rocket from '../../public/assets/img/rocket.png'
import edu from '../../public/assets/img/edu.png'
import about from '../../public/assets/img/about.png'
import project from '../../public/assets/img/project.png'
import icesi from '../../public/assets/img/icesi.png'
import devtalles from '../../public/assets/img/devtalles.jpg'
import udemy from '../../public/assets/img/udemy.png'
import platzi from '../../public/assets/img/platzi.webp'
import { useEffect } from 'react'


//Functions
export const metadata: Metadata = {
  title: 'Portafolio',
  description: 'Portafolio de Andrés Murillo',
}

const HomeEs = () => {

  return (
    <LayoutEs>
      <div id='about' className='about-container'>
        <div className='profile'>
          <div className='profile-picture-background'></div>
          <Image src={imageMe} alt='Profile picture Andrés' className='profile-image' />
        </div>
        <div className='about-text'>
          <h1>Sobre mí <Image src={about} width={30} height={30} alt='Education logo'></Image></h1>
          <p>Como programador junior front-end, estoy ansioso por demostrar mi potencial y pasión por el desarrollo web. Actualmente estoy haciendo un curso de NodeJS tras haber acabado un curso enfocado en ReactJS y del que conseguí todo lo necesario para ser un front-end.
          </p>
          <p>
            Mi anterior experiencia laboral como un agente de servicio al cliente y como profesor de inglés me han ayudado a mejorar mi comunicación, multitarea y habilidades de solución de problemas, así como mi manejo del inglés y español. Soy disciplinado, responsable, organizado y una persona motivada, alguien que valora la honestidad y el trabajo en equipo. Estoy dispuesto a reubicarme si es necesario y siempre estoy buscando oportunidades para mejorar mis habilidades y conocimientos. Estoy listo para contribuir a sus objetivos y proyectos con entusiasmo y dedicación.
          </p>
        </div>
      </div>
      <div id='projects' className='projects'>
        <h1>Proyectos <Image src={project} width={30} height={30} alt='Education logo'></Image></h1>
        <main className='projects-container'>
          <Projects />
        </main>
      </div>
      <div id='education' className='container-education'>
        <div>
          <h1>Educación <Image src={edu} width={30} height={30} alt='Education logo'></Image></h1>
        </div>
        <div className='education-bar'>
          <div>
            <h2><Image src={icesi} width={20} height={20} alt='Education logo'></Image> Universidad Icesi (2014-2017) </h2>
            <h4>Ingeniería de sistemas, 4to semestre</h4>
          </div>
          <div>
            <h2><Image src={udemy} width={35} height={20} alt='Education logo'></Image>Udemy </h2>
            <h4>- React - La Guía Completa: Hooks Context Redux MERN +15 Apps</h4>
            <h4>- Next.js: El framework de React para producción</h4>
          </div>
          <div>
            <h2><Image src={devtalles} width={20} height={20} alt='Education logo'></Image> DevTalles</h2>
            <h4>- Curso de manejo de estado en React</h4>
            <h4>- React Query - Un poderoso gestor de estado asíncrono.</h4>
          </div>
          <div>
            <h2><Image src={platzi} width={20} height={20} alt='Education logo'></Image> Platzi</h2>
            <h4>- Curso de programación basica</h4>
          </div>
        </div>
      </div>
      <div id='contact' className='contact-container'>
        <div className='social-btns-container'>
          <Link className='social-link li-btn' href={'https://www.linkedin.com/in/devandres25/'}>
            <Image width={30} height={30} src={lilogo} alt={'linkedin button'} />
            <h2>LinkedIn</h2>
          </Link>
          <Link className='social-link wa-btn' href={'https://wa.me/573176755861'}>
            <Image width={30} height={30} src={wa} alt={'whatsapp button'} />
            <h2>Whatsapp</h2>
          </Link>
          <Link className='social-link gmail-btn' href={'mailto:dev.andresmurillo@gmail.com'}>
            <Image width={30} height={25} src={gmail} alt={'gmail button'} />
            <h2>E-mail</h2>
          </Link>
        </div>
        <h1>Contactame! <Image src={rocket} width={25} height={25} alt='rocket'></Image></h1>
      </div>
    </LayoutEs>
  )
}

export default HomeEs