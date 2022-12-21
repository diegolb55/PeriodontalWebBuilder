import styles from "../../styles/Equipo.module.css"
import { useState } from "react"
import Widget from "../Widget"
import Image from "next/image"

import ClosedContent from "./components/ClosedContent"
import OpenContent from "./components/OpenContent"

export default function Equipo({noWidget, widgetControl, openWidget}){


    if(noWidget){ 
        return (
        <div className={styles.openContent}>
            <div className={styles.history}>
                <div>
                    <Image
                        src="/images/dentalg.jpg"
                        alt=""
                        layout="fill"
                        objectFit='cover'

                    />
                </div>
                <div>
                    <h3>Historia</h3>
                    <p>
                        Oficina ofreciendo tratamientos a pacientes con enfermedades periodontales e implantologia oral desde el año 2000.
                    </p>
                </div>
            </div>
            <div className={styles.staff}>
                <div>
                    
                </div>
                <div>
                    <p>Doctor Name</p>
                    <div>
                        <p>  Periodoncista con X años de experiencia en enfermedades de encias e implantologia. Doctor en medicina dental con educacion en Boston University Salud y Dental Medicine 1988-1992.</p>
                        <p>  En el campo de especialidad y New Jersey 2000 (Currently Rudgers University). Afan de las artes finas, los viajes y la arquitectura </p>
                    </div>
                    
                </div>
            </div>
            <div className={styles.staff}>
                <div></div>
                <div></div>
            </div>
            <div className={styles.staff}>
                <div></div>
                <div></div>
            </div>

        
        </div>  
        )
    }

    return (
        <Widget
            isOpen={widgetControl?.current.equipo}
            setIsOpen={() => {
                openWidget("equipo")
            }}  
          
            height={200}
            width={250}
            background={["#72c492", "white"]}
        >

            

            <ClosedContent isOpen={widgetControl?.current.equipo} 
                
            >
                <div className={styles.closedContent}>
                    {/* img */}
                    <Image
                        src="/images/dentalg.jpg"
                        alt=""
                        layout="fill"
                        objectFit='cover'

                    />
                    <div className={styles.gradientbox}>
                        <p>Equipo Dental <br/> acogedor</p>
                        
                        
                    </div>
                </div>      
            </ClosedContent>
           
            <OpenContent isOpen={widgetControl?.current.equipo} >
                <div className={styles.openContent}>
                    <div className={styles.history}></div>
                    <div className={styles.staff}>
                        <div></div>
                        <div></div>
                    </div>
                    <div className={styles.staff}></div>
                    <div className={styles.staff}></div>

                    

                </div>  
            </OpenContent>
              
            
            
        </Widget>
    )
}