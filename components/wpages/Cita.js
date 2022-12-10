import styles from "../../styles/Services.module.css"
import { useState } from "react"
import Widget from "../Widget"

import ClosedContent from "./components/ClosedContent"
import OpenContent from "./components/OpenContent"

export default function Cita({noWidget, widgetControl, openWidget}){


    if(noWidget){ 
        return (
            <div className={styles.openContent}>
                <p>This is the widget open</p>
            </div>  
        )
    }

    return (
        <Widget
            isOpen={widgetControl?.current.cita}
            setIsOpen={() => {
                openWidget("cita")
            }}  
           
            height={120}
            width={120}
            background={["rgb(141, 141, 181)", "green"]}
        >

            

            <ClosedContent isOpen={widgetControl?.current.cita} >
                <div className={styles.closedContent}>
                    <p>Cita</p>
                </div>    
            </ClosedContent>
           
            <OpenContent isOpen={widgetControl?.current.cita} >
                <div className={styles.openContent}>
                    <p>This is the widget open</p>
                </div>  
            </OpenContent>
              
            
            
        </Widget>
    )
}