import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [task, setTask] = useState(["hello", "aditya"]);// for arrays
  const [user, setUser] = useState({ name: "Aditya", age: 21 }); // for object

  const handleTask = () => {
    const newTask = "Go for a walk";
    setTask([...task, newTask]);
  }

  const changeName = () => {
    setUser({ ...user, name: "Harsh" }); // Update only the name
  };
  return (
    <>

{/* // simple set values      */}
      <div className="card">
        <button onClick={() => setCount(count + 1)}>count is {count}</button>
      </div>

{/* // Now when we want to update the arrays   */}
<div>
      <h3>Tasks:</h3>
      <ul>
        {task.map((task, index) => (
          <li key={index}>{task}</li>
        ))}
      </ul>
      <button onClick={handleTask}>Add Task</button>
    </div>

{/* // Now when we want to update the object  */}

<div>
      <h3>User Profile:</h3>
      <p>Name: {user.name}</p>
      <p>Age: {user.age}</p>
      <button onClick={changeName}>Change Name</button>
    </div>


    </>
  );
}

export default App;


