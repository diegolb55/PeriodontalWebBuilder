import NavBar from "../components/NavBar";
import Equipo from "../components/wpages/Equipo"


export default function EquipoPage(){
    return (
        <>
            <NavBar />
            <Equipo noWidget={true} />
        </>
    )
}