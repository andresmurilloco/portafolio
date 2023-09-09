import React from 'react'
import logo from '../../public/assets/img/logo.png'
import Image from 'next/image'

const Title = () => {
  return (
    <div className='logo-container'>
          <Image src={logo} alt='Page logo' width={100} className='logo'/>
          <div className='logo-title'>
            <h1>Andrés Murillo Cortázar</h1>
            <h3>Front-end developer</h3>
          </div>
        </div>
  )
}

export default Title