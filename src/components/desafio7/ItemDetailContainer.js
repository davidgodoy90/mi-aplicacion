import React, { useEffect, useState, useContext } from 'react'
import { useParams } from 'react-router-dom'
import { Context } from '../../contex/CartContext';
import { getFirestore } from '../../firebase';
import ItemDetail from '../ItemDetail/itemDetail';
import { Modal, Button } from 'react-bootstrap';


const ItemDetailContainer = ()=> {
    const { id } = useParams();
    const [item, setItem] = useState();
    const [loading, setLoading] = useState(true);
    const [contador, setContador] = useState(0)
    const [cartProducto, setCartProducto] = useContext(Context) 
    const [modal, setModal] = useState(false);

    useEffect(() => {
        setLoading(true);
        const db = getFirestore();
        const itemCollection = db.collection('producto');
        const item = itemCollection.doc(id);
        item.get()
            .then((doc) => {
                if (!doc.exists) {
                    console.log('El doc no existe');
                    return true;
                }
                const dataQuery = doc.data();
                setItem({ id: doc.id, ...doc.data() });
            })
            .catch((error) =>{
                console.log('Ocurrio un error', error);
            })
            .finally(() => {
                setLoading(false);
            })
    }, [id]);

    const handleComprar = () => {
        let alreadyIn = false;
        cartProducto && cartProducto.map((itemIn)=>{
            if (itemIn.id === item.id) {
                alreadyIn =true
            }
        })
        if(!alreadyIn){
            let itemCompra = {
                qty: contador,
                ...item
            }
            setCartProducto(currentCart => [...currentCart, itemCompra])
        } else {
            setModal(true)
        }
    }

    return (
        <>{
            !modal ?
                <ItemDetail loading={loading} item={item} id={id} setContador={setContador} contador={contador} handleComprar={handleComprar}/>
            :
                <Modal show={modal} onHide={()=>setModal(false)}>
                    <Modal.Header closeButton>
                        <Modal.Title>Item already bought</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <p>Edit it in your Cart</p>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={()=>setModal(false)}>Close</Button>
                    </Modal.Footer>
                </Modal>
            }
        </>
     )
}
export default ItemDetailContainer;

