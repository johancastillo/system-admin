
const Table = ({ historical, total }) => {
    
    return (
        <>
            

            

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