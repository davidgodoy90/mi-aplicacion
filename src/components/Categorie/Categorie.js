import React from 'react'
import { Card, Spinner } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function Categorie({items,loading}) {
    

    return (
        <div>
            {   loading ? 
                  <Spinner animation="border" variant="warning" />
                :
                  items && items.map((item)=>
                    <Card key={item.id}>
                        <Link to={`/categorie/${item.id}`}>
                            <Card.Img variant="top" src={item.thumbnail} />
                        </Link>
                            <Card.Body>
                                <Link to={`/categorie/${item.id}`}>
                                    <Card.Title>{item.categoryId}</Card.Title>
                                </Link>
                            </Card.Body>
                    </Card>
                )
             }
        </div>
    )
}