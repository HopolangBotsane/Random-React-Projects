import React, {use, useState} from "react"

function MyComponent() {

    const [name, setName] = useState("Guest")
    const [age, setAge] = useState("0")

    const updateAge = () => {
        setAge("21")
    }

    const updateName = () => {
        setName("Patrick StarFish")
    }

    return (
        <div>
            <p>Name: {name}</p>
            <button onClick={updateName}>Set Name</button>
            <p>Age: {age}</p>
            <button onClick={updateAge}>Set Age</button>
        </div>
    )

}

export default MyComponent