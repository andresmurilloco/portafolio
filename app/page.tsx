'use client'
//Libraries and utilities
import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect } from 'react'
import { redirect } from 'next/navigation'

//Images
import spanish from '../public/assets/img/spanish.png'
import english from '../public/assets/img/english.png'
import LayoutMain from './components/layout'

//Functions
export const metadata: Metadata = {
  title: 'Welcome - Bienvenido',
  description: 'Portafolio Andrés Murillo',
}

export default function Home() {
  useEffect(() => {
    const language = localStorage.getItem('language');
    if (language === 'es') {
      redirect('/es');
    } else if (language === 'en') {
      redirect('en');
    }
  }, [])
  return (
    <LayoutMain>
      <div className='language-main'>
        <Link href={'/es'} className='language-main-option es'>
          <Image src={spanish} width={150} height={150} alt='spanish' />
          <h1>Español</h1>
        </Link>
        <Link href={'/en'} className='language-main-option en'>
          <Image src={english} width={140} height={140} alt='english' />
          <h1>English</h1>
        </Link>
      </div>
    </LayoutMain>
  )
}