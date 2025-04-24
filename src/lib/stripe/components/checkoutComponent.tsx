'use client'

import { useEffect, useState } from 'react'
import { loadStripe } from '@stripe/stripe-js'
import {
  Elements,
  EmbeddedCheckout,
  EmbeddedCheckoutProvider,
  PaymentElement,
  useElements,
  useStripe
} from '@stripe/react-stripe-js'
import { useCartStore } from '@/src/stores/cart.store'
import { fetchClientSecret } from '../stripe.checkout'

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!)

const appearance = {
  theme: 'stripe',
  variables: {
    fontFamily: 'sans-serif',
    fontSizeBase: '16px',
    borderRadius: '4px',
    colorBackground: '#f8f8f8',
    colorText: '#333333',
    colorPrimary: '#6772e5',
    colorDanger: '#fa755a',
    colorTextPlaceholder: '#666666',
    colorTextHeading: '#333333',
    colorTextLink: '#6772e5',
  },
}
export function CheckoutComponent() {
  const [clientSecret, setClientSecret] = useState<string | null>(null)
              const items = useCartStore.getState().items;


  useEffect(() => {
    fetchClientSecret(items).then(setClientSecret)
  }, [])

  if (!clientSecret) return <p>Chargement...</p>

  return (
    <div className="p-6">
      <EmbeddedCheckoutProvider
        stripe={stripePromise}
        options={{ 
          clientSecret,          
         }}
      >
        <EmbeddedCheckout/>
      </EmbeddedCheckoutProvider>
    </div>
  )
}

function PaymentForm() {
  const stripe = useStripe();
  const elements = useElements();


  const [message, setMessage] = useState<String>("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js hasn't yet loaded.
      // Make sure to disable form submission until Stripe.js has loaded.
      return;
    }

    setIsLoading(true);

    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        // Make sure to change this to your payment completion page
        return_url: "http://localhost:3000/success",
      },
    });

    // This point will only be reached if there is an immediate error when
    // confirming the payment. Otherwise, your customer will be redirected to
    // your `return_url`. For some payment methods like iDEAL, your customer will
    // be redirected to an intermediate site first to authorize the payment, then
    // redirected to the `return_url`.
    if (error.type === "card_error" || error.type === "validation_error") {
      setMessage(error.message!);
    } else {
      setMessage("An unexpected error occurred.");
    }

    setIsLoading(false);
  };

  return (
    <form id="payment-form" onSubmit={handleSubmit}>
      <PaymentElement id="payment-element" options={{layout: "accordion"}} />
      <button disabled={isLoading || !stripe || !elements} id="submit">
        <span id="button-text">
          {isLoading ? <div className="spinner" id="spinner"></div> : "Pay now"}
        </span>
      </button>
      {/* Show any error or success messages */}
      {message && <div id="payment-message">{message}</div>}
    </form>
  );
}

type CheckoutFormProps = {
  clientSecret: string
}

export default function CheckoutForm({ clientSecret }: CheckoutFormProps) {

  return (
    <Elements
      stripe={stripePromise}
      options={{
        appearance: {
          theme: 'stripe',
        },
        clientSecret,
      }}
    >
      <PaymentForm />
    </Elements>
  );
}