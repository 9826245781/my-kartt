import React from 'react';
import "./Checkout.css";
import CheckoutProduct from './CheckoutProduct';
import { useStateValue } from './StateProvider';
import Subtotal from './Subtotal';

function Checkout() {
    const [{ basket ,user}, dispatch] = useStateValue();

    return <div className='checkout'>
        <div className='checkout_left'>
            <img className='checkout_ad'
                src='https://images-eu.ssl-images-amazon.com/images/W/WEBP_402378-T1/images/G/31/img22/Events/Jupiter-22/Header/Common_Header_PC_Unrec.jpg'
                alt='' />
            <div>
                <h3>Hello,{ user?.email}</h3>
                <h2 className='checkout_title'>Your ShoppingBasket</h2>
                {basket.map(item => (
                    <CheckoutProduct
                        id={item.id}
                        title={item.title}
                        image={item.image}
                    price={item.price}
                    rating={item.rating}
                    />
                                  ))}
                { }
                {}
                {}
            </div>
        </div>
        <div className='checkout_right'>
<Subtotal/>
        </div>
    </div>;
}
export default Checkout;