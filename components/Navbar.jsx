import React from 'react'
import "@fortawesome/fontawesome-free/css/all.min.css"
import '../Style/NavBar.css'
const Navbar = ({size,setShow}) => {
  return (
    <nav>
        <div className='nav_box'>
            <span className='my_shop'>
                <h1>Shop</h1>
            </span>
            <div className='cart' onClick={()=>setShow(false)}>
                <span>
                    <i className='fas fa-cart-plus'></i>
                </span>
                <span>{size}</span>
            </div>
        </div>

    </nav>
  )
}

export default Navbar
