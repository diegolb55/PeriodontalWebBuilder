
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

  const [, forceRender] = useState(Date.now());
  // widget references
  const horarioRef = useRef();
  const locationRef = useRef();
  const servicesRef = useRef();

  // object reference
  const widgetControl = useRef({
    horario: false,
    location: false,
    services: false,
    equipo: false,
    cita: false,
    metodosDePago: false,
  });
  const closeAllWidgets = () => {
    for (let p in widgetControl.current){
      widgetControl.current[p] = false;
    }
    forceRender(Date.now());
  }
  const openWidget = (s) => {

    // closeAllPages();

    switch(s){
      
      case "horario":
        widgetControl.current.horario = true;
        break;
      case "location":
        widgetControl.current.location = true;
        break;
      case "services":
        widgetControl.current.services = true;
        break;
      case "equipo":
        widgetControl.current.equipo = true;
        break;
      case "cita":
        widgetControl.current.cita = true;
        break;
      case "metodosDePago":
        widgetControl.current.metodosDePago = true;
        break;
      default:
        break;
      
    };
    /**
     * Rendering index and widget pages again, so that 
     * the pages evaluate the updated ref value and change accordingly. 
     */
    setTimeout(()=>{
      forceRender(Date.now());
    }, 500)
    
  }


  return (
    <div className={styles.container}>
      
      <LandingWrapper/>
      <NavBar 
        isHome={true} 
        closeAllWidgets={closeAllWidgets} 
        widgetControl={widgetControl}
      />
      
      <div className={styles.absolutewrapper}>

        {/* Model */}
        
        <Implant />

        {/* section1 */}
        <div className={styles.section1}>
          <div >
            <div>
              <Horario widgetControl={widgetControl} openWidget={openWidget}/>
              <Location widgetControl={widgetControl} openWidget={openWidget}/>
            </div>
            <Services widgetControl={widgetControl} openWidget={openWidget}/>
          </div>

          <div className={styles.videowrapper}>
            <iframe 
              
              src="https://www.youtube.com/embed/-hVy_jxeMeA" 
              title="YouTube video player" 
              frameBorder="0" 
              allowFullScreen></iframe>

          </div>
        </div>


        {/* Section 2 */}
        <div className={styles.section2}>

            <div style={{}}>
              <Equipo widgetControl={widgetControl} openWidget={openWidget}/>
            </div>

            <div styke={{}}>
              <Cita widgetControl={widgetControl} openWidget={openWidget}/>
              <MetodosDePago widgetControl={widgetControl} openWidget={openWidget}/>
            </div>

        </div>

      </div>
      

    </div>
  )
}
