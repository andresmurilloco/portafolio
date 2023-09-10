'use client'
import React, { useEffect, useState } from 'react'
import Menu from './Menu'
import Image from 'next/image'
import './css/header.css'
import Link from 'next/link'

import logo from '../../../public/assets/img/logo.png'

const Header = () => {
  useEffect(() => {
    localStorage.setItem('language', 'en');
  }, [])
  return (
    <main>
      <div className='header-container'>
        <Link href={'/'} className='link-title'>
          <div className='logo-container'>
            <Image src={logo} alt='Page logo' width={100} className='logo' />
            <div className='logo-title'>
              <h1>Andrés Murillo Cortázar</h1>
              <h3>Front-end Developer</h3>
            </div>
          </div>
        </Link>
        <Menu />
      </div>
    </main>
  )
}

export default Header