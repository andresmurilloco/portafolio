import React from 'react'
import Menu from './Menu'
import Title from './Title'
import './css/header.css'

const Header = () => {

  return (
    <main>
      <div className='header-container'>
        <Title/>
        <Menu/>
      </div>
    </main>
  )
}

export default Header