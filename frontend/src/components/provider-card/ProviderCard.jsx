import { Link } from 'wouter'

const ProviderCard = ({ fullname, id, rif, image, type, service, description }) => {
    
    return (
        <Link href={`/proveedores/${rif}`}>
            <div className="card" style={{ width: '100%', cursor: 'pointer' }}>
                <img src={image} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title text-center text-capitalize">
                        {`${fullname}`}
                    </h5>

                    <p className="text-center">
                        {service ? service : ""}
                    </p>

                    <div className="text-center">
                        <span className="badge bg-danger">
                            {type}
                        </span>
                    </div>

                    <p className="card-text mt-2">
                        {description}
                    </p>
                </div>
            </div>
        </Link>
    )
}

export default ProviderCard