import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";  
import ItemList from "./ItemList";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../firebase/firebase";

const ItemListContainer = () => {
    const { categoria } = useParams(); 
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const productosRef = collection(db, "productos");


        const q = categoria ? query(productosRef, where("category", "==", categoria)) : productosRef;

        getDocs(q)
            .then((resp) => {
                setProducts(
                    resp.docs.map((doc) => ({
                        ...doc.data(),
                        id: doc.id
                    }))
                );
            });

    }, [categoria]);

    return (
        <>
            <ItemList products={products} />
        </>
    );
}

export default ItemListContainer;
