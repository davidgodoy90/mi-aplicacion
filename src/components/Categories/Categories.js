import React from 'react'
import { Card } from 'react-bootstrap'


export default function Categories({list}) {

    return (
        <div>
        {
            list && list.categories && list.categories.map((cat, idx)=>(
                <Card style={{ width: '18rem', textAlign: 'center' }} key={idx}>
                    <Card.Body>
                        <Card.Title style={{ textTransform: 'uppercase' }}>{cat.name}</Card.Title>
                        <Card.Link href={`/categories/${cat.id}`}>
                            <Card.Img variant="top" src={cat.image} />
                        </Card.Link>
                        <Card.Text>{cat.parte}</Card.Text>
                        <Card.Text>{cat.price}</Card.Text>
                        <Card.Link href={`/categories/${cat.id}`}> {cat.marca}</Card.Link>
                    </Card.Body>
                </Card>
            ))
        }
        </div>
    )
}