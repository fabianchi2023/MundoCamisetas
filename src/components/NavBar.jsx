import { Link, NavLink } from "react-router-dom"
import logo from "../assets/img/logo.jpg"
import CartWidget from "./CartWidget"

const NavBar = () => {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col my-3 ">
                    <Link to={"/"}>
                        <img src={logo} alt="Logo Mundo Camisetas" width={128} />
                    </Link>
                </div>
                <div className="col d-flex align-items-center justify-content-end p-3">
                    <CartWidget />
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <ul className="nav nav-underline ">
                        <li className="nav-item">
                            <NavLink className="nav-link text-primary"to={"/"}>Inicio</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link text-primary" to={"/category/TemporadaActual"}>Temporada Actual</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link text-primary" to={"/category/NuevosIngresos"}>Nuevos Ingresos</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link text-primary" to={"/category/Selecciones"}>Selecciones</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default NavBar