import React, { useState } from 'react'

const HookCounter = () => {
    let initial = 0
    const [count, setCount] = useState(initial)

    const increaseCount = () => {
        setCount(count + 1)
    }
    const resetCount = () => {
        setCount(initial)
    }
    const decreaseCount = () => {
        setCount(count - 1)
    }

    const incrementFive = () => {
        for (let index = 0; index < 5; index++) {
            setCount((Prev) => (
                Prev + 1
            ))
        }
    }

    return (
        <div>
            <h3> {count}</h3>
            <button onClick={increaseCount}> increaseOne</button>
            <button onClick={decreaseCount}> decreaseOne</button>
            <button onClick={incrementFive}> incrementFive</button>
            <button onClick={resetCount}> Reset </button>
            
        </div>
    )
}
export default HookCounter;