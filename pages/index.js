
import styles from "../styles/Home.module.css";

import LandingWrapper from "../components/LandingWrapper"
import NavBar from "../components/NavBar";

import Horario from "../components/wpages/Horario";
import Location from "../components/wpages/Location";
import Services from "../components/wpages/Services";
import Equipo from "../components/wpages/Equipo";
import Cita from "../components/wpages/Cita";
import MetodosDePago from "../components/wpages/MetodosDePago";
import Implant from "../components/Implant";


import { useState, useEffect, useRef} from "react"

export default function Home() {


  return (
    <div className={styles.container}>
      
      <LandingWrapper/>
      
      
     
      

    </div>
  )
}
