import styles from "../../styles/Services.module.css"
import { useState } from "react"
import Widget from "../Widget"

import ClosedContent from "./components/ClosedContent"
import OpenContent from "./components/OpenContent"

export default function Equipo({noWidget, widgetControl, openWidget}){


    if(noWidget){ 
        return (
            <div className={styles.openContent}>
                <p>This is the widget open</p>
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
            width={200}
            background={["rgb(141, 141, 181)", "green"]}
        >

            

            <ClosedContent isOpen={widgetControl?.current.equipo} >
                <div className={styles.closedContent}>
                    <p>Equipo</p>
                </div>    
            </ClosedContent>
           
            <OpenContent isOpen={widgetControl?.current.equipo} >
                <div className={styles.openContent}>
                    <p>This is the widget open</p>
                </div>  
            </OpenContent>
              
            
            
        </Widget>
    )
}