import { useState } from 'react'
import { Link } from 'wouter'

const Menu = () => {
    const [page, setPage] = useState('home')

    const homePage = () => setPage('home')
    const providerPage = () => setPage('provider')
    const clientPage = () => setPage('client')

    return (
        <nav className="menu-lateral">

            <Link href="/" onClick={homePage}>
                <a className={page === 'home' ? 'active' : ""}>
                    <i className="fas fa-home"></i>
                    Página Principal
                </a>
            </Link>


            <Link href="/proveedores" onClick={providerPage}>
                <a className={page === 'provider' ? 'active' : ""}>
                    <i class="fas fa-box-open"></i>
                Proveedores
                </a>
            </Link>

            <Link href="/clientes" onClick={clientPage}>
                <a className={page === 'client' ? 'active' : ""}>
                <i class="fas fa-users"></i>
                Clientes
                </a>
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
