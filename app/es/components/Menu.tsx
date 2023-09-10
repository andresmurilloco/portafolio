"use client"
import Link from 'next/link'
import React, { useState } from 'react'
import ModalMenu from './ModalMenu'
import './css/menu.css'
import menuIcon from '../../../public/assets/img/menuIcon.png'
import spanish from '../../../public/assets/img/spanish.png'
import Image from 'next/image'

const Menu = () => {
  const [modal, setmodal] = useState(false);
  const modalHandler = () => {
    setmodal(!modal);
  }
  return (
    <>
      <Link href={'../../en'}>
        <div className='language-button es'>
          <Image src={spanish} width={40} height={40} alt='spanish' />
        </div>
      </Link>
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
      {modal ? <ModalMenu modalHandler={modalHandler} /> : ''}
    </>
  )
}

export default Menu