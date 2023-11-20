
import Home from "./pages/Home"
import './App.css'
import StoreContext from "./hooks/storeContext"
import { useState } from "react";

function App() {
 

const [products , setProducts] =useState([]);
function handleFilterProducts  (id){
console.log(id)
}

  return (
    <>
     {/* <BrowserRouter>
   <Routes>
    <Route path='/' element={<Layout/>}>
      <Route index element={<Home/>}/>
      <Route path='about' element={<About/>}/>
      <Route path='contact' element={<Contact/>}/>
    </Route>
   </Routes>
   </BrowserRouter> */}
   <StoreContext.Provider value={{
    products,
    setProducts,
    handleFilterProducts
  }}>
   <Home/>
   </StoreContext.Provider>
    </>
  )
}

export default App
