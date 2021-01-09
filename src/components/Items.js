import React from 'react';
import { Card, Spinner } from 'react-bootstrap';
import { Link } from 'react-router-dom';

 const Items = ({objetos})=>{

    console.log("aca",objetos)

    return (
        <div>

        { objetos && objetos.length ?  

                objetos.map((item)=> 
                
                <Card key={item.id} style={{width: '18rem', margin: '10px', color: 'black'}}>
                    
                        <Link to={`/item/${item.id}`}>
                        
                    </Link>
                    <Card.Body>
                   
                        <Link to={`/item/${item.id}`}>
                            <Card.Title>Nombre: {item.name}</Card.Title>
                            <Card.Title>Precio: ${item.price}</Card.Title>
                            <Card.Title>Descripcion: {item.description}</Card.Title>
                            <Card.Title>Stock: {item.stock}</Card.Title>
                            <Card.Title>Categoria: {item.categoryId}</Card.Title>
                        </Link>
                     
                    </Card.Body>
                        </Card>
                )
                :
                        
                        <Spinner animation="border" variant="warning" />
         
       }  
           
        </div>
        
        )

}

export default Items;

