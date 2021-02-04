import { Link } from 'wouter'

const ProviderCard = ({ name, id, lastname, image, type, description }) => {
    
    return (
        <Link href={`/proveedor/${id}`}>
            <div className="card" style={{ width: '100%', cursor: 'pointer' }}>
                <img src={image} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title text-center">
                        {`${name}`}
                    </h5>

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