import { useEffect, useState } from "react"
import ProviderCard from "../../components/provider-card/ProviderCard"
import Table from "../../components/table/Table"
import axios from 'axios'
import { Link, useLocation } from "wouter"

import Swal from 'sweetalert2'

const ProviderProfile = ({ params }) => {
    const [provider, setProvider] = useState([])
    const [historical, setHistorical] = useState([])
    let [total, setTotal] = useState(0)

    //Modal
    const [id, setId] = useState('')
    const [type, setType] = useState('')
    const [date, setDate] = useState('')
    const [description, setDescription] = useState('')
    const [value, setValue] = useState('')

    let deuda, pago

    useEffect(() => {
        axios.get("http://localhost:3004/historical")
        .then(
            response => setId(response.data.length + 1)
        )

    }, [])


    const handleDate = e => setDate(e.target.value)
    const handleDescription = e => setDescription(e.target.value)
    const handleValue = e => setValue(e.target.value)

    useEffect(() => {
        pago = document.getElementsByName("type")[0]
        deuda = document.getElementsByName("type")[1]
    }, [])

    const handleSend = () => {
        const data = {
            id,
            type: deuda ? "Deuda" : "Pago",
            date,
            description,
            value: deuda ? `-${value}` : `+${value}`
        }

        console.log(data)

    //setRegisters(data)

        axios.post("http://localhost:3004/historical", data)

        axios.get(`http://localhost:3004/historical?_sort=id&_order=desc`)
        .then(
            response => setHistorical(response.data)
        )

    }


    const [location, setLocation] = useLocation()

    useEffect(() => {
        axios.get(`http://localhost:3004/providers?rif=${params.rif}`)
            .then(
                response => {
                    setProvider(response.data[0])
                }
            )
            .catch(
                err => console.log(err)
            )
    }, [])

    useEffect(() => {
        let urDinamicl = `http://localhost:3004/historical/${provider.id}`
        axios.get(`http://localhost:3004/historical?_sort=id&_order=desc`)
            .then(
                response => setHistorical(response.data)
            )
            .catch(
                err => console.log(err)
            )
    }, [provider])

    useEffect(() => {
        let total = 0
        historical.forEach(register => total += parseFloat(register.value))

        setTotal(total)
    }, [historical])


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
                axios.delete(`http://localhost:3004/providers/${provider.id}`)
                    .then(
                        response => setLocation("/proveedores")
                    )
                Swal.fire(
                    '¡Eliminado!',
                    'Se ha eliminado correctamente',
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
                        fullname={provider.fullname}
                        type={provider.type}
                        image={provider.image}
                        description={provider.addres}
                    />

                    <br />
                    <br />



                </div>

                <div className="col-md-8">

                    <div className="container d-flex justify-content-end">
                        <Link href={`/editar-proveedor/${provider.id}`}>
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
                                    Histórico
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
                                {/* <!-- Modal --> */}
                                <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                    <div class="modal-dialog">
                                        <div class="modal-content">
                                            <div class="modal-header">
                                                <h5 class="modal-title" id="exampleModalLabel">Nuevo registro</h5>
                                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                            </div>
                                            <div class="modal-body">
                                                <input type="text" placeholder="Fecha" className="form-control my-2" onChange={handleDate} />
                                                <input type="text" placeholder="Descripción" className="form-control my-2" onChange={handleDescription} />
                                                <input type="text" placeholder="Monto" className="form-control my-2" onChange={handleValue} />

                                                <div class="form-check form-check-inline">
                                                    <input class="form-check-input" value="pago" type="radio" name="type" checked />
                                                    <label class="form-check-label" for="inlineRadio1">
                                                        Pago
                                                    </label>
                                                </div>

                                                <div class="form-check form-check-inline">
                                                    <input class="form-check-input" value="deuda" type="radio" name="type" />
                                                    <label class="form-check-label" for="inlineRadio2">
                                                        Deuda
                                                    </label>
                                                </div>
                                            </div>
                                            <div class="modal-footer">
                                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>

                                                <button type="button" class="btn btn-primary" onClick={handleSend} data-bs-dismiss="modal" aria-label="Close">
                                                    Save changes
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* End Modal */}

                                <div className="container d-flex justify-content-between mt-4 px-2">
                                    <button className="btn btn-secondary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                        Nuevo registro
                                    </button>

                                    <p>
                                        Deuda:
                                        <strong className="mx-2"
                                            style={Math.sign(total) >= 0 ? { color: "green" } : { color: "red" }}>
                                            {total}

                                        </strong>
                                    </p>
                                </div>

                                <Table historical={historical} total={total} />
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
