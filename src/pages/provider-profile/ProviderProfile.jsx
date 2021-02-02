import ProviderCard from "../../components/provider-card/ProviderCard"

const ProviderProfile = () => {
    return (
        <div className="p-4">
            <div className="row">
                <div className="col-md-4">
                    <ProviderCard
                        prividerId={1}
                        name="Johan"
                        lastname="Castillo"
                        type="Especial"
                        image="http://digital-education.herokuapp.com/static/media/8.74de9726.png"
                        description="Desarrollador de Software"
                    />

                </div>

                <div className="col-md-8">

                </div>
            </div>
        </div>
    )
}

export default ProviderProfile
