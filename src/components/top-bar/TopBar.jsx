import avatar from './avatar.jpg'
import { useEffect } from "react"



const TopBar = () => {
    useEffect(() => {
        const contenedor = document.querySelector('#contenedor');

        document.querySelector('#boton-menu').addEventListener('click', () => {
            contenedor.classList.toggle('active');
        })

        const comprobarAncho = () => {
            if (window.innerWidth <= 768) {
                contenedor.classList.remove('active');
            } else {
                contenedor.classList.add('active');
            }
        }

        comprobarAncho();

        window.addEventListener('resize', () => {
            comprobarAncho();
        })
    }, [])

    return (
        <header className="header">
            <div className="contenedor-logo">
                <button id="boton-menu" className="boton-menu">
                    <i className="fas fa-bars"></i>
                </button>

                <a href="#" className="logo">
                    <i className="fas fa-play"></i>
                    <span>System Admin</span>
                </a>
            </div>

            <div className="barra-busqueda">
                <input type="text" placeholder="Buscar" />

                <button type="submit">
                    <i className="fas fa-search"></i>
                </button>
            </div>

            <div className="botones-header">
                <button>
                    <i className="fas fa-upload"></i>
                </button>

                <button>
                    <i className="fas fa-th"></i>
                </button>

                <button>
                    <i className="fas fa-bell"></i>
                </button>

                <a href="#" className="avatar">
                    <img src={avatar} alt="" />
                </a>
            </div>
        </header>
    )
}

export default TopBar
