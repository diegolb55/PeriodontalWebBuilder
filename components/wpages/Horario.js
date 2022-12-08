import styles from "../../styles/Horario.module.css";

import { AiOutlineClockCircle } from "react-icons/ai"
import { useState } from "react"
import Widget from "../Widget"

import ClosedContent from "./components/ClosedContent"
import OpenContent from "./components/OpenContent"
import Image from "next/image"
import { MdLocationOn } from "react-icons/md"

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
                            <div className={styles.days}>
                                
                                <div className={styles.scheduleRow}>
                                    <p style={{fontSize:"1.5rem"}}>dia</p>
                                    <p>domingo</p>
                                    <p>lunes</p>
                                    <p>martes</p>
                                    <p>miercoles</p>
                                    <p>jueves</p>
                                    <p>viernes</p>
                                    <p>sabado</p>
                                    
                                </div>
                                <div className={styles.scheduleRow}>
                                    <AiOutlineClockCircle style={{fontSize: "2rem"}}/>
                                    <p>-</p>
                                    <p>9am - 5pm</p>
                                    <p>9am - 5pm</p>
                                    <p>-</p>
                                    <p>9am - 5pm</p>
                                    <p>9am - 5pm</p>
                                    <p>-</p>
                                </div>
                                <div className={styles.scheduleRow}>
                                    <MdLocationOn style={{fontSize: "2rem"}}/>
                                    <p>-</p>
                                    <p>Ponce</p>
                                    <p>Manati</p>
                                    <p>-</p>
                                    <p>Manati</p>
                                    <p>Ponce</p>
                                    <p>-</p>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>  
            </OpenContent>
              
            
            
        </Widget>
    )
}