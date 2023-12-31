import Link from 'next/link'
import React from 'react'
import './css/footer.css'

var pjson = require('../../package.json')


const Footer = () => (
  <main>
    <div className='footer-container'>
      <div className='footer-text'>
        <p>Portafolio V {pjson.version}</p>
        <p>All rights reserved {new Date().getFullYear()}©</p>
      </div>
    </div>
  </main>
)

export default Footer