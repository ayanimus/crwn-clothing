import {createContext, useState, useEffect} from 'react'

const addCartItem = (cartItems, productToCard) => {
	const existingProduct = cartItems.find(cartItem => cartItem.id === productToCard.id)

	if (existingProduct) {
		return cartItems.map(cartItem =>
			cartItem.id === productToCard.id
				?{...cartItem, quantity: cartItem.quantity + 1}
				:cartItems
		)
	}
	return [...cartItems, {...productToCard, quantity: 1}]
}


export const CartContext = createContext({
	isCartOpen: false,
	setIsCartOpen: () => {},
	cartItems: [],
	addItemToCart: () => {},
	cartCount: 0,
	setCartCount: () => {},
})


export const CartProvider = ({children}) => {
	const [isCartOpen, setIsCartOpen] = useState(false)
	const [cartItems, setCartItems] = useState([])
	const [cartCount, setCartCount] = useState(0)
	const addItemToCart = productToCard => {
		setCartItems(addCartItem(cartItems, productToCard))
	}
	useEffect(() => {
		const newCartCount = cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0)
		setCartCount(newCartCount)
	}, [cartItems])
	const value = {isCartOpen, setIsCartOpen, addItemToCart, cartItems, cartCount}

	return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}
