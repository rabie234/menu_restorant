import React, { useContext, useEffect, useState } from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectCoverflow, Pagination , Navigation} from 'swiper/modules'
import './categoriesSlider.css'
import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/pagination'
import { useFetch } from '../../hooks/useFetch'
import StoreContext from '../../hooks/storeContext'







const CategoriesSection = () => {
  const [categories , setCategories]  = useState([]);
  const {data ,isLoading, error} =  useFetch("/categories");
  useEffect(()=>{
    setCategories(data)
  },[data])
  
 


  
  const {handleFilterProducts} = useContext(StoreContext);
  return (
    <div>
       <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        navigation={true}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          modifier: 1,
         
        }}
       
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="cateSwiper"
      >
           {isLoading?null: categories && categories.map((category=>{
            
        const {  name,image_url } = category;
            
        return(
   <SwiperSlide 
   onClick={()=>handleFilterProducts(category.id)}>
         
   <img src={image_url} />
   <h6>{name}</h6>
 </SwiperSlide>
        )
           }))}
       
    
      </Swiper>
    </div>
  )
}

export default CategoriesSection
