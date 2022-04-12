import React, {useState, useEffect} from 'react';
import './App.scss';
import {TodosList} from "./components/TodosList/TodosList";
import {Todo} from "./types/Todo";
import {TodoId} from "./components/TodoID/TodoID";
import {PhotosList} from "./components/PhotosList/PhotosList";
import {TodoForm} from "./components/TodoForm/TodoForm";
import { Routes, Route } from 'react-router-dom';
import {ButtonsForm} from "./components/ButtonsForm/ButtonsForm";
import {Navigation} from "./components/Navigation/Navigation";
import {HomePage} from "./components/HomePage/HomePage";

export const App = () => {
  const [todos, setTodos] = useState<Todo[]>(
    () => {
      const savedTodos = localStorage.getItem("todos");
      if (savedTodos) {
        return JSON.parse(savedTodos);
      } else {
        return [];
      }
    }
  );

  const [filterTodos, setFilterTodos] = useState<Todo[]>(todos);



  const todoDone = (todoId: number) => {
    const checkedTodo:Todo | undefined = todos.find(todo => todo.id === todoId);

    if (checkedTodo) {
      checkedTodo.statusTodo = !checkedTodo.statusTodo

      const newTodos = todos.filter(todo => todo.id !== checkedTodo?.id);

      if (checkedTodo.statusTodo) {
        const resultTodos = [...newTodos, checkedTodo]
        setTodos(resultTodos);
      } else {
        const resultTodos = [checkedTodo, ...newTodos]
        setTodos(resultTodos);
      }
    }
  }

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);


  const addTodo = (task: string) => {
    const newTodo: Todo = {
      id: todos.length + 1,
      task,
      statusTodo: false,
    }

    if(task.trim()) {
      setTodos((currentTodos) => [...currentTodos, newTodo])
    }
  }

  const deleteTodo = (todoId: number) => {
    setTodos((
      todos.filter(todo => todo.id !== todoId)
    ))
  }

  const updateTodo = (todoId: number, newTodoTask: string) => {
    const todoUpdateIndex = todos.findIndex(todo => todo.id === todoId);

    const newTodo: Todo = {
      ...todos[todoUpdateIndex],
      task: newTodoTask
      };

    const newTodos = [...todos];
    newTodos[todoUpdateIndex] = newTodo;

    setTodos(newTodos);
  }

  useEffect(() => {
    setFilterTodos(todos);
  }, [todos]);

  return (
    <div className="main__container">
     <Navigation />
        <Routes>
          <Route path="/" element={<HomePage />}/>
          <Route path="/photos" element={<PhotosList />}/>
          <Route path="/todos" element={
            <div className="todos__container">
              <TodoForm addTodo={addTodo} />
              <ButtonsForm setFilterTodos={setFilterTodos} todos={todos}/>
              <TodosList
                updateTodo={updateTodo}
                deleteTodo={deleteTodo}
                todos={filterTodos}
                todoDone={todoDone}
              />
            </div>
          }/>
          <Route path='/todos/:id' element={<TodoId />} />
        </Routes>

    </div>
  );

}

export default App;
