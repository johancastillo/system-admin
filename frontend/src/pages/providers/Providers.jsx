import { useEffect, useState } from "react"
import ProviderCard from "../../components/provider-card/ProviderCard"
import axios from 'axios'
import { Link } from "wouter"


const Providers = () => {
    const [providers, setProviders] = useState([])
    const [frequent, setFrecuent] = useState([])
    const [filters, setFilters] = useState({ name: "" })

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


    useEffect(() => {
        if (filters.name) {
            axios.get(`http://localhost:3004/providers?fullname_like=${filters.name}`)
                .then(
                    response => setProviders(response.data)
                )
                .catch(
                    err => console.log(err)
                )
        } else {
            axios.get('http://localhost:3004/providers')
                .then(
                    response => setProviders(response.data)
                )
                .catch(
                    err => console.log(err)
                )
        }
    }, [filters])

    //useEffect(() => setFilters({name: ""}))

    // Event handles
    const filterName = e => {
        console.log(filters)

        if (e.target.value) {
            setFilters({ name: e.target.value })
        } else {
            setFilters({ name: "" })

        }
    }

    return (
        <div clasName="p-4">
            <h3 className="text-center mt-4">Proveedores</h3>


            <div className="container px-4 d-flex justify-content-between">
                <input type="text" style={{ width: '210px' }} className="form-control"
                    placeholder={filters.name ? filters.name : "Buscar por nombre..."}
                    onChange={filterName} />


                <div>
                    <Link href="/crear-proveedor">
                        <a className="btn btn-primary mx-2">+ Nuevo</a>
                    </Link>

                    <a className="btn btn-primary">
                        Filtrar
                    </a>
                </div>
            </div>

            <div className="container px-4 mt-4">
                <table className="table table-striped table-hover">
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
                                        <tr style={{cursor: 'pointer'}}>
                                            <th scope="row">{`V-${provider.rif}`}</th>
                                            <td className="text-capitalize">
                                                {`${provider.fullname}`}
                                            </td>
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

            <div className="container px-4 mt-4">
                <nav aria-label="Page navigation example">
                    <ul className="pagination">
                        <li className="page-item">
                            <a className="page-link">
                                Anterior
                            </a>
                        </li>
                        
                        <li className="page-item">
                            <a className="page-link">
                                1
                            </a>
                        </li>

                        <li className="page-item">
                            <a className="page-link">
                                2
                            </a>
                        </li>
                        
                        <li className="page-item">
                            <a className="page-link">
                                3
                            </a>
                        </li>

                        <li className="page-item">
                            <a className="page-link">
                                Siguiente
                            </a>
                        </li>
                    </ul>
                </nav>
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
                                    fullname={provider.fullname}
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