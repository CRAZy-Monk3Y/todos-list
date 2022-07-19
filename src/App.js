import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './MyComponents/Header';
import { Todos } from './MyComponents/Todos';
import { Footer } from './MyComponents/Footer';
import { AddTodo } from './MyComponents/AddTodo';


function App() {
  let initTodo;
  if (localStorage.getItem('todos') === null) {
    initTodo = [];
  }
  else {
    initTodo = JSON.parse(localStorage.getItem('todos'));
  }
  const onDelete = (todo) => {
    console.log("I am onDelete of todo: ", todo);

    setTodos(todos.filter((e) => {
      return e !== todo;
    }));
    localStorage.getItem("todos");
  }

  const addTodo = (title, desc) => {
    console.log("I am adding this Todo: ", title, desc);
    let sno;
    if (todos.length === 0) {
      sno = 1;
    }
    else {
      sno = todos[todos.length - 1].sno + 1;
    }
    const myTodo = {
      sno: sno,
      title: title,
      desc: desc
    };
    setTodos([...todos, myTodo]);
    console.log(myTodo);
  }

  let [todos, setTodos] = useState(initTodo);
  // {
  //   sno: 1,
  //   title: "Go to the Market",
  //   desc: "You need to go to the market to get this job done"
  // },
  // {
  //   sno: 2,
  //   title: "Go to the Mall",
  //   desc: "You need to go to the market to get this job done"
  // },
  // {
  //   sno: 3,
  //   title: "Go to the Job",
  //   desc: "You need to go to the market to get this job done"
  // }
  // ]);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos])
  return (
    <div className="App">
      <Header title="My Todos List" searchBar={true}></Header>
      <AddTodo addTodo={addTodo}></AddTodo>
      <Todos todos={todos} onDelete={onDelete}></Todos>
      <Footer></Footer>
    </div>
  )
}

export default App;
