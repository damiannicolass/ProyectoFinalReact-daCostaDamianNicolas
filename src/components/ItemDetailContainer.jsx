import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail';
import { doc, getDoc } from "firebase/firestore"
import { db } from "../firebase/firebase"

const ItemDetailContainer = () => {
    const { productId } = useParams();
    const [item, setItem] = useState(null);

    useEffect(() => {

        const docRef = doc(db, "productos", productId);
        getDoc(docRef)
            .then((resp) => {
                setItem(
                    { ...resp.data(), id: resp.id }
                );
            })

    }, [productId]);

    return (
        <div>
            <ItemDetail item={item} />
        </div>
    )
}

export default ItemDetailContainer;
