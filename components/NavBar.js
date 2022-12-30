
import { AiOutlineMenuFold, AiOutlineMenuUnfold } from "react-icons/ai"
import { motion } from "framer-motion"
import { useState, useRef, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"



export default function NavBar({ fill, isHome, closeAllWidgets, widgetControl }) {

    const [open, setOpen] = useState(false);

    const variants = {
        color:{
            background: "rgb(217, 217, 217)",
            boxShadow:"0px -2px 15px 0px rgba(114,196,145,0.75) inset"
        },
        nocolor:{
            background: "rgba(217, 217, 217, 0)",
            boxShadow:"none",
        }
    }

    let background =  widgetControl?.current.location 
                    || widgetControl?.current.services 
                    || fill;

    function enableDocumentScroll() {
       
        // if (typeof window !== 'undefined') {
        //     window.onscroll = function() {}; 
        // }

        if(typeof document !== 'undefined'){
            document.body.style.overflow = "scroll"

        }
    }

    return (
        <motion.div  className="navbar" 
            variants={variants}
            animate={background ? "color" : "nocolor"}
            transition={{duration: 1.5}}
            >

            {
                isHome ? 
                
                    <div className="logo" 
                        
                        onClick={ () => {
                            closeAllWidgets();
                            enableDocumentScroll();
                        }}
                   >
                        <Image
                            src="/images/logo.png"
                            alt=""
                            fill

                        />
                    </div>

                :
                <Link href={"./"}>
                    <div className="logo" >
                        <Image
                            src="/images/logo.png"
                            alt=""
                            fill
                        />
                    </div>
                </Link>
            }

            {/* menu icon */}
           
            { open ? 
                <AiOutlineMenuUnfold className="burger"
                    onClick={() => setOpen(false)}
                />
                :
                <AiOutlineMenuFold className="burger"
                    onClick={() => setOpen(true)}
                />
            }

            {/* link box */}
            <motion.div className="links"
                animate={{
                    right: open ? 0 : "-70%",
                }}
                transition={{type:"tween"}}

            >
                

                
                <Link href="./CitaPage" className="link">
                    <p onClick={ () => enableDocumentScroll() }>Citas</p>
                </Link>
                <Link href="./HorarioPage" className="link">
                    <p onClick={ () => enableDocumentScroll() }>Horario</p>
                </Link>
                <Link href="./EquipoPage" className="link">
                    <p onClick={ () => enableDocumentScroll() }>Equipo</p>
                </Link>
                <Link href="./TratamientosPage" className="link">
                    <p onClick={ () => enableDocumentScroll() }>Tratamientos</p>
                </Link> 
                <Link href="./LocationPage" className="link">
                    <p onClick={ () => enableDocumentScroll() }>Localizacion</p>
                </Link>
                <Link href="./MetodosDePagoPage" className="link">
                    <p onClick={ () => enableDocumentScroll() }>Metodos de Pago</p>
                </Link>                   
               

                
            </motion.div>

           


        </motion.div>
    )
}