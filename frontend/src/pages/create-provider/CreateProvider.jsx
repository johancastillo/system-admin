import {useState} from 'react'
import axios from 'axios'

const CreateProvider = () => {
    const [name, setName] = useState('')
    const [direction, setDirection] = useState()
    const [phone, setPhone] = useState()
    const [photo, setPhoto] = useState()

    const changeName = e => {
        setName(e.target.value)
    }

    const changeDirection = e => {
        setName(e.target.value)
    }
    
    const changePhone = e => {
        setName(e.target.value)
    }

    const changePhoto = e => {
        setName(e.target.value)
    }

    const create = () => {
        let url = "http://172.20.43.106:8080/api/directorios"
        let data = {
            "nombre": name,
            "telefono": phone,
            "direccion": direction,
            "foto": photo
        }

        axios.post(url, data)
        .then(
            response => console.log(response)
        )
        .catch(
            err => console.log(err)
        )
    }

    return(
        <div className="container">
            <div className="card p-4">
                <h4 className="text-center text-uppercase">
                    Crear Proveedor
                </h4>

                <form>
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Nombre</label>
                        <input type="text" class="form-control" placeholder="Nombre" onChange={changeName} />
                        <div class="form-text">Messages.</div>
                    </div>

                    <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label">Dirección</label>
                        <input type="text" class="form-control" placeholder="Dirección" onChange={changeDirection} />
                    </div>

                    <div class="mb-3">
                        <label class="form-label">Teléfono</label>
                        <input type="number" class="form-control" placeholder="Teléfono" onChange={changePhone} />
                    </div>

                    <div class="mb-3">
                        <label class="form-label">Foto</label>
                        <input type="file" class="form-control" onChange={changePhoto} />
                    </div>

                    <a class="btn btn-primary" onClick={create} >
                        Crear
                    </a>
                </form>
            </div>
        </div>
    )
}


export default CreateProvider