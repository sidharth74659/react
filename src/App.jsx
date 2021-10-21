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
function Task({ title, completed }) {
    console.log(title, completed);
    
    return (
        <>
        <label>
            <input type={"checkbox"} name="task" checked={completed}/>
                {title}
            </label>
            <br />
        </>
    )
}

// Dynamic Component Data   (Probably from an API)
const tasks = [
  {
    "id": 1,
    "title": "delectus aut autem",
    "completed": false
  },
  {
    "id": 2,
    "title": "quis ut nam facilis et officia qui",
    "completed": false
  },
  {
    "id": 3,
    "title": "fugiat veniam minus",
    "completed": false
  },
  {
    "id": 4,
    "title": "et porro tempora",
    "completed": true
  },
  {
    "id": 5,
    "title": "laboriosam mollitia et enim quasi adipisci quia provident illum",
    "completed": false
  }
]

function renderTasks({title, completed, id}) {
    return <Task key={id} title={title} completed={completed}/>
}

function App() {
    return (
        <div>
        {/* Static Content (Hard-coded)
        
        <Food name="Youtube" emoji="😁" />
        <Food name="TikTok" emoji="😥" />
        <Food name="Documentory" emoji="🤠" />
        <Food name="Movie" emoji="📽️" /> */}

        {/* {tasks.map(task => <Task title={task.title} completed = {task.completed} />)} */}
        {/* Better/ Clean Way 👇*/}

        {tasks.map(renderTasks)}
            
        </div>
    )
}

export default App