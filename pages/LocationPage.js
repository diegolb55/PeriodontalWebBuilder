import Location from "../components/wpages/Location";
import NavBar from "../components/NavBar";


export default function LocationPage(){
    return (
        <>
            <NavBar fill={true}/>
            <Location noWidget={true} />

        </>
    )
}