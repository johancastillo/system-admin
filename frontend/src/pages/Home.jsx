import { Link } from "wouter"


const Home = () => {


    return (
        <main className="main">
            <h3 className="titulo">
                Bienvenido
            </h3>

            <div className="grid-videos">
                <Link href="/">
                    <div className="card d-flex justify-content-center align-items-center"
                        style={{ cursor: 'pointer', height: '174px' }}>

                        <h5>Ctrl + Q</h5>
                        <strong className="m-0">Inicio</strong>
                    </div>
                </Link>

                <Link href="/proveedores">
                    <div className="card d-flex justify-content-center align-items-center"
                        style={{ cursor: 'pointer', height: '174px' }}>
                            
                        <h5>Ctrl + A</h5>
                        <strong className="m-0">Proveedores</strong>
                    </div>
                </Link>

                <Link href="/clientes">
                    <div className="card d-flex justify-content-center align-items-center"
                        style={{ cursor: 'pointer', height: '174px' }}>
                            
                        <h5>Ctrl + M</h5>
                        <strong className="m-0">Clientes</strong>
                    </div>
                </Link>

                
            </div>
        </main>

    )
}

export default Home
