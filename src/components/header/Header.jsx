import React from 'react'
import HeaderTopStrip from './HeaderTopStrip'
import './header.css'
import HeaderBottom from './HeaderBottom'


const Header = () => {
  return (
    <div style={{display:"flex",flexDirection:"column"}}>
    <HeaderTopStrip/>
    <HeaderBottom/>
    </div>
  )
}

export default Header
