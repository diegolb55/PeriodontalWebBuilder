import styles from "../../styles/Tratamientos.module.css"
import { useState } from "react"
import Image from "next/image"
import Widget from "../Widget"

import ClosedContent from "./components/ClosedContent"
import OpenContent from "./components/OpenContent"


export default function Tratamientos({noWidget, widgetControl, openWidget}){

    const treatmentbox = () => {
        return (
            <div className={styles.treatmentbox} >
                <p>Gummy Smile</p>
                <div className={styles.imgbox}>
                    <div>
                        <p>before</p>
                        <div>
                            <Image
                                src="/images/logo.png"
                                alt=""
                                fill
                            />
                        </div>
                    </div>
                    <div>
                        <p>after</p>
                        <div>
                            <Image
                                src="/images/logo.png"
                                alt=""
                                fill
                            />
                        </div>
                    </div>
                </div>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita quibusdam reprehenderit modi ea tenetur repudiandae nulla, necessitatibus recusandae ipsam. Rem iure dolorum cum magnam perspiciatis! Aperiam adipisci debitis possimus sint?
                </p>
            </div>
        )
    }
    if(noWidget){ 
        return (
            <div className={styles.openContent}>
                <h3>Condiciones y Enfermedades que tratamos</h3>
                <p>
                    Si usted padece alguna de las siguientes, le tenemos solución.
                    Obtenga tratamiento para los síntomas y enfermedades comunes 
                    para hacerle sentir alivio rápidamente y volver a ser tu mejor version saludable.
                </p>
                <div className={styles.treatments}>
                    { treatmentbox() }
                    { treatmentbox() }
                    { treatmentbox() }
                    { treatmentbox() }

                </div>
            </div>  
        )
    }

    return (
        <Widget
            isOpen={widgetControl?.current.services}
            setIsOpen={() => {
                openWidget("services")
            }}  
          
            height={340}
            width={120}
            background={["white", "white"]}
        >

            

            <ClosedContent isOpen={widgetControl?.current.services} >
                <div className={styles.closedContent}>
                    <div className={styles.wheading}>
                        <p>Services</p>
                        <p>tratamientos para:</p>
                    </div>
                    <div className={styles.wcol}>

                        <div className={`${styles.wrow} ${styles.fill}`}>
                            <p>gummy smile</p>
                        </div>
                        <div className={styles.wrow}>
                            <p>gummy smile</p>
                        </div>
                        <div className={`${styles.wrow} ${styles.fill}`}>
                            <p>gummy smile</p>
                        </div>
                        <div className={styles.wrow}>
                            <p>gummy smile</p>
                        </div>
                        <div className={`${styles.wrow} ${styles.fill}`}>
                            <p>gummy smile</p>
                        </div>
                        <div className={styles.wrow}>
                            <p>Y mas...</p>
                        </div>
                       
                        
                        
                    </div>
                </div>    
            </ClosedContent>
           
            <OpenContent isOpen={widgetControl?.current.services} >
                <div className={styles.openContent}>
                    <h3>Condiciones y Enfermedades que tratamos</h3>
                    <p>
                        Si usted padece alguna de las siguientes, le tenemos solución.
                        Obtenga tratamiento para los síntomas y enfermedades comunes 
                        para hacerle sentir alivio rápidamente y volver a ser tu mejor version saludable.
                    </p>
                    <div className={styles.treatments}>
                        { treatmentbox() }
                        { treatmentbox() }
                        { treatmentbox() }
                        { treatmentbox() }

                    </div>
                </div>  
            </OpenContent>
              
            
            
        </Widget>
    )
}