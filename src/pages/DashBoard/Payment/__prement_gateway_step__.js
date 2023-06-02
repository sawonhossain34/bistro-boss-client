/**
 * 1 . install stripe and react stripe.js
 * 2 . create a cheackOut form with card element(card element contains:card number,expiration date,cvs,zip code)
 * 3 . Create account on stripe and get the publishable key pk.
 * 4 . get card information
 * 5 . create a payment method
 * 6 . use test card and to test payment 
 * 7 . no the server side: install stripe:
 * npm install --save stripe
 * 8 . create a payment intent api with payment types:['card']
 * make sure you provide amount in cents (multiply price with 100)
 * 9 . call payment intent api to get client secret and store it in a state.
 * 10 . use confirmCardPayment api with client secret card info.
 * 
 */