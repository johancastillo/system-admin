import { useEffect, useState } from "react"
import ProviderCard from "../../components/provider-card/ProviderCard"
import axios from 'axios'
import { Link } from "wouter"


const Providers = () => {
    const [providers, setProviders] = useState([])
    const [frequent, setFrecuent] = useState([])

    useEffect(() => {
        axios.get('http://localhost:3004/providers')
            .then(
                response => setProviders(response.data)
            )
            .catch(
                err => console.log(err)
            )
    }, [])

    useEffect(() => {
        setFrecuent(providers.slice(0, 3))
    }, [providers])

    return (
        <div clasName="p-4">
            <h3 className="text-center mt-4">Proveedores</h3>


            <div className="container px-4 d-flex justify-content-between">
                <input type="text" style={{ width: '210px' }} className="form-control" placeholder="Buscar por nombre..." />


                <Link href="/crear-proveedor">
                    <a className="btn btn-primary">Crear</a>
                </Link>
            </div>

            <div className="container px-4 mt-4">
                <table class="table table-striped table-hover">
                    <thead className="table-dark">
                        <tr>
                            <th scope="col">Rif</th>
                            <th scope="col">Nombre</th>
                            <th scope="col">Servicio</th>
                            <th scope="col">Teléfono</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            providers.map(provider => {
                                return (
                                    <Link href={`/proveedores/${provider.rif}`}>
                                        <tr>
                                            <th scope="row">{`V-${provider.rif}`}</th>
                                            <td>{`${provider.name} ${provider.lastname}`}</td>
                                            <td>{provider.service}</td>
                                            <td>{provider.phone}</td>
                                        </tr>
                                    </Link>
                                )
                            })
                        }

                    </tbody>
                </table>

            </div>

            <br />

            <h4 className="text-center text-uppercase my-4">Más frecuentes</h4>
            <div className="gallery mt-2 mb-5">


                {
                    frequent.map(
                        provider => {
                            let image = provider.image
                            image = image ? image.replace(/\//g, "/") : ""

                            return (
                                <ProviderCard
                                    key={provider.id}
                                    rif={provider.rif}
                                    name={provider.name}
                                    lastname={provider.lastname}
                                    type={provider.type}
                                    service={provider.service}
                                    image={image}
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