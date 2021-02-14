import axios from "axios"
import { useEffect, useState } from "react"

import Swal from 'sweetalert2'


const EditProvider = () => {
    const [id, setId] = useState(0)

    useEffect(() => {
        axios.get("http://localhost:3004/providers")
            .then(
                response => setId(response.data.length + 1)
            )
            .catch(
                err => console.log(err)
            )
    })

    const handleSubmit = e => {
        const formData = new FormData(e.target)

        let jsonData = {}
        jsonData["id"] = id

        for (let [key, value] of formData) {
            jsonData[key] = value
        }


        const url = `http://localhost:3004/providers`

        //console.log(jsonData)

        axios.post(url, jsonData)
            .then(
                response => console.info(response),

                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Proveedor creado',
                    showConfirmButton: false,
                    timer: 1500
                })
            )
            .catch(
                err => console.error(err)
            )

        e.preventDefault()
    }




    return (
        <div className="container">
            <div className="card p-4">
                <h4 className="text-center text-uppercase">
                    Crear Proveedor
                </h4>

                <form onSubmit={handleSubmit}>

                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Nombre</label>
                        <input type="text" class="form-control" placeholder="Nombre" name="fullname" />
                    </div>

                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Rif</label>
                        <input type="text" class="form-control" placeholder="Rif" name="rif" />
                    </div>

                    <div class="form-check">
                        <input class="form-check-input" type="radio" value="Especial" name="type" />
                        <label class="form-check-label" for="flexRadioDefault1">
                            Especial
                        </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" value="Ordinario" type="radio" name="type" checked />
                        <label class="form-check-label" for="flexRadioDefault2">
                            Ordinario
                        </label>
                    </div>

                    <div class="mb-3 d-none">
                        <label for="exampleInputEmail1" class="form-label">Fecha de creación</label>
                        <input type="text" class="form-control" placeholder="Rif" name="registration_date" />
                    </div>

                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Servicio</label>
                        <input type="text" class="form-control" placeholder="Servicio" name="service" />
                    </div>

                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Email</label>
                        <input type="text" class="form-control" placeholder="Email" name="email" />
                    </div>

                    <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label">Dirección</label>
                        <input type="text" class="form-control" placeholder="Dirección" name="address" />
                    </div>

                    <div class="mb-3">
                        <label class="form-label">Teléfono</label>
                        <input type="number" class="form-control" placeholder="Teléfono" name="phone" />
                    </div>

                    <div class="mb-3">
                        <label class="form-label">Foto</label>
                        <input type="file" class="form-control" name="photo" />
                    </div>

                    <div className="mb-3">
                        <input className="form-control" type="text" name="image" placeholder="URL de la imágen" />
                    </div>

                    <button type="submit" class="btn btn-primary">
                        Guardar
                    </button>
                </form>
            </div>
        </div>
    )
}

export default EditProvider
