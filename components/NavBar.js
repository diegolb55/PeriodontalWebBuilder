
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

    function enableWindowScroll() {
       
        if (typeof window !== 'undefined') {
            window.onscroll = function() {}; 
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
                        enableWindowScroll();

                    } }>
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
                    <p onClick={ enableWindowScroll() }>Citas</p>
                </Link>
                <Link href="./HorarioPage" className="link">
                    <p onClick={ enableWindowScroll() }>Horario</p>
                </Link>
                <Link href="./EquipoPage" className="link">
                    <p onClick={ enableWindowScroll() }>Equipo</p>
                </Link>
                <Link href="./TratamientosPage" className="link">
                    <p onClick={ enableWindowScroll() }>Tratamientos</p>
                </Link> 
                <Link href="./LocationPage" className="link">
                    <p onClick={ enableWindowScroll() }>Localizacion</p>
                </Link>
                <Link href="./MetodosDePagoPage" className="link">
                    <p onClick={ enableWindowScroll() }>Metodos de Pago</p>
                </Link>                   
               

                
            </motion.div>

           


        </motion.div>
    )
}