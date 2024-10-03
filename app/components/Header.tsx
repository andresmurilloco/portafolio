import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import './css/header.css'
import Link from 'next/link'

import logo from '../../public/assets/img/logo.png'

const Header = () => {
  return (
    <main>
      <div className='header-container'>
        <Link href={'/'} className='link-title'>
          <div className='logo-container'>
            <Image src={logo} alt='Page logo' width={100} className='logo' />
            <div className='logo-title'>
              <h1>Andrés Murillo Cortázar</h1>
              <h3>Desarrollador Fullstack</h3>
            </div>
          </div>
        </Link>
      </div>
    </main>
  )
}

export default Header