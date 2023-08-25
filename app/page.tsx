//Libraries and utilities
import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

//Components
import Projects from './components/Projects'

//Images
import imageMe from '../public/assets/img/me.png'
import lilogo from '../public/assets/img/li.webp'
import gmail from '../public/assets/img/gmail.png'
import wa from '../public/assets/img/wa.png'
import rocket from '../public/assets/img/rocket.png'


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
          <p>As a full-stack junior developer, I am eager to demonstrate my potential and passion for web development. I am currently pursuing a front-end developer course at Udemy, where I am learning React.js, TypeScript, Astro, JavaScript, Next.JS, Strapi, and Remix. I have also completed a basic programming course at Platzi, where I gained a solid foundation in HTML, CSS, and Git. <br/>My previous work experience as a call center customer service representative and an English teacher has helped me improve my communication, multitasking, and problem-solving skills, as well as my proficiency in English and Spanish. I am a disciplined, responsible, organized, and motivated person, who values honesty and teamwork. I am willing and able to relocate abroad if necessary, and I am always looking for opportunities to enhance my skills and knowledge. I am ready to contribute to your goals and projects with enthusiasm and dedication.
          </p>
        </div>
      </div>
      <div id='projects' className='projects'>
        <h1>Projects</h1>
        <main className='projects-container'>
          <Projects />
        </main>
      </div>
      <div id='education' className='container-education'>
        <div>
          <h1>Education</h1>
        </div>
        <div className='education-bar'>
          <div>
            <h2>Icesi university (2014-2017)</h2>
            <h4>Systems engineering, 4th semester</h4>
          </div>
          <div>
            <h2>Udemy</h2>
            <h4>React - La Guía Completa: Hooks Context Redux MERN +15 Apps</h4>
            <h4>Next.js: El framework de React para producción</h4>
          </div>
          <div>
            <h2>DevTalls</h2>
            <h4>Curso de manejo de estado en React</h4>
            <h4>React Query - Un poderoso gestor de estado asíncrono.</h4>
          </div>
          <div>
            <h2>Platzi</h2>
            <h4>Curso de programación basica</h4>
          </div>
        </div>
      </div>
      <div id='contact' className='contact-container'>
        <div className='social-btns-container'>
          <Link className='social-link li-btn' href={'https://www.linkedin.com/in/devandres25/'}>
            <Image width={30} height={30} src={lilogo} alt={'linkedin button'}/>
            <h2>LinkedIn</h2>
          </Link>
          <Link className='social-link wa-btn' href={'https://wa.me/573176755861'}>
          <Image width={30} height={30} src={wa} alt={'whatsapp button'}/>
            <h2>Whatsapp</h2>
          </Link>
          <Link className='social-link gmail-btn' href={'mailto:dev.andresmurillo@gmail.com'}>
          <Image width={30} height={25} src={gmail} alt={'gmail button'}/>
            <h2>E-mail</h2>
          </Link>
        </div>
        <h1>Contact me! <Image src={rocket} width={25} height={25} alt='rocket'></Image></h1>
      </div>
    </main>
  )
}
