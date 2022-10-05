import React from 'react'
import Link from 'next/link'
import { AiOutlineShopping } from 'react-icons/ai'
import Cart from './Cart'

import { useStateContext } from '../context/StateContext'
const Navbar = () => {

  const { cartItems, showCart, setShowCart} = useStateContext()
  return (
    <div className="navbar-container">
      <p className="logo">
        <Link href="/">Headphones</Link>
      </p>
      <button className="cart-icon" type="button" onClick={() => setShowCart(!showCart)}>
        <AiOutlineShopping />
        <span className='cart-item-qty'>{cartItems.length}</span>
      </button>
      { showCart ? <Cart /> : ''} 
    </div>
  )
}

export default Navbar
