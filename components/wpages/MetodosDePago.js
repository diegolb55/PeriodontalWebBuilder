import styles from "../../styles/MetodosDePago.module.css"
import { useState } from "react"
import Widget from "../Widget"

import ClosedContent from "./components/ClosedContent"
import OpenContent from "./components/OpenContent"
import Image from "next/image"

export default function MetodosDePago({noWidget, widgetControl, openWidget}){


    if(noWidget){ 
        return (
            <div className={styles.openContent} style={{height:"130vh"}}>
                <div>
                    <div className={styles.pagos}>
                        <div>
                            <h4>Metodos de Pago</h4>
                        </div>
                        <div></div>
                        <div>
                            <div>
                                <div></div>
                                <p>ath business</p>
                            </div>
                            <div>
                                <div></div>
                                <p>efectivo</p>
                            </div>
                            <div>
                                <div></div>
                                <p>cheque</p>
                            </div>
                        </div>
                    </div>
                    
                    <div className={styles.planes}>
                        <div>
                            <h4>Plan Medico</h4>
                        </div>
                        <div></div>
                        <div>
                            <div></div>
                            <p>triple S</p>
                        </div>
                    </div>
                </div>
                <div className={styles.action}>
                    <p>Para citas y preguntas no dude en llamar</p>

                    <div>
                        <button>llamar</button>
                        <p>787-777-7777</p>
                    </div>
                </div>

            </div>  
        )
    }

    return (
        <Widget
            isOpen={widgetControl?.current.metodosDePago}
            setIsOpen={() => {
                openWidget("metodosDePago")
            }}  
           
            height={150}
            width={150}
            background={["white", "white"]}
        >

            

            <ClosedContent isOpen={widgetControl?.current.metodosDePago} >
                <div className={styles.closedContent}>
                    <p>métodos de pago y plan médico:</p>
                    <div className={styles.circles}>
                        <div>
                            <Image src="/images/athmovil.png"
                                fill
                            />
                        </div>
                        <div>
                            <Image src="/images/cash.png"
                                fill
                            />
                        </div>
                        <div>
                            <Image src="/images/cheque.png"
                                fill
                            />
                        </div>
                        <div>
                            <Image src="/images/triples.png"
                                fill
                            />
                        </div>

                    </div>
                </div>    
            </ClosedContent>
           
            <OpenContent isOpen={widgetControl?.current.metodosDePago} >
                <div className={styles.openContent}>
                    <div>
                        <div className={styles.pagos}>
                            <div>
                                <h4>Metodos de Pago</h4>
                            </div>
                            <div></div>
                            <div>
                                <div>
                                    <div className={styles.opencircle}>
                                        <Image src="/images/athmovil.png"
                                            fill
                                        />
                                    </div>
                                    <p>ath movil</p>
                                </div>
                                <div>
                                    <div  className={styles.opencircle}>
                                        <Image src="/images/cash.png"
                                            fill
                                        />
                                    </div>
                                    <p>efectivo</p>
                                </div>
                                <div>
                                    <div  className={styles.opencircle}>
                                        <Image src="/images/cheque.png"
                                            fill
                                        />
                                    </div>
                                    <p>cheque</p>
                                </div>
                            </div>
                        </div>
                        
                        <div className={styles.planes}>
                            <div  >
                                <h4>Plan Medico</h4>
                            </div>
                            <div></div>
                            <div>
                                <div  className={styles.opencircle}>
                                    <Image src="/images/triples.png"
                                        fill
                                    />
                                </div>
                                <p>triple S</p>
                            </div>
                        </div>
                    </div>
                    <div className={styles.action}>
                        <p>Para citas y preguntas no dude en llamar</p>

                        <div>
                            <button>llamar</button>
                            <p>787-777-7777</p>
                        </div>
                    </div>

                </div>  
            </OpenContent>
              
            
            
        </Widget>
    )
}