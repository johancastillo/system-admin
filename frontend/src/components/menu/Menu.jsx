import { Link } from 'wouter'

const Menu = () => {
    return (
        <nav className="menu-lateral">
            <Link href="/" className="active">
                <i className="fas fa-home"></i>
                    Página Principal
            </Link>


            <Link href="/proveedores">

                <i class="fas fa-box-open"></i>
                Proveedores
            </Link>

            <Link href="/clientes">
                <i class="fas fa-users"></i>
                Clientes
            </Link>

            <hr />

            <Link href="/">
                <i class="fas fa-hand-holding-usd"></i>
                Pagos
            </Link>

            <Link href="/">
                <i class="fas fa-coins"></i>
                Deudas
            </Link>

            <Link href="/">
                <i class="fas fa-credit-card"></i>
                Banco
            </Link>

            <hr />

            <Link href="/">
                <i className="fas fa-folder"></i>
                Javascript
            </Link>

            <Link href="/">
                <i className="fas fa-folder"></i>
                React
            </Link>

            <Link href="/">
                <i className="fas fa-folder"></i>
                Archivos
            </Link>
        </nav>

    )
}

export default Menu
