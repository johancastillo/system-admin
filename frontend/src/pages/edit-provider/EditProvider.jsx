import axios from "axios"
import { useEffect, useState } from "react"


const EditProvider = (props) => {
    const [provider, setProvider] = useState({})


    useEffect(() => {
        axios.get(`http://172.20.43.106:8080/api/directorios/${props.params.id}`)
        .then(
            response => setProvider(response.data)
        )
    }, [])

    const handleSubmit = e => {
        const data = new FormData(e.target)
        const url = `http://172.20.43.106:8080/api/directorios/${props.params.id}`

        axios.post(url, data)
        .then(
            response => console.info(response)
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
                    <div class="d-none">
                        <input type="text" name="_method" value="PUT" />
                    </div>

                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Nombre</label>
                        <input type="text" class="form-control" placeholder="Nombre" name="nombre" defaultValue={provider.nombre} />
                    </div>

                    <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label">Dirección</label>
                        <input type="text" class="form-control" placeholder="Dirección" name="direccion" defaultValue={provider.direccion} />
                    </div>

                    <div class="mb-3">
                        <label class="form-label">Teléfono</label>
                        <input type="number" class="form-control" placeholder="Teléfono" name="telefono" defaultValue={provider.telefono} />
                    </div>

                    <div class="mb-3">
                        <label class="form-label">Foto</label>
                        <input type="file" class="form-control" name="foto" placeholder="Dirección" />
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
