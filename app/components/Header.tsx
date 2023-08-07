import Image from 'next/image'
import React from 'react'
import logo from '../../public/assets/img/logo.png'
import Link from 'next/link'

const Header = () => {
  /** 
   * TODO
   * -Add router to assign active styles to links.
   *  */  

  return (
    <main>
      <div className='header-container'>
        <div className='logo-container'>
          <Image src={logo} alt='Page logo' width={100} />
          <div className='logo-title'>
            <h1>Andrés Murillo Cortázar</h1>
            <h3>Front-end developer</h3>
          </div>
        </div>
        <div className='navegation'>
          <nav>
            <Link href={'#about'} >About me</Link>
            <Link href={'#skills'}>Skills</Link>
            <Link href={'#projects'}>My projects</Link>
            <Link href={'#education'}>Education</Link>
            <Link href={'#contact'}>Contact me</Link>
          </nav>
        </div>
      </div>
    </main>
  )
}

export default Header