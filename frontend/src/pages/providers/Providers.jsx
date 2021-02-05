import { useEffect, useState } from "react"
import ProviderCard from "../../components/provider-card/ProviderCard"
import axios from 'axios'
import { Link } from "wouter"


const Providers = () => {
    const [providers, setProviders] = useState([])

    useEffect(() => {
        axios.get('http://172.20.43.106:8080/api/directorios')
            .then(
                response => setProviders(response.data)
            )
            .catch(
                err => console.log(err)
            )
    }, [])

    return (
        <div clasName="p-4">
            <h3 className="text-center mt-4">Proveedores</h3>


            <div className="m-2 d-flex justify-content-between">
                <input type="text" style={{ width: '210px' }} className="form-control" placeholder="Buscar por nombre..." />


                <Link href="/crear-proveedor">
                    <a className="btn btn-primary">Crear</a>
                </Link>
            </div>

            <div className="gallery mt-2 mb-5">

                {
                    providers.map(
                        provider => {
                            let routeImg = provider.foto
                            routeImg = routeImg ? routeImg.replace(/\//g, "/") : ""
                            routeImg = routeImg ? routeImg.split(",") : ""

                            return (
                                <ProviderCard
                                    id={provider.id}
                                    name={provider.nombre}
                                    type="Especial"
                                    image={routeImg[0]}
                                    description={provider.direccion}
                                />
                            )
                        }
                    )
                }




            </div>
        </div>
    )
}

export default Providers