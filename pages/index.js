
import styles from "../styles/Home.module.css";

import LandingWrapper from "../components/LandingWrapper"
import NavBar from "../components/NavBar";
import Horario from "../components/wpages/Horario";
import Location from "../components/wpages/Location";
import Services from "../components/wpages/Services";

export default function Home() {
  return (
    <div className={styles.container}>

      <LandingWrapper/>

      <NavBar />
      
      <div style={{
        border:"2px solid black",
        height: "50vh",
        width: "100%",
        top: "115vh", position: "absolute",
        maxWidth: 500,
      }}>
        <Horario />
        <Location/>
        <Services />
      </div>
      

      

    </div>
  )
}
