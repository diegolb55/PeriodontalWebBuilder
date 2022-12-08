import styles from "../../styles/Horario.module.css";


import { useState } from "react"
import Widget from "../Widget"

import ClosedContent from "./components/ClosedContent"
import OpenContent from "./components/OpenContent"


export default function Horario({noWidget}){

    const [isOpen, setIsOpen] = useState(false);

    if (noWidget) {
        return (
            <div className={styles.openContent}>
                <p>This is the horario open</p>
            </div>  
        )
    }
    return (
        <Widget
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            wposition={{
                position:"absolute",
                top: 0,
                left: 50,
                // border: "2px solid blue",
            }}
            height={120}
            width={120}
            background={["rgb(141, 141, 181)", "coral"]}
        >

            

            <ClosedContent isOpen={isOpen} >
                <div className={styles.closedContent}>
                    <p>Horario</p>
                </div>    
            </ClosedContent>
           
            <OpenContent isOpen={isOpen} >
                <div className={styles.openContent}>
                    <p>This is the horario open</p>
                </div>  
            </OpenContent>
              
            
            
        </Widget>
    )
}