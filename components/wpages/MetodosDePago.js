import styles from "../../styles/Tratamientos.module.css"
import { useState } from "react"
import Widget from "../Widget"

import ClosedContent from "./components/ClosedContent"
import OpenContent from "./components/OpenContent"

export default function MetodosDePago({noWidget, widgetControl, openWidget}){


    if(noWidget){ 
        return (
            <div className={styles.openContent}>
                <p>This is the widget open</p>
            </div>  
        )
    }

    return (
        <Widget
            isOpen={widgetControl?.current.metodosDePago}
            setIsOpen={() => {
                openWidget("metodosDePago")
            }}  
           
            height={120}
            width={120}
            background={["rgb(141, 141, 181)", "green"]}
        >

            

            <ClosedContent isOpen={widgetControl?.current.metodosDePago} >
                <div className={styles.closedContent}>
                    <p>Metodos de Pago</p>
                </div>    
            </ClosedContent>
           
            <OpenContent isOpen={widgetControl?.current.metodosDePago} >
                <div className={styles.openContent}>
                    <p>This is the widget open</p>
                </div>  
            </OpenContent>
              
            
            
        </Widget>
    )
}