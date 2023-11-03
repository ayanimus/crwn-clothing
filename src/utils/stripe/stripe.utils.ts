import {loadStripe} from '@stripe/stripe-js'

const stripePublishableKey = process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY

if (!stripePublishableKey) {
	throw new Error('Stripe Publishable Key is not defined.')
}

export const stripePromise = loadStripe(stripePublishableKey)
