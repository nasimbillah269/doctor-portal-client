import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
// import { useNavigation } from 'react-day-picker';
import { useLoaderData } from 'react-router-dom';
// import Loading from '../../Sheard/Loading/Loading';
import ChekOutForm from './ChekOutForm';

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK);


const Payment = () => {
    const booking = useLoaderData();
    // const navigation = useNavigation();
    const { treatment, price, slot, appointmentDate } = booking;

    // if (navigation.state === "loading") {
    //     return <Loading></Loading>
    // }

    return (
        <div>
            <h2 className='text-2xl'>Payment for {treatment}</h2>
            <p className='text-1xl'>Please pay <strong>${price} </strong> for your appointment on {appointmentDate} at {slot}</p>

            <div className='w-96 mx-12 mt-4'>
                <Elements stripe={stripePromise}>
                    <ChekOutForm
                        booking={booking}
                    ></ChekOutForm>
                </Elements>
            </div>
        </div>
    );
};

export default Payment;