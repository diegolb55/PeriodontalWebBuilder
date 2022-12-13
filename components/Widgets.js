
import { useState, useEffect, useRef} from "react"
import styles from "../styles/Widgets.module.css";


import Horario from "../components/wpages/Horario";
import Location from "../components/wpages/Location";
import Tratamientos from "../components/wpages/Tratamientos";
import Equipo from "../components/wpages/Equipo";
import Cita from "../components/wpages/Cita";
import MetodosDePago from "../components/wpages/MetodosDePago";

export default function Widgets({ widgetControl, openWidget }){

    




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
                <Tratamientos widgetControl={widgetControl} openWidget={openWidget}/>
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