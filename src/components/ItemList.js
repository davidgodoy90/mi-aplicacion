import React from 'react';

export default function ItemList() {

const products = [
{
    "name": "Motherboard",
    "description" :"E6010N ",
    "price": "$6000",
    "stock": 5,
},{
    "name": "Microprocesador",
    "description":"Ryzen 3 3200g",
    "price": "11000",
    "stock": "1",
},{
    "name": "Fuente",
    "description":"500w",
    "price": "800",
    "stock": 0,
},{
    "name": "Memorias",
    "description":"8Gb 2666 Ghz",
    "price": "3000",
    "stock": 8,
}];

console.log(products.map((product) => {

return  {
name: product.name,
description: product.description,
price: product.price
};

}))

return (

<div className="ItemList">

Productos:

<ul>
   {  
     products.map((product) => (
        <li key={product.stock}>
            {product.name}
        </li>
      
      ))
   }   

</ul>

</div>

);

}