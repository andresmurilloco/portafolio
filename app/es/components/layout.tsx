import React from 'react'
import { Footer, Header } from './'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Welcome/Bienvenido',
    description: 'Portafolio front-den dev Andrés Murillo',
}

const LayoutEs = ({ children }: any) => {
    return (
        <main>
            <Header />
            {children}
            <Footer />
        </main>
    )
}

export default LayoutEs