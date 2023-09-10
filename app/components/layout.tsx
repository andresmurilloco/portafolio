import React from 'react'
import { Footer, Header } from '.'

const LayoutMain = ({ children }: any) => {
    return (
        <main>
            <Header />
            {children}
            <Footer />
        </main>
    )
}

export default LayoutMain