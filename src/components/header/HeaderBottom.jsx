import React from 'react'
import { FaPhoneVolume } from "react-icons/fa6";
function HeaderBottom() {
  return (
    <div className='header-bottom container'>
      <div className="logo-container">
        <h4 className="logo">Logo.</h4>
      </div>
      <div className="icons">
        <div className="icon-container">
        <FaPhoneVolume/>
        </div>
      </div>
    </div>
  )
}

export default HeaderBottom
