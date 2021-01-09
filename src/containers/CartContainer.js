import React, { useContext, useState, useEffect } from 'react';
import { Context } from '../contex/CartContext';
import Cart from '../components/Cart/Cart';

export default function CartContainer() {

    const [cartItems] = useContext(Context)  
    const [total, setTotal] = useState(0)
    const [envio] = useState(100)
    
    useEffect(()=>{
        cartItems && cartItems.map((item)=> setTotal((prevTotal) => (prevTotal +(item.price * item.qty)))
        )
    },[cartItems])

    return (
        <Cart cartItems={cartItems} total={total} envio={envio} />
    )
}







