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
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates numquam possimus est libero ullam culpa labore similique suscipit odit iste quo adipisci, eum aperiam in dolores dolor fugiat quisquam debitis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum beatae corrupti iste, excepturi doloribus facilis. Eius sapiente, tempora vero expedita neque voluptate atque! Consectetur magnam quam at excepturi delectus earum.</p>
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
