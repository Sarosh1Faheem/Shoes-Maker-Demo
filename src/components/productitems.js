import React from 'react'
import { useParams } from 'react-router-dom';
import Shoes from './../shoes.json'

function ProductItems() {
    const { id } = useParams();
    const shoe = Shoes[id];

    if (!shoe)
        return <h2>Product Not Found!</h2>
    
    return (
        <div>
            <h1>This is Our Product</h1>
            <div className="link">
                <h4>{shoe.name}</h4>
                <img src={shoe.img} height={400} alt="shoe" />
            </div>
        </div>
    )
}

export default ProductItems;
