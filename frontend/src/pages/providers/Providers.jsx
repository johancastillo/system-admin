import { useEffect, useState } from "react"
import ProviderCard from "../../components/provider-card/ProviderCard"
import axios from 'axios'


const Providers = () => {
    const [providers, setProviders] = useState([])

    useEffect(() => {
        axios.get('http://172.20.43.106:8080/api/directorios')
            .then(
                response => setProviders(response.data)
            )
            .catch(
                err => console.log(err)
            )
    }, [])

    return (
        <div clasName="p-4">
            <h3 className="text-center mt-4">Proveedores</h3>


            <div className="m-2">
                <input type="text" style={{ width: '210px' }} className="form-control" placeholder="Buscar por nombre..." />
            </div>

            <div className="gallery mt-2 mb-5">

                {
                    providers.map(
                        provider => {
                            return (
                                <ProviderCard
                                    id={provider.id}
                                    name={provider.nombre}
                                    type="Especial"
                                    image={`http://172.20.43.106:8080/fotografias/${provider.foto}`}
                                    description={provider.direccion}
                                />
                            )
                        }
                    )
                }




            </div>
        </div>
    )
}

export default Providers