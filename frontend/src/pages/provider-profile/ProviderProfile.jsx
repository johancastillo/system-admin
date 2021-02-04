import { useEffect, useState } from "react"
import ProviderCard from "../../components/provider-card/ProviderCard"
import Table from "../../components/table/Table"
import axios from 'axios'
import { Link } from "wouter"


const ProviderProfile = (props) => {
    const [provider, setProvider] = useState({})


    useEffect(() => {
        axios.get(`http://172.20.43.106:8080/api/directorios/${props.params.id}`)
            .then(
                response => setProvider(response.data)
            )
            .catch(
                err => console.log(err)
            )
    }, [])



    return (
        <div className="p-4">
            <div className="row">
                <div className="col-md-4">



                    <ProviderCard
                        id={provider.id}
                        name={provider.nombre}
                        type="Especial"
                        image={provider.foto}
                        description={provider.direccion}
                    />

                    <br />
                    <br />

                    <div className="card p-4">
                        <div>
                            <h6>Información</h6>
                        </div>

                        <hr />

                        <div>
                            <h6>Historial</h6>
                        </div>
                    </div>

                </div>

                <div className="col-md-8">

                    <div className="container">
                        <Link href={`/editar-proveedor/${props.params.id}`}>
                            <a type="button" class="btn btn-info">Editar</a>
                        </Link>

                        <Link href={`/eliminar-proveedor/${props.params.id}`}>
                            <a type="button" class="btn btn-danger mx-2">Eliminar</a>
                        </Link>
                    </div>

                    <Table />
                </div>
            </div>
        </div>
    )
}

export default ProviderProfile
