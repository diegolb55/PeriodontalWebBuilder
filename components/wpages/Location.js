import styles from "../../styles/Location.module.css"
import { useState } from "react"
import Widget from "../Widget"

import ClosedContent from "./components/ClosedContent"
import OpenContent from "./components/OpenContent"

export default function Location({noWidget}){

    const [isOpen, setIsOpen] = useState(false);

    if(noWidget){ 
        return (
            <div className={styles.openContent}>
                <p>This is the widget open</p>
            </div>  
        )
    }

    return (
        <Widget
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            wposition={{
                // border:"2px solid blue",
                position:"absolute",
                bottom: 0,
                left: "10%",
            }}
            height={120}
            width={120}
            background={["rgb(141, 141, 181)", "green"]}
        >

            

            <ClosedContent isOpen={isOpen} >
                <div className={styles.closedContent}>
                    <p>Location</p>
                </div>    
            </ClosedContent>
           
            <OpenContent isOpen={isOpen} >
                <div className={styles.openContent}>
                    <p>This is the widget open</p>
                </div>  
            </OpenContent>
              
            
            
        </Widget>
    )
}