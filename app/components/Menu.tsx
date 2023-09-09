"use client"
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import ModalMenu from './ModalMenu'
import './css/menu.css'
import menuIcon from '../../public/assets/img/menuIcon.png'
import Image from 'next/image'

const Menu = () => {
  const [modal, setmodal] = useState(false);
  const modalHandler=()=>{
    setmodal(!modal);
  }

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
          <Image src={menuIcon} width={65} height={65} alt='menu' onClick={()=>modalHandler()}/>
        </div>
        {modal? <ModalMenu modalHandler={modalHandler}/>:''}
    </>
  )
}

export default Menu