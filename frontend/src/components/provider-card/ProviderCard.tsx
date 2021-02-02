import { Link } from 'react-router-dom'

const ProviderCard = ({ name, lastname, image, type, description }: any) => {
    return (
        <Link to="/proveedor">
            <div className="card" style={{ width: '100%' }}>
                <img src={image} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title text-center">
                        {`${name} ${lastname}`}
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