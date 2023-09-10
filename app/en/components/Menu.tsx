"use client"
import Link from 'next/link'
import React, { useState } from 'react'
import ModalMenu from './ModalMenu'
import './css/menu.css'
import menuIcon from '../../../public/assets/img/menuIcon.png'
import Image from 'next/image'

const Menu = ({ lang }: any) => {
  const [modal, setmodal] = useState(false);
  const modalHandler = () => {
    setmodal(!modal);
  }

  if (lang === 'es') {
    return (
      <>
        <div className='navegation-full'>
          <nav>
            <Link href={'#about'} >Sobre mi</Link>
            <Link href={'#projects'}>Mis proyectos</Link>
            <Link href={'#education'}>Educacion</Link>
            <Link href={'#contact'}>Contactame</Link>
          </nav>
        </div>
        <div className='modal-button'>
          <Image src={menuIcon} width={65} height={65} alt='menu' onClick={() => modalHandler()} />
        </div>
        {modal ? <ModalMenu modalHandler={modalHandler} lang={lang} /> : ''}
      </>
    )
  } else if (lang === 'en') {
    return (
      <>
        <div className='navegation-full'>
          <nav>
            <Link href={'#about'} >About me</Link>
            <Link href={'#projects'}>My projects</Link>
            <Link href={'#education'}>Education</Link>
            <Link href={'#contact'}>Contact me</Link>
          </nav>
        </div>
        <div className='modal-button'>
          <Image src={menuIcon} width={65} height={65} alt='menu' onClick={() => modalHandler()} />
        </div>
        {modal ? <ModalMenu modalHandler={modalHandler} lang={lang} /> : ''}
      </>
    )
  }
}

export default Menu