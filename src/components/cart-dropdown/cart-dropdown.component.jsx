import Button from 'components/button/button.component'
import './cart-dropdown.styles.scss'

import React from 'react'

const CartDropdown = () => (
	<div className='cart-dropdown-container'>
		<div className='cart-items'>
			<Button>GO TO CHECKOUT</Button>
		</div>
	</div>
)

export default CartDropdown
