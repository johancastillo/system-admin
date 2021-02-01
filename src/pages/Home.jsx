import { useEffect } from "react"

const Home = () => {
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
        <>
            <div className="contenedor active" id="contenedor">
                <header className="header">
                    <div className="contenedor-logo">
                        <button id="boton-menu" className="boton-menu">
                            <i className="fas fa-bars"></i>
                        </button>

                        <a href="#" className="logo"><i className="fas fa-play"></i>
                            <span>FalconMasters</span></a>
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
                            <img src="img/avatar.jpg" alt="" />
                        </a>
                    </div>
                </header>

                <nav className="menu-lateral">
                    <a href="#" className="active">
                        <i className="fas fa-home"></i>
                Página Principal
            </a>

                    <a href="#">
                        <i className="fas fa-fire"></i>
                Tendencias
            </a>

                    <a href="#">
                        <i className="fas fa-star"></i>
                Suscripciones
            </a>

                    <hr />

                    <a href="#">
                        <i className="fas fa-folder"></i>
                HTML y CSS
            </a>

                    <a href="#">
                        <i className="fas fa-folder"></i>
                Responsive Design
            </a>

                    <a href="#">
                        <i className="fas fa-folder"></i>
                Bootstrap
            </a>

                    <hr />

                    <a href="#">
                        <i className="fas fa-folder"></i>
                Javascript
            </a>

                    <a href="#">
                        <i className="fas fa-folder"></i>
                React
            </a>

                    <a href="#">
                        <i className="fas fa-folder"></i>
                PHP y MYSQL
            </a>
                </nav>

                <main className="main">
                    <h3 className="titulo">Videos Recomendados</h3>
                    <div className="grid-videos">
                        <a href="#" className="video">
                            <img src="https://via.placeholder.com/500x281?text=Placeholder" alt="" />
                        </a>

                        <a href="#" className="video">
                            <img src="https://via.placeholder.com/500x281?text=Placeholder" alt="" />
                        </a>

                        <a href="#" className="video">
                            <img src="https://via.placeholder.com/500x281?text=Placeholder" alt="" />
                        </a>

                        <a href="#" className="video">
                            <img src="https://via.placeholder.com/500x281?text=Placeholder" alt="" />
                        </a>

                        <a href="#" className="video">
                            <img src="https://via.placeholder.com/500x281?text=Placeholder" alt="" />
                        </a>

                        <a href="#" className="video">
                            <img src="https://via.placeholder.com/500x281?text=Placeholder" alt="" />
                        </a>

                        <a href="#" className="video">
                            <img src="https://via.placeholder.com/500x281?text=Placeholder" alt="" />
                        </a>

                        <a href="#" className="video">
                            <img src="https://via.placeholder.com/500x281?text=Placeholder" alt="" />
                        </a>

                        <a href="#" className="video">
                            <img src="https://via.placeholder.com/500x281?text=Placeholder" alt="" />
                        </a>

                        <a href="#" className="video">
                            <img src="https://via.placeholder.com/500x281?text=Placeholder" alt="" />
                        </a>

                        <a href="#" className="video">
                            <img src="https://via.placeholder.com/500x281?text=Placeholder" alt="" />
                        </a>

                        <a href="#" className="video">
                            <img src="https://via.placeholder.com/500x281?text=Placeholder" alt="" />
                        </a>
                    </div>
                </main>
            </div>
        </>
    )
}

export default Home
