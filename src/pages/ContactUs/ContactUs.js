import React from 'react';
import bg from '../../assets/images/appointment.png'
import PrimaryButton from '../../components/PrimaryButton/PrimaryButton';
const ContactUs = () => {
    return (
        <div style={{ background: `url(${bg})`, backgroundSize: 'cover' }} className="mt-12" >
            <div className='lg:w-3/12 mx-auto p-10'>
                <h4 className='text-primary font-blod text-center'>Contact Us</h4>
                <h2 className='text-2xl  mb-4 text-white'>Stay connected with us</h2>
                <form>
                    <input type="text" placeholder="Enter Email Address" className="w-full my-3 input input-bordered" /><br />
                    <input type="text" placeholder="Subject" className=" w-full mb-8  input input-bordered " /><br />
                    <textarea className="textarea w-full mb-4 " placeholder="Your Message"></textarea>
                </form>
                <PrimaryButton>Submit</PrimaryButton>
            </div>
        </div>
    );
};

export default ContactUs;