import React, { useReducer } from "react";
import { Container } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import { TodoContext } from "./context/TodoContext";
import todoReducer from "./context/reducer";
import TodoForm from "./Components/TodoForm";
import Todos from "./Components/Todos";

const App = () => {
  const [todos, dispatch] = useReducer(todoReducer, []);
  return (
    <TodoContext.Provider value={{ todos, dispatch }}>
      <Container fluid>
        <img src = "https://learnyst.s3.amazonaws.com/assets/schools/2410/resources/images/logo_lco_t17sd.png" alt="lco-app-logo" width="50" height="50" />
        <h1>Todo App with Context API</h1>
        <TodoForm />
        <Todos />
        
      </Container>
    </TodoContext.Provider>
  );
};

export default App;
