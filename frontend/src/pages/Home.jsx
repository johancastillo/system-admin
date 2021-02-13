import { Link } from "wouter"


const Home = () => {


    return (
        <main className="main">
            <h3 className="titulo">
                Bienvenido
            </h3>

            <div className="grid-videos">
                <Link href="/proveedores">
                    <div className="card d-flex justify-content-center align-items-center"
                        style={{ cursor: 'pointer' }}>
                            
                        <h5>Ctrl + A</h5>
                        <p>Ir a proveedores</p>
                    </div>
                </Link>

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

    )
}

export default Home
