//Updating objects with state

import { useState } from "react";

function MyComponent() {

    const [ cars, setCars ] = useState([])
    const [ carYear, setCarYear] = useState(new Date().getFullYear())
    const [ carMake, setCarMake] = useState()
    const [ carModel, setCarModel] = useState()

function handleAddCar() {
    const newCar = {year: carYear, make: carMake, model: carModel}

    setCars(prevCars => {[...prevCars, newCar]})
}

function handleRemoveCar(index) {

}

function handleYearChange(event) {
    setCarYear(event.target.value)
}

function handleMakeChange(event) {
    setCarMake(event.target.value)
}

function handleModelChange(event) {
    setCarModel(event.target.value)
}

    return (
        <div>
            <h2>List of car objects</h2>
            <ul>
                {cars.map((car, index) => 
                <li key={index}>
                    {car.Year} {car.Make} {car.Model}
                </li>)}
            </ul>

            <input type="number" value={carYear} onChange={handleYearChange} /> <br />
            <input type="text" value={carMake} onChange={handleMakeChange} placeholder="Enter car make"/> <br />
            <input type="text" value={carModel} onChange={handleModelChange} placeholder="Enter car model"/><br />

            <button onClick={handleAddCar}>Add Car</button>
        </div>
    )

}

export default MyComponent

// function MyComponent() {

//     const [car, setCar] = useState({Year: 2016, Make: "Renault", Model: "Clio RS 16"})

//     function handleYearChange(event) {
//         setCar(prevCar => ({...prevCar, Year: event.target.value}))
//     }

//     function handleMakeChange(event) {
//         setCar(prevCar => ({...prevCar, Make: event.target.value}))
//     }

//     function handleModelChange(event) {
//         setCar(prevCar => ({...prevCar, Model: event.target.value}))
//     }

//     return(
//         <div>
//             <p>Your favourite car is: {car.Year}, {car.Make}, {car.Model}.</p>

//             <div className="inputs">
//                 <input type="number" value={car.Year} onChange={handleYearChange}/><br/>
//                 <input type="text" value={car.Make} onChange={handleMakeChange}/><br/>
//                 <input type="text" value={car.Model} onChange={handleModelChange}/><br/>
//             </div>
//         </div>
//     )
// }

// export default MyComponent