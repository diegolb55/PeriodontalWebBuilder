import styles from "../../styles/MetodosDePago.module.css"
import { useState } from "react"
import Widget from "../Widget"
import WidgetPro from "../WidgetPro"

import ClosedContent from "./components/ClosedContent"
import OpenContent from "./components/OpenContent"
import Image from "next/image"

export default function MetodosDePago({noWidget, widgetControl, openWidget}){


    if(noWidget){ 
        return (
            <div className={styles.openContent} style={{minHeight:"130vh"}}>
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
                                        alt=""
                                        fill
                                    />
                                </div>
                                <p>ath movil</p>
                            </div>
                            <div>
                                <div  className={styles.opencircle}>
                                    <Image src="/images/cash.png"
                                        alt=""
                                        fill
                                    />
                                </div>
                                <p>efectivo</p>
                            </div>
                            <div>
                                <div  className={styles.opencircle}>
                                    <Image src="/images/cheque.png"
                                        alt=""
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
                                    alt=""
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
        )
    }

    return (
        <WidgetPro
            isOpen={widgetControl?.current.metodosDePago}
            setIsOpen={() => {
                openWidget("metodosDePago")
            }}  
           
            height={150}
            width={"30vw"}
            background={["white", "white"]}
        >

            

            <ClosedContent isOpen={widgetControl?.current.metodosDePago} >
                <div className={styles.closedContent}>
                    <p>métodos de pago y plan médico:</p>
                    <div className={styles.circles}>
                        <div>
                            <Image src="/images/athmovil.png"
                                alt=""
                                fill
                            />
                        </div>
                        <div>
                            <Image src="/images/cash.png"
                                alt=""
                                fill
                            />
                        </div>
                        <div>
                            <Image src="/images/cheque.png"
                                alt=""
                                fill
                            />
                        </div>
                        <div>
                            <Image src="/images/triples.png"
                                alt=""
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
                                            alt=""
                                            fill
                                        />
                                    </div>
                                    <p>ath movil</p>
                                </div>
                                <div>
                                    <div  className={styles.opencircle}>
                                        <Image src="/images/cash.png"
                                            alt=""
                                            fill
                                        />
                                    </div>
                                    <p>efectivo</p>
                                </div>
                                <div>
                                    <div  className={styles.opencircle}>
                                        <Image src="/images/cheque.png"
                                            alt=""
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
                                        alt=""
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
              
            
            
        </WidgetPro>
    )
}