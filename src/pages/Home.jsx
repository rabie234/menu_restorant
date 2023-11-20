import React from 'react'
import SwiperHome from '../components/home/swiper'
import CategoriesSection from '../components/home/categoriesSection'
import MenuContent from '../components/home/menuContent'
import Header from '../components/header/Header'

const Home = () => {
  return (
    <div>
      <Header/>
      <SwiperHome/>
      <CategoriesSection/>
      <MenuContent/>
    </div>
  )
}

export default Home
