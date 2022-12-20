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
            <div className={styles.history}></div>
            <div className={styles.staff}></div>
            <div className={styles.staff}></div>
            <div className={styles.staff}></div>

        
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
                    <div className={styles.staff}></div>
                    <div className={styles.staff}></div>
                    <div className={styles.staff}></div>

                    

                </div>  
            </OpenContent>
              
            
            
        </Widget>
    )
}