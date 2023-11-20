import React, { useContext, useEffect } from 'react'
import './home.css'
import { MutatingDots } from 'react-loader-spinner'
import { useFetch } from '../../hooks/useFetch';
import StoreContext from '../../hooks/storeContext';

const MenuContent = () => {
  
  const {products, setProducts} = useContext(StoreContext);
  
  const {data ,isLoading, error} =  useFetch("/items");
 
  
  useEffect(()=>{
    setProducts(data)
    console.log(data)
  },[data])

 

  if(isLoading){
  return (<div className='loader'><MutatingDots 
  height="100"
  width="100"
  color="#D3B586"
  secondaryColor= '#F3F6FB'
  radius='12.5'
  ariaLabel="mutating-dots-loading"
  wrapperStyle={{}}
  wrapperClass=""
  visible={true}
 /></div>)
}

 
  return (
    <div className='menu-container container'>
      <div className="title-category">
        <h2>drinks</h2>
      </div>
    
      <div className="list-products">
      {isLoading?null: products && products.map((item=>{
              
              
        const { id, name, image_url, description, price } = item;
        return(
          <div key={id} className="card-product">
          <div style={{backgroundImage:`url(${image_url})`,backgroundSize:'cover',backgroundPosition:'center',backgroundRepeat:'no-repeat'}} className="img-product">
            
          </div>
        
             <div className="details-product">
              <h5 className="title-product">{name}</h5>
             
               <h4 className='price'>{price}$</h4>
             </div>
        
          
      </div>
        )
 } ))}
      

      </div>
    </div>
  )
}

export default MenuContent
