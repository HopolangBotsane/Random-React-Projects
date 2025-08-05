import { useState } from "react";

function ProductPage() {

    const [quantity, setQuantity] = useState(1)

    function handleQuantity() {
        setQuantity(event.target.value)
    }

    return(
        <>
        <div className="setQuantity">
            <input className="quantity-input" type="number" value={quantity} onChange={handleQuantity}/>
            <p>Quantity: {quantity}</p>
        </div>
            
        </>
    )
}