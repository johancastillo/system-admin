import { useEffect, useState } from "react"

const Table = ({ historical, total }) => {
    const [type, setType] = useState('')
    const [date, setDate] = useState('')
    const [description, setDescription] = useState('')
    const [value, setValue] = useState('')

    let deuda, pago

    useEffect(() => {
        pago = document.getElementsByName("type")[0]
        deuda = document.getElementsByName("type")[1]
    })

    const handleType = () => {
        console.log("Pago", pago.checked)
        console.log("Deuda", deuda.checked)

    }

    return (
        <>
            {/* <!-- Modal --> */}
            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Nuevo registro</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <input type="text" placeholder="Fecha" className="form-control my-2" />
                            <input type="text" placeholder="Descripción" className="form-control my-2" />
                            <input type="text" placeholder="Monto" className="form-control my-2" />

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
                            
                            <button type="button" class="btn btn-primary" onClick={handleType}>
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

            <table className="table mt-4">
                <thead>
                    <tr>
                        <th scope="col">Fecha</th>
                        <th scope="col">Descripción</th>
                        <th scope="col">Monto</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        historical.map(register => {
                            return (
                                <tr>
                                    <th scope="row">{register.date}</th>
                                    <td>{register.description}</td>
                                    <td className=""
                                        style={Math.sign(register.value) === 1 ? { color: "green" } : { color: "red" }}>
                                        {register.value}
                                    </td>
                                </tr>
                            )
                        })
                    }

                </tbody>
            </table>



        </>
    )
}

export default Table