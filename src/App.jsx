/* using ES6/7 : ARrow functions

export default () => <h1>Hello from Component</h1>

//or 

const App = () => <h1>Hello from App Component</h1>
export default App;

*/

/*
function Food(props) {
    console.log(props)
    return (
        <h3>I am watching {props.name} {props.emoji}</h3>
    )
}
*/

// using ES6/7 : Destructuring
function Food({ name, emoji }) {
    return (
        <h3>I am watching {name} {emoji}</h3>
    )
}

function App() {
    return (
        <div>
            <Food name="Youtube" emoji="😁" />
            <Food name="TikTok" emoji="😥" />
            <Food name="Documentory" emoji="🤠" />
            <Food name="Movie" emoji="📽️" />
        </div>
    )
}

export default App