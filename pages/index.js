
import styles from "../styles/Home.module.css";

import LandingWrapper from "../components/LandingWrapper"
import NavBar from "../components/NavBar";
import Horario from "../components/wpages/Horario";
import Location from "../components/wpages/Location";
import Services from "../components/wpages/Services";

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
      // case "home":
      //   goHome();
      //   break;
      case "horario":
        widgetControl.current.horario = true;
        break;
      case "location":
        widgetControl.current.location = true;
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
      
      <div style={{
        // border:"2px solid black",
        height: "50vh",
        width: "100%",
        top: "115vh", position: "absolute",
        maxWidth: 500,
      }}>
        <Horario widgetControl={widgetControl} openWidget={openWidget}/>
        <Location widgetControl={widgetControl} openWidget={openWidget}/>
        <Services widgetControl={widgetControl} openWidget={openWidget}/>
      </div>
      

      

    </div>
  )
}
