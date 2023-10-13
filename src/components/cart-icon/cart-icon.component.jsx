import {useDispatch, useSelector} from 'react-redux'
import {ShoppingIcon, CartIconContainer, ItemCount} from './cart-icon.styles.jsx'
import {selectCartCount, selectIsCartOpen} from 'store/cart/cart.selector.js'
import {setIsCartOpen} from 'store/cart/cart.action.js'


const CartIcon = () => {
	const dispatch = useDispatch()
	setIsCartOpen
	const cartCount = useSelector(selectCartCount)
	const isCartOpen = useSelector(selectIsCartOpen)
	const toggleIsCartOpen = () => dispatch(setIsCartOpen(!isCartOpen))
	return (
		<CartIconContainer onClick={toggleIsCartOpen}>
			<ShoppingIcon className='shopping-icon'/>
			<ItemCount className='item-count'>{cartCount}</ItemCount>
		</CartIconContainer>
	)
}

export default CartIcon
