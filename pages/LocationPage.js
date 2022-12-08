import Location from "../components/wpages/Location";
import NavBar from "../components/NavBar";


export default function LocationPage(){
    return (
        <>
            <NavBar />
            <Location noWidget={true} />

        </>
    )
}