import React from 'react';
import { Link } from 'react-router-dom';
import './navbarcss.css';
import '../../App.css'
import CartIcon from '../CartIcon/CartIcon';
import ItemList from '../ItemList';

 export  function NavBar ()  {

 return (

  <nav className="navbar navbar-dark bg-primary">
  <div className='barrastyle'>
  
    <ul className='listaStyle'>
    <Link to="/Upgrades"> 
    <li>Upgrades</li>
    </Link>
    <Link to="/Productos">
      <li>Productos</li>
      </Link>
    <Link to="/Links"> 
    <li>Ofertas</li>
    </Link>
    </ul>
   
  <CartIcon />
 </div>
</nav>

 )
}

