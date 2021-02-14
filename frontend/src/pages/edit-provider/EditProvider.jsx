import axios from "axios"
import { useEffect, useState } from "react"

import Swal from 'sweetalert2'



const EditProvider = ({ params }) => {
    const [provider, setProvider] = useState({})


    useEffect(() => {
        axios.get(`http://localhost:3004/providers/${params.id}`)
            .then(
                response => setProvider(response.data)
            )
            .catch(
                err => console.log(err)
            )
    }, [])

    const handleSubmit = e => {
        const formData = new FormData(e.target)
        
        let jsonData = {}
        jsonData["id"] = params.id

        for (let [key, value] of formData) {
            jsonData[key] = value
        }


        const url = `http://localhost:3004/providers/${params.id}`

        //console.log(jsonData)

          axios.put(url, jsonData)
              .then(
                  response => console.info(response),
                  
                  Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Cambios guardados',
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
                    Editar Proveedor
                </h4>

                <form onSubmit={handleSubmit}>

                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Nombre</label>
                        <input type="text" class="form-control" placeholder="Nombre" name="fullname" defaultValue={provider.fullname} />
                    </div>

                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Rif</label>
                        <input type="text" class="form-control" placeholder="Rif" name="rif" defaultValue={provider.rif} />
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
                        <input type="text" class="form-control" placeholder="Rif" name="registration_date" defaultValue={provider.registration_date} />
                    </div>

                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Servicio</label>
                        <input type="text" class="form-control" placeholder="Servicio" name="service" defaultValue={provider.service} />
                    </div>

                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Email</label>
                        <input type="text" class="form-control" placeholder="Email" name="email" defaultValue={provider.email} />
                    </div>

                    <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label">Dirección</label>
                        <input type="text" class="form-control" placeholder="Dirección" name="address" defaultValue={provider.address} />
                    </div>

                    <div class="mb-3">
                        <label class="form-label">Teléfono</label>
                        <input type="number" class="form-control" placeholder="Teléfono" name="phone" defaultValue={provider.phone} />
                    </div>

                    <div class="mb-3">
                        <label class="form-label">Foto</label>
                        <input type="file" class="form-control" name="photo" />
                    </div>

                    <div className="mb-3">
                        <input className="form-control" type="text" name="image" placeholder="URL de la imágen" defaultValue={provider.image} />
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
