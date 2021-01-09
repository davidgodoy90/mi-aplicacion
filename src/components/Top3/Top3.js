import React, { Fragment } from 'react'
import { Card, Spinner } from 'react-bootstrap'
import { Link } from 'react-router-dom'


export default function Categorie({producto,loading}) {
    
    return (
        <div>
            <h2>THE MONTH´S TOP 3</h2>
            <div>
                {   loading ? 
                    <Spinner animation="border" variant="warning" />
                    :
                    producto && producto.map((item)=>
                        <Card key={item.id}>
                            <Link to={`/item/${item.id}`}>
                                <Card.Img variant="top" src={item.thumbnail} />
                            </Link>
                                <Card.Body>
                                    <Link to={`/item/${item.id}`}>
                                        <Card.Title>{item.parte}</Card.Title>
                                        <Card.Title>{item.nombre}</Card.Title>
                                        <Card.Title>${item.price}</Card.Title>
                                    </Link>
                                </Card.Body>
                        </Card>
                    )
                }
            </div>
        </div>
        )
}