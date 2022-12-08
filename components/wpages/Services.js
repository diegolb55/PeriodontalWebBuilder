import styles from "../../styles/Services.module.css"
import { useState } from "react"
import Widget from "../Widget"

import ClosedContent from "./components/ClosedContent"
import OpenContent from "./components/OpenContent"

export default function Services({noWidget}){

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
                top: 0,
                right: "10%",
                height: "100%",
            }}
            height={"100%"}
            width={120}
            background={["rgb(141, 141, 181)", "green"]}
        >

            

            <ClosedContent isOpen={isOpen} >
                <div className={styles.closedContent}>
                    <p>Services</p>
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