import React, {use, useState} from "react"


function Payment() {

    const [name, setName] = useState("")
    const [comment, setComment] = useState("")
    const [payment, setPayment] = useState("")
    const [shipping, setShipping] = useState("")

    function handleNameChange(event) {
        setName(event.target.value)
    }

    function handleCommentChange(event) {
        setComment(event.target.value)
    }
    
    function handlePaymentChange(event) {
        setPayment(event.target.value)
    }

    function handleShippingChange(event) {
        setShipping(event.target.value)
    }

    return(
        <div>
            <input value={name} onChange={handleNameChange} type="text" />
            <p>Name: {name}</p>

            <p>Delivery Instructions</p>
            <textarea value={comment} onChange={handleCommentChange} placeholder="Leave additional Delivery Instructions"/>

            <p>Payment Option</p>
            <select value={payment} onChange={handlePaymentChange}>
                <option value="">Select Payment</option>
                <option value="Visa">Visa</option>
                <option value="MasterCard">MasterCard</option>
            </select>

            <div className="div">
                <label>
                    <input type="radio" value="Pick Up" checked={shipping === "Pick Up"} onChange={handleShippingChange}/>
                    Pick Up
                </label><br/>

                <label>
                    <input type="radio" value="Delivery" checked={shipping === "Delivery"} onChange={handleShippingChange}/>
                    Delivery
                </label>

                <p>Delivery Method: {shipping}</p>
            </div>


        </div>
    )
}


// function MyComponent() {

//     const [name, setName] = useState("Guest")
//     const [age, setAge] = useState("0")

//     const updateAge = () => {
//         setAge("21")
//     }

//     const updateName = () => {
//         setName("Patrick StarFish")
//     }

//     return (
//         <div>
//             <p>Name: {name}</p>
//             <button onClick={updateName}>Set Name</button>
//             <p>Age: {age}</p>
//             <button onClick={updateAge}>Set Age</button>
//         </div>
//     )

// }

export default Payment