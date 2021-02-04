import { useEffect } from "react"
import axios from 'axios'

import { useLocation } from "wouter";


const DeleteProvider = (props) => {
    const [location, setLocation] = useLocation();

    useEffect(() => {
        axios.delete(`http://172.20.43.106:8080/api/directorios/${props.params.id}`)
        .then(
            response => setLocation("/proveedores")
        )
    }, [])

    return(
        <>
        
        </>
    )

}

export default DeleteProvider
