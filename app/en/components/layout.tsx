import React from 'react'
import { Footer, Header } from './'

const LayoutEn = ({ children }: any) => {
    return (
        <main>
            <Header />
            {children}
            <Footer />
        </main>
    )
}

export default LayoutEn