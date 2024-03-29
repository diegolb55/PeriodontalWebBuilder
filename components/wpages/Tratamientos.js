import styles from "../../styles/Tratamientos.module.css"
import { useState } from "react"
import Image from "next/image"
import Widget from "../Widget"

import ClosedContent from "./components/ClosedContent"
import OpenContent from "./components/OpenContent"

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import WidgetPro from "../WidgetPro"



export default function Tratamientos({noWidget, widgetControl, openWidget}){


    const treatments = [
        {   
            name:"Gummy Smile",
            text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
            molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
            numquam blanditiis harum quisquam eius`, 
            before:"/images/logo.png",
            after:"/images/logo.png" 
        },
        {   
            name:"Gummy Smile",
            text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
            molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
            numquam blanditiis harum quisquam eius`, 
            before:"/images/logo.png",
            after:"/images/logo.png" 
        },
        {   
            name:"Gummy Smile",
            text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
            molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
            numquam blanditiis harum quisquam eius`, 
            before:"/images/logo.png",
            after:"/images/logo.png" 
        },
        {   
            name:"Gummy Smile",
            text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
            molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
            numquam blanditiis harum quisquam eius`, 
            before:"/images/logo.png",
            after:"/images/logo.png" 
        },
        {   
            name:"Gummy Smile",
            text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
            molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
            numquam blanditiis harum quisquam eius`, 
            before:"/images/logo.png",
            after:"/images/logo.png" 
        },
        {   
            name:"Gummy Smile",
            text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
            molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
            numquam blanditiis harum quisquam eius`, 
            before:"/images/logo.png",
            after:"/images/logo.png" 
        },
       
    ]

    const getServices = () => 
        treatments?.map(
            (s) => 
                
                <SwiperSlide className={styles.myslide} key={Math.random()}>
                         <div className={styles.treatmentbox} >
                             <p>{ s.name }</p>
                             <div className={styles.imgbox}>
                               <div>
                                    <p>before</p>
                                    <div>
                                         <Image
                                            src={s.before}
                                            alt=""
                                            fill
                                        />
                                    </div>
                                </div>
                                <div>
                                    <p>after</p>
                                    <div>
                                        <Image
                                            src={s.after}
                                            alt=""
                                            fill
                                        />
                                    </div>
                                </div>
                            </div>
                            <p>
                                {s.text}
                            </p>
                        </div>
                    </SwiperSlide>
            
        );


    if(noWidget){ 
        return (
            <div className={styles.openContent}>
                <h3>Condiciones y Enfermedades que tratamos</h3>
                <p>
                    Si usted padece alguna de las siguientes, le tenemos solución.
                    Obtenga tratamiento para los síntomas y enfermedades comunes 
                    para hacerle sentir alivio rápidamente y volver a ser tu mejor version saludable.
                </p>
               
                <Swiper
                    slidesPerView={1.2}

                    breakpoints={{
                        600: {
                            slidesPerView: 1.5
                        },
                        800: {
                            slidesPerView: 2
                        },
                        1000: {
                            slidesPerView: 3
                        }
                    }}
                    spaceBetween={20}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination]}
                    className={styles.myswiper}
                >
                   { getServices() }
                </Swiper>

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
            isOpen={widgetControl?.current.services}
            setIsOpen={() => {
                openWidget("services")
            }}  
          
            height={340}
            width={"30vw"}
            background={["white", "white"]}
        >

            

            <ClosedContent isOpen={widgetControl?.current.services} >
                <div className={styles.closedContent}>
                    <div className={styles.wheading}>
                        <p>Services</p>
                        <p>tratamientos para:</p>
                    </div>
                    <div className={styles.wcol}>

                        <div className={`${styles.wrow} ${styles.fill}`}>
                            <p>gummy smile</p>
                        </div>
                        <div className={styles.wrow}>
                            <p>gummy smile</p>
                        </div>
                        <div className={`${styles.wrow} ${styles.fill}`}>
                            <p>gummy smile</p>
                        </div>
                        <div className={styles.wrow}>
                            <p>gummy smile</p>
                        </div>
                        <div className={`${styles.wrow} ${styles.fill}`}>
                            <p>gummy smile</p>
                        </div>
                        <div className={styles.wrow}>
                            <p>Y mas...</p>
                        </div>
                       
                        
                        
                    </div>
                </div>    
            </ClosedContent>
           
            <OpenContent isOpen={widgetControl?.current.services} >
            <div className={styles.openContent}>
                <h3>Condiciones y Enfermedades que tratamos</h3>
                <p>
                    Si usted padece alguna de las siguientes, le tenemos solución.
                    Obtenga tratamiento para los síntomas y enfermedades comunes 
                    para hacerle sentir alivio rápidamente y volver a ser tu mejor version saludable.
                </p>
               
                <Swiper
                    slidesPerView={1.2}

                    breakpoints={{
                        600: {
                            slidesPerView: 1.2 
                        },
                        800: {
                            slidesPerView: 2
                        },
                        1000: {
                            slidesPerView: 3
                        }
                    }}
                    spaceBetween={20}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination]}
                    className={styles.myswiper}
                >
                   { getServices() }
                </Swiper>

                <div className={styles.infobox}>
                    <p>Para citas y preguntas, no dude en llamar</p>
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
