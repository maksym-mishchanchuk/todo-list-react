import React, {useState} from "react";
import {Todo} from "../../types/Todo";
import {Button} from "react-bootstrap";
import {TodoForm} from "../TodoForm/TodoForm";
import classNames from "classnames";
import './TodosList.scss'
import { Link } from 'react-router-dom';


type Props = {
  todos: Todo[],
  deleteTodo: (todoId: number) => void,
  updateTodo: (todoId: number, newTodoTask: string) => void,
  todoDone: (a: number) => void
}

export const TodosList: React.FC<Props> = ({todoDone, todos, deleteTodo, updateTodo }) => {
  const [selectTodo, setSelectTodo] = useState(0);

  return(
    <div className="container">
      <ul className="container__todos__list todos__list list-group">
        {todos.map(todo => (
            <li
              key={todo.id}
              className={classNames("todos__list__item list-group-item list-group-item-success", {todoDone: todo.statusTodo})}
            >
              {selectTodo === todo.id ? (
                <TodoForm
                  todo={todo}
                  addTodo={(task:string) => {
                    updateTodo(todo.id, task);
                    setSelectTodo(0)
                  }}
                />
              ) : (
                <>
                  <input
                    onClick={() => todoDone(todo.id)}
                    defaultChecked={todo.statusTodo}
                    className="form-check-input"
                    type="checkbox"
                    id="flexCheckDefault"
                  />
                    <Link
                      className="link_id"
                      to={`/todos/${todo.id}`}
                    >
                      {todo.task}
                    </Link>
                  <div>
                    <Button
                      onClick={() => deleteTodo(todo.id)}
                    >
                      X
                    </Button>
                    <Button
                      onClick={() => setSelectTodo(todo.id)}
                    >
                      Edit
                    </Button>
                  </div>
                </>
              )}
            </li>
        ))}
      </ul>
    </div>
  )
}
