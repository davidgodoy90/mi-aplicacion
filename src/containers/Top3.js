import React, { useState, useEffect } from 'react'
import { getFirestore } from '../firebase';
import Top3 from '../components/Top3/Top3'

export default function Top3Container() {

    const [items, setItems] = useState([])
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
        const db = getFirestore();
        let items = db.collection('producto');
        let query = items.where('price', '>', 3000);
        query.get()
            .then((querySnapshot) => {
                if (querySnapshot.size === 0) {
                    console.log('No data!');
                }
                const queryItems = querySnapshot.docs.map(doc => {
                    return ({ id: doc.id, ...doc.data()});
                })
                setItems(queryItems);
            })
        setLoading(false);
    }, []);

    return (
        <Top3 items={items} loading={loading}/>
    )
}