import { useState } from 'react';

export default function State() {
    const [counter, setCounter] = useState(0)

    function decrement() {
        setCounter(counter - 1)
    }
    function increment() {
        setCounter(counter + 1)
    }
    
    return (
        <div>
            <p>counter: {counter}</p>
            <button onClick={decrement}>Decrement</button>
            <button onClick={increment}>Increment</button>
        </div>
    )
}