import Link from 'next/link'
import React from 'react'
import './css/footer.css'

var pjson = require('../../../package.json')


const Footer = () => (
  <main>
    <div className='footer-container'>
      <div className='navegation-full'>
        <nav>
          <Link href={'#about'} >Sobre mí</Link>
          <Link href={'#projects'}>Mis proyectos</Link>
          <Link href={'#education'}>Educación</Link>
          <Link href={'#contact'}>Contactame</Link>
        </nav>
      </div>
      <div className='footer-text'>
        <p>Portafolio V {pjson.version}</p>
        <p>Todos los derechos reservados {new Date().getFullYear()}©</p>
      </div>
    </div>
  </main>
)

export default Footer