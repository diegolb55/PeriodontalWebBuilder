import styles from "../../styles/Location.module.css"
import { useState } from "react"
import Widget from "../Widget"

import ClosedContent from "./components/ClosedContent"
import OpenContent from "./components/OpenContent"
import {MdLocationOn} from "react-icons/md"
import Image from "next/image"
import WidgetPro from "../WidgetPro"

export default function Location({noWidget, widgetControl, openWidget}){


    if(noWidget){ 

        return (
            <div className={styles.openContent}>
                <div className={styles.toprect}></div>
                <div className={styles.mapbox}>
                    <p>Trabajamos dos localizaciones distintas</p>
                    <div className={styles.maps}>
                        <div className={styles.map}>
                            <p>Manati</p>
                            <div>
                                <Image src="/images/manati.png"
                                    alt=""
                                    fill
                                    style={{objectFit:"cover"}}
                                />
                            </div>
                        </div>
                        <div className={styles.map}>
                            <p>Ponce</p>
                            <div>
                                <Image src="/images/manati.png"
                                    alt=""
                                    fill
                                    style={{objectFit:"cover"}}
                                />                            
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.infobox}>
                    <p>Para citas y preguntas, no dude en llamar</p>
                    <div>
                        <button>llamar</button>
                        <p>787-777-7777</p>
                    </div>
                   
                </div>
        </div>  
        )

    }

    return (
        <WidgetPro
            isOpen={widgetControl?.current.location}
            setIsOpen={() => {
                openWidget("location")
            }}            
           
            height={120}
            width={"30vw"}
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
                    <div className={styles.toprect}></div>
                    <div className={styles.mapbox}>
                        <p>Trabajamos dos localizaciones distintas</p>
                        <div className={styles.maps}>
                            <div className={styles.map}>
                                <p>Manati</p>
                                <div>
                                    <Image src="/images/manati.png"
                                        alt=""
                                        fill
                                        style={{objectFit:"cover"}}
                                    />
                                </div>
                            </div>
                            <div className={styles.map}>
                                <p>Ponce</p>
                                <div>
                                    <Image src="/images/manati.png"
                                        alt=""
                                        fill
                                        style={{objectFit:"cover"}}
                                    />                            
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.infobox}>
                        <p>Para citas y preguntas, no dude en llamar.</p>
                        <div>
                            <button>llamar</button>
                            <p>787-777-7777</p>
                        </div>
                    
                    </div>
                </div> 
            </OpenContent>
              
            
            
        </WidgetPro>
    )
}