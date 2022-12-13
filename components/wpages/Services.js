import styles from "../../styles/Services.module.css"
import { useState } from "react"
import Widget from "../Widget"

import ClosedContent from "./components/ClosedContent"
import OpenContent from "./components/OpenContent"

export default function Services({noWidget, widgetControl, openWidget}){


    if(noWidget){ 
        return (
            <div className={styles.openContent}>
                <p>This is the widget open</p>
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
            background={["rgb(141, 141, 181)", "green"]}
        >

            

            <ClosedContent isOpen={widgetControl?.current.services} >
                <div className={styles.closedContent}>
                    <p>Services</p>
                </div>    
            </ClosedContent>
           
            <OpenContent isOpen={widgetControl?.current.services} >
                <div className={styles.openContent}>
                    <p>This is the widget open</p>
                </div>  
            </OpenContent>
              
            
            
        </Widget>
    )
}