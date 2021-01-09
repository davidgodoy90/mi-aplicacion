import React, { useContext } from 'react';
import Skeleton from 'react-loading-skeleton';
import { Link } from 'react-router-dom';
import { Context } from '../../contex/CartContext';
import { Badge } from 'react-bootstrap';

const CartIcon = (props) => {

    const [cartItems] = useContext(Context) 

    return (
        <div>
            <div>
              <Link to='/cart'>
                
              </Link>
              <div>
        
            <Badge variant="secondary">
              {cartItems.length > 0 && cartItems.length}
            </Badge>
          </div>
        </div>
        <p>{props.greeting} {props.name || <Skeleton duration={1} width={100} circle={true}/>}</p>
      </div>
    
           )
    } 
    export default CartIcon;