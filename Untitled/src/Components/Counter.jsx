import React, { useState } from 'react';

function Counter() {

    const [count, setCount] = useState(0)

    const increase = () => {
        setCount(prevCount => prevCount + 1)
    }

    const reduce = () => {
        setCount(prevCount => prevCount - 1)
    }

    const reset = () => {
        setCount(0)
    }

    return(
        <div>
            Count: {count}
            <div className="buttons">
                <button onClick={increase}>Increase</button>
                <button onClick={reduce}>Reduce</button>
                <button onClick={reset}>Reset</button>
            </div>
        </div>
    )
}

export default Counter