import styles from "../../styles/Horario.module.css";

import { AiOutlineClockCircle } from "react-icons/ai"
import { useState } from "react"
import Widget from "../Widget"

import ClosedContent from "./components/ClosedContent"
import OpenContent from "./components/OpenContent"
import Image from "next/image"

export default function Horario({noWidget}){

    const [isOpen, setIsOpen] = useState(false);

    if (noWidget) {
        return (
            <div className={styles.openContent}>
                    <div className={styles.imgbox}>
                        <Image
                            src="/images/horario.jpg"
                            alt=""
                            layout="fill"
                            objectFit='cover'

                        />
                    </div>
                    <div className={styles.schedulebox}>
                        <p>Horas de Oficina</p>
                        <div className={styles.schedule}>
                            <div className={styles.toprect}></div>
                            <p className={styles.siderect}>
                                abierto
                            </p>
                        </div>
                    </div>
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
            background={["white", "white"]}
        >

            

            <ClosedContent isOpen={isOpen} >
                <div className={styles.closedContent}>
                    <div className={styles.cheader}>
                        <AiOutlineClockCircle className={styles.cclock}/>
                        <p>  abierto, Manatí</p>
                    </div>
                    <p>Lunes: 9AM - 5PM</p>
                </div>    
            </ClosedContent>
           
            <OpenContent isOpen={isOpen} >
                <div className={styles.openContent}>
                    <div className={styles.imgbox}>
                        <Image
                            src="/images/horario.jpg"
                            alt=""
                            layout="fill"
                            objectFit='cover'

                        />
                    </div>
                    <div className={styles.schedulebox}>
                        <p>Horas de Oficina</p>
                        <div className={styles.schedule}>
                            <div className={styles.toprect}></div>
                            <p className={styles.siderect}>
                                abierto
                            </p>
                        </div>
                    </div>
                </div>  
            </OpenContent>
              
            
            
        </Widget>
    )
}