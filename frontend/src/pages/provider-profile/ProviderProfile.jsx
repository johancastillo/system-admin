import { useEffect, useState } from "react"
import ProviderCard from "../../components/provider-card/ProviderCard"
import Table from "../../components/table/Table"
import axios from 'axios'
import { Link, useLocation } from "wouter"

import Swal from 'sweetalert2'

const ProviderProfile = ({params}) => {
    const [provider, setProvider] = useState([])
    const [location, setLocation] = useLocation()

    useEffect(() => {
        axios.get(`http://localhost:3004/providers?rif=${params.rif}`)
            .then(
                response => setProvider(response.data[0])
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
                axios.delete(`http://172.20.43.106:8080/api/directorios?rif=${params.id}`)
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
                        name={provider.name}
                        lastname={provider.lastname}
                        type={provider.type}
                        image={provider.image}
                        description={provider.addres}
                    />

                    <br />
                    <br />



                </div>

                <div className="col-md-8">

                    <div className="container d-flex justify-content-end">
                        <Link href={`/editar-proveedor/${params.id}`}>
                            <a type="button" class="btn btn-info">Editar</a>
                        </Link>


                        <a type="button" class="btn btn-danger mx-2" onClick={handleDelete}>
                            Eliminar
                            </a>

                    </div>

                    <div className="container mt-4">
                        <ul class="nav nav-tabs" id="myTab" role="tablist">
                            <li class="nav-item" role="presentation">
                                <button class="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">
                                    Información
                                </button>
                            </li>
                            <li class="nav-item" role="presentation">
                                <button class="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">
                                    Historial
                                </button>
                            </li>
                            <li class="nav-item" role="presentation">
                                <button class="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact" type="button" role="tab" aria-controls="contact" aria-selected="false">
                                    Gráficos
                                </button>
                            </li>
                        </ul>
                        <div class="tab-content" id="myTabContent">
                            <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                <div className="card p-4 mt-4">
                                    <div>
                                        <h6>Información</h6>
                                    </div>

                                    <hr />

                                    <div>
                                        <h6>Historial</h6>
                                    </div>
                                </div>
                            </div>

                            <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                                <Table />
                            </div>

                            <div class="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">
                                Graphics
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default ProviderProfile
