import { useParams, Link } from "react-router-dom";
import {Button} from "react-bootstrap";

import './TodoID.scss';


export const TodoId = () => {
  const { id } = useParams();
  return (
    <div className="container__todoID">
      <h1 className="todoID__title">ID of your task: {id}</h1>
      <Link className="todoID__link" to={'/todos/'}>
        <Button>Come Back</Button>
      </Link>
    </div>
  )
};
