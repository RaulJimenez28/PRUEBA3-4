import { NavLink } from "react-router-dom"

export const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-sm bg-light">
        <div className="container-fluid">
            <ul className="navbar-nav">
                <li className="nav-item">
                    <NavLink className="nav-link" to="/titulares">Titulares</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="/suplentes">Suplentes</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="/aguateros">Aguateros</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="/login">LogOut</NavLink>
                </li>
            </ul>
        </div>
      </nav>


    </>
  )
}

