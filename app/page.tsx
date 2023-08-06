import { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Portafolio - Home',
  description: 'Portafolio front-den dev Andrés Murillo',
}

export default function Home() {
  return (
    <h1>Home</h1>
  )
}
