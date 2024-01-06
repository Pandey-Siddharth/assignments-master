import { useState, useEffect } from 'react';
// import reactLogo from './assets/react.svg';
// import viteLogo from './vite.svg'; // Update the path to vite.svg
import './App.css';
import { CreateTodo } from './components/CreateTodo';
import { Todos } from './components/Todos';

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3000/todos");
        const json = await response.json();
        setTodos(json.Todos);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []); // The empty dependency array ensures that this effect runs only once after the initial render.

  return (
    <div>
      <CreateTodo></CreateTodo>
      <Todos todos={todos} />
    </div>
  );
}

export default App;
