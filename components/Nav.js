import Link from 'next/link'
import { useContext } from 'react'
import { CartContext } from '../context/shopContext'
import Cart from './Cart'

export default function Nav() {

  const { cartOpen, setCartOpen, cart } = useContext(CartContext)
  
  let cartQuantity = 0
  cart.map((item) => {
    return (cartQuantity += item?.variantQuantity)
  })

  return (
    <header className="border-b sticky top-0 z-20 bg-white">
      <div className="flex items-center justify-between max-w-6xl pt-4 pb-2 px-4 mx-auto lg:max-w-screen-xl">
        <Link href="/" passHref>
          <div className="cursor-pointer">
            <span className="text-lg pt-1 font-bold">Shoppy Shop</span>
          </div>
        </Link>
        <div className="text-md font-bold cursor-pointer" onClick={() => setCartOpen(!cartOpen)}>
          Cart
        </div>
        <Cart cart={cart} />
      </div>
    </header>
  )
}