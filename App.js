
import PropTypes from 'prop-types';
import './App.css';
import Header from "./MyComponents/Header"
import { Todos } from "./MyComponents/Todos"
import { AddTodo } from "./MyComponents/AddTodo"
import { About } from "./MyComponents/About";
import { Footer } from "./MyComponents/Footer"
import React, { useState, useEffect } from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
function App() {
  let initTodo;
  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  }
  else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }
  const onDelete = (todo) => {
    console.log("I AM ON-DELETE OF TODO ", todo);
    setTodos(todos.filter((e) => {
      return e !== todo;
    }));
    localStorage.getItem("todos", JSON.stringify(todos));

  }
  const addTodo = (title, desc) => {
    console.log("I am adding this Todo", title, desc);
    let srno;

    if (todos.length === 0) {
      srno = 0;
    }
    else {
      srno = todos[todos.length - 1].srno + 1;
    }
    const myTodo = {
      srno: srno,
      title: title,
      desc: desc,
    }
    setTodos([...todos, myTodo]);
    console.log(myTodo);
  }

  const [todos, setTodos] = useState(initTodo);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos])
  return (
    <>
      <Router>
        <Header title="My Todos List" searchBar={false} />
        <Switch>
          <Route exact path="/" render={() => {
            return (
              <>
                <AddTodo addTodo={addTodo} />
                <Todos todos={todos} onDelete={onDelete} />
              </>)
          }}>
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
Header.defaultProps = {
  title: " Write your title here ",
  searchbar: true
}
Header.propTypes = {
  title: PropTypes.string,
  searchbar: PropTypes.bool.isRequired
}