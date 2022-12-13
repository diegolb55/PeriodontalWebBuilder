import Tratamientos from "../components/wpages/Tratamientos";
import NavBar from "../components/NavBar";


export default function LocationPage(){
    return (
        <>
            <NavBar />
            <Tratamientos noWidget={true} />

        </>
    )
}