import ProviderCard from "../../components/provider-card/ProviderCard"
import Table from "../../components/table/Table"

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

                    <br/>
                    <br/>

                    <div className="card p-4">
                        <div>
                            <h6>Información</h6>
                        </div>

                        <hr/>

                        <div>
                            <h6>Historial</h6>
                        </div>
                    </div>

                </div>

                <div className="col-md-8">
                    <Table />
                </div>
            </div>
        </div>
    )
}

export default ProviderProfile
