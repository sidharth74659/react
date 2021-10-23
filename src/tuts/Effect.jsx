// @ts-nocheck
import { useState, useEffect } from 'react';

export default function Effect() {
    const [counter, setCounter] = useState(0)

    // useEffect is an anonymous function that is called 
    // after the UI is mounted / re-rendered and
    // the dependency is changed

    useEffect(() => {
        console.count("welcome");
    }, [counter])
    // if   : the dependency is empty => the useEffect is called only on the first Render
    // else : the useEffect is called after the UI is rendered for the first time and  
    //    everytime the dependency(counter here) value is changed:
    // 1. the UI is rendered AND THEN
    // 2. useEffect is called

    return (
        <div>
            <p>counter: {counter}</p>
            <button onClick={() => setCounter(counter - 1)}>Decrement</button>
            <button onClick={() => setCounter(counter + 1)}>Increment</button>

        </div>
    )
}