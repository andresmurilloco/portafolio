import { Metadata } from 'next'
import Image from 'next/image'

import imageMe from '../public/assets/img/me.png'
import { Project } from './components'

export const metadata: Metadata = {
  title: 'Portafolio - Home',
  description: 'Portafolio front-den dev Andrés Murillo',
}

export default function Home() {
  return (
    <main>
      <div id='about' className='about-container'>
        <div className='profile-picture-background'></div>
        <Image src={imageMe} alt='Profile picture Andrés' className='profile-image'/>
        <div className='about-text'>
        <h1>About me</h1>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates numquam possimus est libero ullam culpa labore similique suscipit odit iste quo adipisci, eum aperiam in dolores dolor fugiat quisquam debitis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum beatae corrupti iste, excepturi doloribus facilis. Eius sapiente, tempora vero expedita neque voluptate atque! Consectetur magnam quam at excepturi delectus earum.</p>
        </div>
      </div>
      <div id='projects'>
        <Project/>
      </div>
      <div id='skills'>
      </div>
      <div id='education'>
      </div>
      <div id='contact'>
      </div>
    </main>
  )
}
