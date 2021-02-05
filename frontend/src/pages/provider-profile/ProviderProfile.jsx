import { useEffect, useState } from "react"
import ProviderCard from "../../components/provider-card/ProviderCard"
import Table from "../../components/table/Table"
import axios from 'axios'
import { Link, useLocation } from "wouter"

import Swal from 'sweetalert2'

const ProviderProfile = (props) => {
    const [provider, setProvider] = useState({})
    const [location, setLocation] = useLocation()

    useEffect(() => {
        axios.get(`http://172.20.43.106:8080/api/directorios/${props.params.id}`)
            .then(
                response => setProvider(response.data)
            )
            .catch(
                err => console.log(err)
            )
    }, [])


    const handleDelete = () => {
        Swal.fire({
            title: '¿Estás seguro de eliminar este proveedor?',
            text: 'No podrás recuperar la información si elimina!',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Sí, eliminar',
            cancelButtonText: 'Cancelar'

        }).then((result) => {
            if (result.value) {
                axios.delete(`http://172.20.43.106:8080/api/directorios/${props.params.id}`)
                    .then(
                        response => setLocation("/proveedores")
                    )
                Swal.fire(
                    'Deleted!',
                    'Your imaginary file has been deleted.',
                    'success'
                )
                // For more information about handling dismissals please visit
                // https://sweetalert2.github.io/#handling-dismissals
            } else if (result.dismiss === Swal.DismissReason.cancel) {
                Swal.fire(
                    'Cancelado',
                    'Tus datos están intactos :)',
                    'error'
                )
            }
        })
    }

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


                        <a type="button" class="btn btn-danger mx-2" onClick={handleDelete}>
                            Eliminar
                            </a>

                    </div>

                    <Table />
                </div>
            </div>
        </div>
    )
}

export default ProviderProfile
