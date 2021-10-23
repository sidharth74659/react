// @ts-nocheck
import { useState } from 'react';

export default function Counter() {
    const [counter, setCounter] = useState(0)

    function decrement() {
        // You can change using by passing a variable/ value or
        setCounter(counter - 1)
    }
    function increment() {
        // you can use functional approach (when the newValue is dependent on the oldValue)
        setCounter(oldValue => setCounter(oldValue + 1))
    }
    
    return (
        <div>
            <p>counter: {counter}</p>
            <button onClick={decrement}>Decrement</button>
            <button onClick={increment}>Increment</button>
        </div>
    )
}