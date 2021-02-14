import { useEffect, useState } from 'react'
import axios from 'axios'

const Table = ({ id }) => {
    const [historical, setHistorical] = useState([])
    let total = 0

    useEffect(() => {
        axios.get(`http://localhost:3004/historical/${id}`)
            .then(
                response => setHistorical(response.data.registers)
            )
            .catch(
                err => console.log(err)
            )
    }, [])

    useEffect(() => {
        historical.map(register => total += parseFloat(register.value))
    }, [historical])

    return (
        <>

            <div className="container d-flex justify-content-end mt-4 px-2">
                <p>
                    Deuda:
            <strong className="mx-2"
                        style={Math.sign(total) >= 0 ? { color: "green" } : { color: "red" }}>
                        {total}

                    </strong>
                </p>
            </div>

            <table className="table mt-2">
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