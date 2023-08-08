//Libraries and utilities
import { Metadata } from 'next'
import Image from 'next/image'

//Components
import Projects from './components/Projects'

//Images
import imageMe from '../public/assets/img/me.png'
import Link from 'next/link'

//Functions
export const metadata: Metadata = {
  title: 'Portafolio - Home',
  description: 'Portafolio front-end dev Andrés Murillo',
}

export default function Home() {

  return (
    <main>
      <div id='about' className='about-container'>
        <div className='profile'>
          <div className='profile-picture-background'></div>
          <Image src={imageMe} alt='Profile picture Andrés' className='profile-image' />
        </div>
        <div className='about-text'>
          <h1>About me</h1>
          <p>I am a disciplined, responsible, organized, motivated, punctual person. I have been risen in a home with strong principles and values, honesty as the most important.
            I am a Front-End web developer focused on HTML5, JavaScript, React.js.<br/>
            I feel comfortable workign with some of the most famous frameworks like Next, Apolo and Remix.<br/>
            I also have some experience working with APIs and not only consuming them, but setting them up too using Strapi and my knowledge in SQL.
            <br/> I am eager to learn and get more experience as a developer and I am ready to fulfill all my functions, obligations and stablished guidelines. I am ready to be part in the accomplishment of your goals. I am always in motion to improve my skills and expand my knowledge.
          </p>
        </div>
      </div>
      <div id='projects'>
        <h1>Projects</h1>
        <main className='projects-container'>
          <Projects />
        </main>
      </div>
      <div id='education' className='container-education'>
        <div>
          <h1>Education</h1>
        </div>
        <div>
          <div>
            <h2>Icesi university (2014-2017)</h2>
            <h4>Systems engineering, 4th semester</h4>
          </div>
          <div>
            <h2>Udemy (2023)</h2>
            <h4>React - La Guía Completa: Hooks Context Redux MERN +15 Apps</h4>
            <h4>Next.js: El framework de React para producción</h4>
          </div>
          <div>
            <h2>DevTalls (2023)</h2>
            <h4>Curso de manejo de estado en React</h4>
            <h4>React Query - Un poderoso gestor de estado asíncrono.</h4>
          </div>
          <div>
            <h2>Platzi (2023)</h2>
            <h4>Curso de programación basica</h4>
          </div>
        </div>
      </div>
      <div id='contact' className='contact-container'>
        <div>
          <Link href={'https://www.linkedin.com/in/devandres25/'}>
            <h2>LinkedIn</h2>
          </Link>
          <Link href={'https://wa.me/573176755861'}>
            <h2>Whatsapp</h2>
          </Link>
          <Link href={'mailto:dev.andresmurillo@gmail.com'}>
            <h2>E-mail</h2>
          </Link>
        </div>
        <h1>Hire me!</h1>
      </div>
    </main>
  )
}
