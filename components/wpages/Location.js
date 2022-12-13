import styles from "../../styles/Location.module.css"
import { useState } from "react"
import Widget from "../Widget"

import ClosedContent from "./components/ClosedContent"
import OpenContent from "./components/OpenContent"
import {MdLocationOn} from "react-icons/md"
import Image from "next/image"

export default function Location({noWidget, widgetControl, openWidget}){


    if(noWidget){ 

        return (
            <div className={styles.openContent}>
            <div className={styles.mapbox}>
                <p>Trabajamos dos localizaciones distintas</p>
            </div>
            <div className={styles.infobox}>

                <div className={styles.box}>
                    <div>
                        <p>Ponce</p>
                    </div>
                    <div className={styles.boxRow}>
                        <p>Llamar</p>
                        <p>787-777-7777</p>
                        <button>call</button>
                    </div>
                    <div className={styles.boxRow}>
                        <p>Mapa</p>
                        <p>calle...</p>
                        <button>call</button>
                    </div>
                    <div className={styles.boxRow}>
                        <p>Horario</p>
                        <p>-- </p>
                        <button>call</button>
                    </div>
                </div>
            </div>
        </div>  
        )

    }

    return (
        <Widget
            isOpen={widgetControl?.current.location}
            setIsOpen={() => {
                openWidget("location")
            }}            
           
            height={120}
            width={120}
            background={["#ffffff", "#ffffff"]}
        >

            

            <ClosedContent isOpen={widgetControl?.current.location} >
                <div className={styles.closedContent}>
                    {/* img */}
                    <Image
                        src="/images/location.png"
                        alt=""
                        layout="fill"
                        objectFit='cover'

                    />
                    <div className={styles.gradientbox}>
                        <p>location</p>
                        <MdLocationOn style={{fontSize: "2rem"}}/>
                    </div>
                </div>    
            </ClosedContent>
           
            <OpenContent isOpen={widgetControl?.current.location} >
                <div className={styles.openContent}>
                    <div className={styles.mapbox}>
                        <p>Trabajamos dos localizaciones distintas</p>
                    </div>
                    <div className={styles.infobox}>

                        <div className={styles.box}>
                            <div>
                                <p>Ponce</p>
                            </div>
                            <div className={styles.boxRow}>
                                <p>Llamar</p>
                                <p>787-777-7777</p>
                                <button>call</button>
                            </div>
                            <div className={styles.boxRow}>
                                <p>Mapa</p>
                                <p>calle...</p>
                                <button>call</button>
                            </div>
                            <div className={styles.boxRow}>
                                <p>Horario</p>
                                <p>-- </p>
                                <button>call</button>
                            </div>
                        </div>
                    </div>
                </div>  
            </OpenContent>
              
            
            
        </Widget>
    )
}