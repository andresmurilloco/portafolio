import Link from 'next/link'
import React from 'react'

var pjson = require('../../package.json')


const Footer = () => (
  <main>
    <div className='footer-container'>
      <div className='navegation-full'>
        <nav>
          <Link href={'#about'} >About me</Link>
          <Link href={'#projects'}>My projects</Link>
          <Link href={'#education'}>Education</Link>
          <Link href={'#contact'}>Contact me</Link>
        </nav>
      </div>
      <div className='navegation-compact'>
        <nav>
          <Link href={'#about'} >About me</Link>
          <Link href={'#projects'}>My projects</Link>
          <Link href={'#education'}>Education</Link>
          <Link href={'#contact'}>Contact me</Link>
        </nav>
      </div>
      <div className='footer-text'>
        <p>Portafolio V {pjson.version}</p>
        <p>All rights reserved {new Date().getFullYear()}©</p>
      </div>
    </div>
  </main>
)

export default Footer