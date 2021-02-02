import ProviderCard from "../../components/provider-card/ProviderCard"


const Providers = () => {
    return (
        <div clasName="p-4">
            <h3 className="text-center mt-4">Proveedores</h3>

            
                <div className="m-2">
                    <input type="text" style={{width: '210px'}} className="form-control" placeholder="Buscar por nombre..." />
                </div>

            <div className="gallery mt-2 mb-5">
                <ProviderCard
                    prividerId={1}
                    name="Johan"
                    lastname="Castillo"
                    type="Especial"
                    image="http://digital-education.herokuapp.com/static/media/8.74de9726.png"
                    description="Desarrollador de Software"
                />

                <ProviderCard
                    prividerId={1}
                    name="Johan"
                    lastname="Castillo"
                    type="Especial"
                    image="http://digital-education.herokuapp.com/static/media/8.74de9726.png"
                    description="Desarrollador de Software"
                />

                <ProviderCard
                    prividerId={1}
                    name="Johan"
                    lastname="Castillo"
                    type="Especial"
                    image="http://digital-education.herokuapp.com/static/media/8.74de9726.png"
                    description="Desarrollador de Software"
                />

                <ProviderCard
                    prividerId={1}
                    name="Johan"
                    lastname="Castillo"
                    type="Especial"
                    image="http://digital-education.herokuapp.com/static/media/8.74de9726.png"
                    description="Desarrollador de Software"
                />

                <ProviderCard
                    prividerId={1}
                    name="Johan"
                    lastname="Castillo"
                    type="Especial"
                    image="http://digital-education.herokuapp.com/static/media/8.74de9726.png"
                    description="Desarrollador de Software"
                />

                <ProviderCard
                    prividerId={1}
                    name="Johan"
                    lastname="Castillo"
                    type="Especial"
                    image="http://digital-education.herokuapp.com/static/media/8.74de9726.png"
                    description="Desarrollador de Software"
                />
            </div>
        </div>
    )
}

export default Providers