import { useState } from "react"


const EditProvider = (props) => {
    const [name, setName] = useState('')
    const [direction, setDirection] = useState()
    const [phone, setPhone] = useState()
    const [Photo, setPhoto] = useState()

    return (
        <div className="container">
            <div className="card p-4">
                <h4 className="text-center text-uppercase">
                    Editar Proveedor
                </h4>

                <form>
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Nombre</label>
                        <input type="text" class="form-control" placeholder="Nombre" />
                        <div class="form-text">We'll never share your email with anyone else.</div>
                    </div>

                    <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label">Dirección</label>
                        <input type="text" class="form-control" placeholder="Dirección" />
                    </div>

                    <div class="mb-3">
                        <label class="form-label">Teléfono</label>
                        <input type="number" class="form-control" placeholder="Dirección" />
                    </div>

                    <div class="mb-3">
                        <label class="form-label">Foto</label>
                        <input type="file" class="form-control" placeholder="Dirección" />
                    </div>

                    <button type="submit" class="btn btn-primary">Guardar</button>
                </form>
            </div>
        </div>
    )
}

export default EditProvider
