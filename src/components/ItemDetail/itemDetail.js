import React from 'react'
import { Spinner, Card, Button, Carousel } from 'react-bootstrap'
import Contador from '../../containers/CountContainer'
import Items from '../Items';


export default function ItemDetail({item, loading, contador, setContador, handleComprar}) {

    return (
        loading ? 
            <Spinner animation="border" variant="warning" />
            :
            <div className='itemDetailCont'>
                <Card className="text-center" bg='secondary' text='white' style={{minHeight:'90vh'}}>
                <Card.Header>Detalles del Producto</Card.Header>
                <Card.Body>
               
                
                <Card.Title>Nombre: {item.id}</Card.Title>
                    <div className="contadorItem">
                        <Contador min={0} max={item.stock} contador={contador} setContador={setContador}>Agregar</Contador>
                    </div>
                    {
                        contador > 0 ? 
                            <Button variant="primary" onClick={handleComprar}>Comprar {contador}</Button>
                            :
                            <Button variant="primary" onClick={()=>setContador(contador+1)}>Quiero!</Button>
                    }
                </Card.Body>
                <Card.Footer className="text-white">{item.stock} en Stock!</Card.Footer>
                </Card>
            </div>
        )
}