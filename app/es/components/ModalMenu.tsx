import Link from 'next/link'
import React from 'react'
import './css/modal.css'
import spanish from '../../../public/assets/img/spanish.png'
import english from '../../../public/assets/img/english.png'
import Image from 'next/image'

const ModalMenu = ({ modalHandler }: any) => {
  return (
    <div className='navegation-compact' onClick={() => modalHandler()}>
      <div className='modal-title'>
        <h1>Menu</h1>
      </div>
      <nav>
        <Link href={'#about'} >Sobre mí</Link>
        <Link href={'#projects'}>Mis Proyectos</Link>
        <Link href={'#education'}>Educación</Link>
        <Link href={'#contact'}>Contactame</Link>
        {/* <div className='modal-language'>
          <Image src={spanish} width={50} height={50} alt='español' />
          <Image src={english} width={45} height={45} alt='english' />
        </div> */}
      </nav>
    </div>
  )
}

export default ModalMenu