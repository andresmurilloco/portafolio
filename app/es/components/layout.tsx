import React from 'react'
import { Footer, Header } from './'

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