"use client"
import Link from 'next/link'
import React, { useState } from 'react'
import ModalMenu from './ModalMenu'
import './css/menu.css'
import Image from 'next/image'
import menuIcon from '../../../public/assets/img/menuIcon.png'
import english from '../../../public/assets/img/english.png'

const Menu = () => {
  const [modal, setmodal] = useState(false);
  const modalHandler = () => {
    setmodal(!modal);
  }
  return (
    <>
      <Link href={'../../es'}>
        <div className='language-button en'>
          <Image src={english} width={40} height={40} alt='spanish' />
        </div>
      </Link>
      <div className='navegation-full'>
        <nav>
          <Link href={'#about'} >About me</Link>
          <Link href={'#projects'}>My Projects</Link>
          <Link href={'#education'}>Education</Link>
          <Link href={'#contact'}>Contact me</Link>
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