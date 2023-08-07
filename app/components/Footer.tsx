import Link from 'next/link'
import React from 'react'

const Footer = () => (
  <main>
    <div className='footer-container'>
      <div className='navegation'>
        <nav>
          <Link href={'#about'} >About me</Link>
          <Link href={'#projects'}>My projects</Link>
          <Link href={'#skills'}>Skills</Link>
          <Link href={'#education'}>Education</Link>
          <Link href={'#contact'}>Contact me</Link>
        </nav>
      </div>
      <div className='footer-text'>
        <p>All rights reserved {new Date().getFullYear()}©</p>
      </div>
    </div>
  </main>
)

export default Footer