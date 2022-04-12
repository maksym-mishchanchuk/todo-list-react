import {Link} from "react-router-dom";
import React from "react";
import './Navigation.scss'

export const Navigation =() => {
  return (
    <nav className="nav">
      <Link to="/">
        <button type="button" className="btn btn-secondary">Home</button>
      </Link>
      <Link to="/photos">
        <button type="button" className="btn btn-secondary">Photos</button>
      </Link>
      <Link to="/todos">
        <button type="button" className="btn btn-secondary">Todos</button>
      </Link>
    </nav>
  )
}
