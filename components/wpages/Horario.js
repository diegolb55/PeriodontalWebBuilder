import styles from "../../styles/Horario.module.css";

import { AiOutlineClockCircle } from "react-icons/ai"
import { useState } from "react"
import Widget from "../Widget"

import ClosedContent from "./components/ClosedContent"
import OpenContent from "./components/OpenContent"
import Image from "next/image"
import { MdLocationOn } from "react-icons/md"

import PeriodontalSchedule from "../../utilities/PeriodontalSchedule";

export default function Horario({noWidget}){

    const [isOpen, setIsOpen] = useState(false);

    const obj = [
        {
            day: "domingo",
            time: "-",
            location: "-"
        },
        {
            day: "lunes",
            time: "9am - 5pm",
            location: "Ponce",
        },
        {
            day: "martes",
            time: "9am - 5pm",
            location: "Manati",
        },
        {
            day: "miercoles",
            time: "-",
            location: "-"
        },
        {
            day: "jueves",
            time: "9am - 5pm",
            location: "Manati",
        },
        {
            day: "viernes",
            time: "9am - 5pm",
            location: "Manati",
        },
        {
            day: "sabado",
            time: "-",
            location: "-"
        },
    ]
        
    let date = new Date();
    const schedule = new PeriodontalSchedule(obj, date);
    console.log(schedule.isOpen())

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
                                { schedule?.isOpen() ? "abierto" : "cerrado"}
                            </p>
                            <div className={styles.days}>
                                
                                <div className={styles.scheduleRow}>
                                    <p style={{fontSize:"1.5rem"}}>dia</p>
                                    
                                    { schedule.weekdays }
                                    
                                </div>
                                <div className={styles.scheduleRow}>
                                    <AiOutlineClockCircle style={{fontSize: "2rem"}}/>
                                    
                                    { schedule.weekhours}

                                </div>
                                <div className={styles.scheduleRow}>
                                    <MdLocationOn style={{fontSize: "2rem"}}/>
                                    
                                    { schedule.weeklocations }

                                </div>
                            </div>
                            
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
                                { schedule?.isOpen() ? "abierto" : "cerrado"}
                            </p>
                            <div className={styles.days}>
                                
                                <div className={styles.scheduleRow}>
                                    <p style={{fontSize:"1.5rem"}}>dia</p>
                                    
                                    { schedule.weekdays }
                                    
                                </div>
                                <div className={styles.scheduleRow}>
                                    <AiOutlineClockCircle style={{fontSize: "2rem"}}/>
                                    
                                    { schedule.weekhours}

                                </div>
                                <div className={styles.scheduleRow}>
                                    <MdLocationOn style={{fontSize: "2rem"}}/>
                                    
                                    { schedule.weeklocations }

                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>  
            </OpenContent>
              
            
            
        </Widget>
    )
}