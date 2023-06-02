import { loadStripe } from "@stripe/stripe-js";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";


const Payment = () => {
    // TODO : provide published key
    const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_GATEWAY_PK);
    return (
        <div>
            <SectionTitle subHeading='Please Process' heading="Payment"></SectionTitle>
            <h3 className="text-3xl">o taka o taka tumi uira uira aco</h3>
            <Elements stripe={stripePromise}>
                <CheckoutForm></CheckoutForm>
            </Elements>
        </div>
    );
};

export default Payment;