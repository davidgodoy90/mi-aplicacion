import React, {useState, useEffect} from "react";
import { getFirestore } from '../firebase';
import Items from '../components/Items';

const ItemContainer = () => {

    
    const [itemsdb, setItemsdb] = useState([]);

    useEffect(() => {
      const db = getFirestore();
      const itemCollection = db.collection('producto');
      itemCollection.get()
        .then((querySnapshot) => {
          if (querySnapshot.size === 0) {
            console.log('No hay datos!');
          }
          setItemsdb(querySnapshot.docs.map(doc => {
            return ({ id: doc.id, ...doc.data() });
          }));
        })
        .catch((error) => {
          console.log("Ocurrio un error: ", error);
        })
    }, []);

    return (
          <Items objetos={itemsdb}/>
    )
} 

export default ItemContainer;