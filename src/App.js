import React, {useState} from 'react';
import HomeContainer from './containers/HomeContainer';
import CartContext from './contex/CartContext';
import {NavBar} from './components/navbardesafio3/NavBar';
import './App.css';
import './components/navbardesafio3/navbarcss.css';
import CategoryContainer from './containers/CategoryContainer';
import Top3Container from './containers/Top3.js';
import CatContainer from './containers/CatContainer';
import CartContainer from './containers/CartContainer';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import ItemDetailContainer from './components/desafio7/ItemDetailContainer';
import firebase from 'firebase/app';
import 'firebase/firestore';
import { getFirestore } from './firebase';



function App() {

  const [tipo, setTipo] = useState('classic')
  const [orderId, setOrderId] = useState('')
  const [loading, setLoading] = useState(true);

  const addOrder = () => {

     const db = getFirestore();

     const orders = db.collection('orders');
     const newOrder = {

      buyer: {

        name:"David Godoy",
        city:"Lanus",
        phone:"1155663322",
        address:"Roma 6000",
        email:"ejemplo@gmail.com",
        province:"Buenos Aires",
      },

      Items: [
        {
        id:"sdasdadsa",
        price:"10000",
        title:"Procesador",

      },

      ],
      total: 100000,
      date: firebase.firestore.Timestamp.fromDate(new Date()),
    };

    setLoading(true);

    orders.add(newOrder).then(({ id }) => {
      setOrderId(id);
  }).catch((error) => {
    console.log(error);
  }).finally(() => {
    setLoading(false)
  });
  };

  return (
    <div>
    <CartContext>
      <BrowserRouter>
      <NavBar type={tipo} setTipo={setTipo} />
      <Switch>
      <Route  path='/item/:id' component={ItemDetailContainer}/>
      <Route exact path='/categories/:id' component={CatContainer}/>
      <Route path='/categories' component={CategoryContainer}/>
      <Route  path='/cart' render = {() => <CartContainer/>}/>
      <Route path='/top3' component={Top3Container}/>
      <Route  path='/' render = {() => <HomeContainer greeting={"Bienvenido"}/>}/>  
     </Switch>
      </BrowserRouter>
      </CartContext>
      
      <button onClick={addOrder}>Agregar Producto</button>
      {orderId && <h2>{orderId}</h2>}

    </div>
   );
  
 
}

export default App;
