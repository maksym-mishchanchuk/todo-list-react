import classNames from "classnames";
import React, {useState} from "react";
import {Todo} from "../../types/Todo";
import "./TodoForm.scss"

type Props = {
  todo?: Todo,
  addTodo: (newTodoName: string) => void
}

export const TodoForm: React.FC<Props> = ({addTodo, todo = null }) => {
  const [newTodoName, setNewTodoName] = useState<string>(todo?.task || '');
  const [hasNameError, setHasNameError] = useState(false);

  const onFormSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    setHasNameError(!newTodoName);

    if(newTodoName) {
      addTodo(newTodoName);
      setNewTodoName('');
    }

  }

  return (
    <div className="container__form">
      <form
        onSubmit={onFormSubmit}
      >
        <div className="input-group mb-3">
          <input
            placeholder={hasNameError ? 'please enter your task': "create new todo"}
            value={newTodoName}
            type="text"
            className={classNames('form-control', {error: hasNameError})}
            onChange={(event) => {
              setNewTodoName(event.target.value);
              setHasNameError(false);
            }}
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
          />
            <div className="input-group-append">
              <button
                className="btn btn-outline-secondary"
                type="submit"
              >
                Create
              </button>
            </div>
        </div>
      </form>
    </div>
  )
}
