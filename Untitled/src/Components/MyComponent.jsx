//Updating objects with state

import { useState } from "react";

function MyComponent() {

    const [car, setCar] = useState({Year: 2016, Make: "Renault", Model: "Clio RS 16"})

    function handleYearChange(event) {
        setCar(prevCar => ({...prevCar, Year: event.target.value}))
    }

    function handleMakeChange(event) {
        setCar(prevCar => ({...prevCar, Make: event.target.value}))
    }

    function handleModelChange(event) {
        setCar(prevCar => ({...prevCar, Model: event.target.value}))
    }

    return(
        <div>
            <p>Your favourite car is: {car.Year}, {car.Make}, {car.Model}.</p>

            <div className="inputs">
                <input type="number" value={car.Year} onChange={handleYearChange}/><br/>
                <input type="text" value={car.Make} onChange={handleMakeChange}/><br/>
                <input type="text" value={car.Model} onChange={handleModelChange}/><br/>
            </div>
        </div>
    )
}

export default MyComponent