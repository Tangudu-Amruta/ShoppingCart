import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Shop from './components/Shop'
import './App.css'
import Cart from './components/Cart'
const App = () => {
  const [cart,setCart] = useState([])
  const [warning,setWarning] = useState('');
  const [show,setShow] = useState(true)
  function handleClick(item){
    let isPresnt = false;
      cart.forEach((product)=>{
        if(item.id === product.id){
          isPresnt=true
        }
      })
      if(isPresnt){
          setWarning(true);
          setTimeout(() => {
            setWarning(false)
          }, 2000);
          return
      }
    setCart([...cart,item])
  }
  return (
    <div>
      <Navbar size={cart.length} setShow={setShow}/>
      {
        show ? <Shop handleClick={handleClick}/> : <Cart cart={cart} setCart={setCart}/>
      }
      {warning && <div className='warning'>
          item is already present in your cart
        </div>}
    </div>
  )
}

export default App
