import React from 'react';
import './App.css';
import Header from './MyComponents/Header';
import { Todos } from './MyComponents/Todos';
import { Footer } from './MyComponents/Footer';


function App() {
  let todos=[
    {
      sno: 1,
      title: "Go to the market",
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
  ]

  return (
    <div className="App">
      <Header title="My Todos List" searchBar={true}></Header>
      <Todos todos={todos}></Todos>
      <Footer></Footer>
    </div>
  )
}

export default App;
