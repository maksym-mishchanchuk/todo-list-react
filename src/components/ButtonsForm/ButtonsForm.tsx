import React, {useEffect} from "react";
import {Todo} from "../../types/Todo";
import './Buttons.scss'

type Props = {
  todos: Todo[],
  setFilterTodos: (todo: Todo[]) => void
}

export const ButtonsForm: React.FC<Props> = ({todos, setFilterTodos}) => {

  const allTodos = () => {
    setFilterTodos([
      ...todos
    ])
  };

  const sortTodoByTrue = () => {
    setFilterTodos([
      ...todos.filter(todo => todo.statusTodo)
    ])
  };


  const sortTodoByFalse = () => {
    setFilterTodos([
      ...todos.filter(todo => !todo.statusTodo)
    ])
  };

  useEffect(() => {
    setFilterTodos(todos);
  }, [todos]);

  return (
   <div className="buttons">
     <button
       onClick={() => allTodos()}
       className="btn btn-outline-secondary"
       type="submit"
     >
       All
     </button>
     <button
       onClick={() => sortTodoByTrue()}
       className="btn btn-outline-secondary"
       type="submit"
     >
       Done
     </button>
     <button
       onClick={() => sortTodoByFalse()}
       className="btn btn-outline-secondary"
       type="submit"
     >
       Not done
     </button></div>
  );
}
