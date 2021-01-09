import React from 'react'
import { Link } from 'react-router-dom'
import { Table, Button } from 'react-bootstrap'

export default function Cart({cartItems, total, envio}) {
    
    return (
        <div>
            { cartItems && cartItems.length ?
                <div>
                    <Table responsive striped bordered hover size="sm">
                        <thead style={{ textAlign: 'center'}}>
                            <tr>
                                <th>#</th>
                                <th>Title</th>
                                <th>Price</th>
                                <th>Qty</th>
                                <th>Total</th>
                            </tr>
                        </thead>
                        <tbody>
                        {   
                            cartItems.map((item, idx)=>
                                <tr key={idx}>
                                    <td>{idx+1}</td>
                                    <td>{item.title}</td>
                                    <td style={{ textAlign: 'center'}}>{item.price}</td>
                                    <td style={{ textAlign: 'center'}}>{item.qty}</td>
                                    <td style={{ textAlign: 'center'}}>${item.price * item.qty}</td>
                                </tr>
                            )
                        }
                            <tr>
                                <td>*</td>
                                <td colSpan="3">Sent</td>
                                <td style={{ textAlign: 'center'}}>${envio}</td>
                            </tr>
                            <tr>
                                <td>*</td>
                                <td colSpan="3">Total</td>
                                <td style={{ textAlign: 'center'}}>${total+100}</td>
                            </tr>
                        </tbody>
                    </Table>
                </div>
            :
            <div>
                <h2>
                    No hay items aun
                </h2>
                <Link to={'/'} className='links'>
                    <Button variant='success'> Volver a Home</Button>
                </Link>
            </div>
            }
        </div>
    )
}