import styles from "../../styles/Cita.module.css"
import Widget from "../Widget"
import WidgetPro from "../WidgetPro"

import ClosedContent from "./components/ClosedContent"
import OpenContent from "./components/OpenContent"

import {BsTelephonePlusFill} from "react-icons/bs"

export default function Cita({noWidget, widgetControl, openWidget}){


    if(noWidget){ 
        return (
            <div className={styles.openContent} >
                {/* CITA WRAPPER */}
                <div className={styles.citaWrapper}>
                    <div className={styles.citaGrid}>
                        <div className={styles.a}></div>
                        <div className={styles.b}></div>
                        <div className={styles.a}></div>
                        <div className={styles.b}></div>

                        <div className={styles.b}></div>
                        <div className={styles.c}></div>
                        <div className={styles.b}></div>
                        <div className={styles.c}></div>

                        <div className={styles.a}></div>
                        <div className={styles.b}></div>
                        <div className={styles.a}></div>
                        <div className={styles.b}></div>
                    </div>
                </div>

                {/* WARNING BOX */}
                <div className={styles.warningbox}>
                    <div></div>
                    <h4>Importante</h4>
                    <p>No se presente en la oficina para registrar su cita.</p>
                </div>

                {/* White Heading */}
                <p className={styles.question}>¿Cómo registramos su cita</p>

                {/* Steps */}
                <div className={styles.steps}>
                    <div className={styles.step}>
                        <h4>Paso 1</h4>
                        <p>Llamar al  787-414-5747</p>
                        <p>Si estamos ocupados, puede dejar un mensaje</p>
                        <p>Tener a la mano: nombre y referido de dentista</p>
                    </div>
                    <div className={styles.step}>
                        <h4>Paso 1</h4>
                        <p>Llamar al  787-414-5747</p>
                        <p>Si estamos ocupados, puede dejar un mensaje</p>
                        <p>Tener a la mano: nombre y referido de dentista</p>
                    </div>
                    <div className={styles.step}>
                        <h4>Paso 1</h4>
                        <p>Llamar al  787-414-5747</p>
                        <p>Si estamos ocupados, puede dejar un mensaje</p>
                        <p>Tener a la mano: nombre y referido de dentista</p>
                    </div>
                </div>

            </div>  
        )
    }

    return (
        <WidgetPro
            isOpen={widgetControl?.current.cita}
            setIsOpen={() => {
                openWidget("cita")
            }}  
           
            height={120}
            width={"30vw"}
            background={["white", "white"]}
        >

            

            <ClosedContent isOpen={widgetControl?.current.cita} >
                <div className={styles.closedContent}>
                    <p>Contactanos hoy! <br/> Crea tu cita.</p>
                    <p>3 pasos</p>
                    <div className={styles.citaIcon}>
                        <BsTelephonePlusFill />
                    </div>
                </div>    
            </ClosedContent>
           
            <OpenContent isOpen={widgetControl?.current.cita} >
            <div className={styles.openContent} >
                {/* CITA WRAPPER */}
                <div className={styles.citaWrapper}>
                    <div className={styles.citaGrid}>
                        <div className={styles.a}></div>
                        <div className={styles.b}></div>
                        <div className={styles.a}></div>
                        <div className={styles.b}></div>

                        <div className={styles.b}></div>
                        <div className={styles.c}></div>
                        <div className={styles.b}></div>
                        <div className={styles.c}></div>

                        <div className={styles.a}></div>
                        <div className={styles.b}></div>
                        <div className={styles.a}></div>
                        <div className={styles.b}></div>
                    </div>
                </div>

                {/* WARNING BOX */}
                <div className={styles.warningbox}>
                    <div></div>
                    <h4>Importante</h4>
                    <p>No se presente en la oficina para registrar su cita.</p>
                </div>

                {/* White Heading */}
                <p className={styles.question}>¿Cómo registramos su cita</p>

                {/* Steps */}
                <div className={styles.steps}>
                    <div className={styles.step}>
                        <h4>Paso 1</h4>
                        <p>Llamar al  787-414-5747</p>
                        <p>Si estamos ocupados, puede dejar un mensaje</p>
                        <p>Tener a la mano: nombre y referido de dentista</p>
                    </div>
                    <div className={styles.step}>
                        <h4>Paso 1</h4>
                        <p>Llamar al  787-414-5747</p>
                        <p>Si estamos ocupados, puede dejar un mensaje</p>
                        <p>Tener a la mano: nombre y referido de dentista</p>
                    </div>
                    <div className={styles.step}>
                        <h4>Paso 1</h4>
                        <p>Llamar al  787-414-5747</p>
                        <p>Si estamos ocupados, puede dejar un mensaje</p>
                        <p>Tener a la mano: nombre y referido de dentista</p>
                    </div>
                </div>

            </div>  
            </OpenContent>
              
            
            
        </WidgetPro>
    )
}