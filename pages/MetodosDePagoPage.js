import NavBar from "../components/NavBar";
import MetodosDePago from "../components/wpages/MetodosDePago";

export default function LocationPage(){
    return (
        <>
            <NavBar />
            <MetodosDePago noWidget={true} style={{height: "100vh"}}/>

        </>
    )
}