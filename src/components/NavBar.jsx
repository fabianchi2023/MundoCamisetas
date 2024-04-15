import logo from "../assets/img/logo.jpg"
import CartWidget from "./CartWidget"

const NavBar = () => {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col my-3">
                    <a href="">
                        <img src={logo} alt="Logo Mundo Camisetas" width={128} />
                    </a>
                </div>
                <div className="col d-flex align-items-center justify-content-end p-3">
                    <CartWidget />
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <ul className="nav nav-underline">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Inicio</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Categorias</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Nuevos Ingresos</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default NavBar