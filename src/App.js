import React ,{useState} from 'react';
import './App.css';
import Header from './MyComponents/Header';
import { Todos } from './MyComponents/Todos';
import { Footer } from './MyComponents/Footer';


function App() {
  const onDelete = (todo) => {
    console.log("I am onDelete of todo: ",todo);

    setTodos(todos.filter((e) =>{
      return e!==todo;
    }));
  }

  let [todos, setTodos] = useState([
    {
      sno: 1,
      title: "Go to the Market",
      desc: "You need to go to the market to get this job done"
    },
    {
      sno: 2,
      title: "Go to the Mall",
      desc: "You need to go to the market to get this job done"
    },
    {
      sno: 3,
      title: "Go to the Job",
      desc: "You need to go to the market to get this job done"
    }
  ]);

  return (
    <div className="App">
      <Header title="My Todos List" searchBar={true}></Header>
      <Todos todos={todos} onDelete={onDelete}></Todos>
      <Footer></Footer>
    </div>
  )
}

export default App;
