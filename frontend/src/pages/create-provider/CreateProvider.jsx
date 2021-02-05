import { useState } from 'react'
import axios from 'axios'

const CreateProvider = () => {
    const [name, setName] = useState('')
    const [direction, setDirection] = useState('')
    const [phone, setPhone] = useState(0)
    const [photo, setPhoto] = useState('')

    const changeName = e => {
        setName(e.target.value)
    }

    const changeDirection = e => {
        setDirection(e.target.value)
    }

    const changePhone = e => {
        setPhone(e.target.value)
    }

    const changePhoto = e => {
        setPhoto(e.target.files[0])
    }


    const handleSubmit = e => {
        let url = "http://172.20.43.106:8080/api/directorios"
        let data = new FormData(e.target)


        axios.post(url, data)
        .then(
            response => console.log(response)
        )
        .catch(
            err => console.log(err)
        )

        e.preventDefault()
    }

    return (
        <div className="container">
            <div className="card p-4">
                <h4 className="text-center text-uppercase">
                    Crear Proveedor
                </h4>

                <form onSubmit={handleSubmit} >
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Nombre</label>
                        <input type="text" class="form-control" placeholder="Nombre" name="nombre" onChange={changeName} />
                        <div class="form-text">Messages.</div>
                    </div>

                    <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label">Dirección</label>
                        <input type="text" class="form-control" placeholder="Dirección" name="direccion" onChange={changeDirection} />
                    </div>

                    <div class="mb-3">
                        <label class="form-label">Teléfono</label>
                        <input type="number" class="form-control" placeholder="Teléfono" name="telefono" onChange={changePhone} />
                    </div>

                    <div class="mb-3">
                        <label class="form-label">Foto</label>
                        <input type="file" class="form-control" name="foto" onChange={changePhoto} />
                    </div>

                    <button  type="submit" class="btn btn-primary" >
                        Crear
                    </button>
                </form>
            </div>
        </div>
    )
}


export default CreateProvider