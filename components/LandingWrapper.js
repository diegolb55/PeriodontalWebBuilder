import styles from "../styles/LandingWrapper.module.css"
import Widgets from "./Widgets"
import NavBar from "./NavBar";
import { useState, useRef } from "react";
import Implant from "../components/Implant";


export default function LandingWrapper() {

    const [, forceRender] = useState(Date.now());

    // object reference
    const widgetControl = useRef({
        horario: false,
        location: false,
        services: false,
        equipo: false,
        cita: false,
        metodosDePago: false,
    });

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
        }, 100)
        
    }

    const closeAllWidgets = () => {
        for (let p in widgetControl.current){
        widgetControl.current[p] = false;
        }
        forceRender(Date.now());
    }

    return (
        <div className={styles.wrapper}>

             
            {/* NAVIGATION */}
            <NavBar 
                isHome={true} 
                closeAllWidgets={closeAllWidgets} 
                widgetControl={widgetControl}
            />

            {/* BACKGROUND BOXES */}
            <div className={styles.sec12}>
                <div className={styles.b1}></div>
                <div className={styles.b2}>
                    <p>bienvenidos</p>
                    <h2>Periodontal &<br/> Oral Health</h2>
                    <p>Dr Gaspar Lugo Morales</p>
                </div>
            </div>
            <div className={styles.sec34}>

                {/*  3D -- Model */}
                <div style={{
                        // border: "2px solid red",
                    
                        height: "100%",
                        width: "100%",
                        maxWidth:700,

                        position:"absolute",
                        bttom: 0,
                        right: 0,
                        zIndex: 10,
                    }}>
                    <Implant />
                </div>

                <div className={styles.b3}>
                    <p>Contactanos para<br/> citas y preguntas</p>
                    <button>llamar</button>
                </div>
                <div className={styles.b4}>
                    <div className={styles.c1}>
                        <div className={styles.c1a}></div>
                    </div>
                    <div className={styles.b4r}>
                        <div className={styles.b4rc}></div>
                        <div className={styles.b4rc1}>
                            <div className={styles.b4rc1a}></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.sec5678}>
                <div className={styles.b5}></div>
                <div className={styles.b6}></div>
                <div className={styles.b7}></div>
                <div className={styles.b8}></div>

            </div>
            <div className={styles.sec91011}>
                <div className={styles.b9}></div>
                <div className={styles.b10}></div>
                <div className={styles.b11}></div>

            </div>

            {/* WIDGETS */}
            <Widgets widgetControl={widgetControl} openWidget={openWidget}/>

        </div>
    )
}