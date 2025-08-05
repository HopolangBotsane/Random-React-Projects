import React, {use, useState} from "react"


function MyComponent() {

    const [name, setName] = useState("")
    const [comment, setComment] = useState("")

    function handleNameChange(event) {
        setName(event.target.value)
    }

    function handleCommentChange(event) {
        setComment(event.target.value)
    }

    return(
        <div>
            <input value={name} onChange={handleNameChange} type="text" />
            <p>Name: {name}</p>

            <p>Delivery Instructions</p>
            <textarea value={comment} onChange={handleCommentChange} placeholder="Leave additional Delivery Instructions"/>


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

export default MyComponent