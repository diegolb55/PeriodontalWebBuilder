
import { useState, useEffect, useRef} from "react"
import styles from "../styles/Widgets.module.css";


import Horario from "../components/wpages/Horario";
import Location from "../components/wpages/Location";
import Services from "../components/wpages/Services";
import Equipo from "../components/wpages/Equipo";
import Cita from "../components/wpages/Cita";
import MetodosDePago from "../components/wpages/MetodosDePago";

export default function Widgets({ widgetControl }){
    const [, forceRender] = useState(Date.now());

    // widget references
    const horarioRef = useRef();
    const locationRef = useRef();
    const servicesRef = useRef();

    
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
        <div className={styles.absolutewrapper}>

           
            <div className={styles.filling}></div>

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
    )
}