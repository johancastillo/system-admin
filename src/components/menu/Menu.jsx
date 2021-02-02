import { Link } from 'react-router-dom'

const Menu = () => {
    return (
        <nav className="menu-lateral">
            <Link to="/" className="active">
                <i className="fas fa-home"></i>
                    Página Principal
            </Link>


            <Link to="/proveedores">

                <i class="fas fa-box-open"></i>
                Proveedores
            </Link>

            <Link to="/clientes">
                <i class="fas fa-users"></i>
                Clientes
            </Link>

            <hr />

            <Link to="/">
                <i class="fas fa-hand-holding-usd"></i>
                Pagos
            </Link>

            <Link to="/">
                <i class="fas fa-coins"></i>
                Deudas
            </Link>

            <Link to="/">
                <i class="fas fa-credit-card"></i>
                Banco
            </Link>

            <hr />

            <Link to="/">
                <i className="fas fa-folder"></i>
                Javascript
            </Link>

            <Link to="/">
                <i className="fas fa-folder"></i>
                React
            </Link>

            <Link to="/">
                <i className="fas fa-folder"></i>
                Archivos
            </Link>
        </nav>

    )
}

export default Menu
