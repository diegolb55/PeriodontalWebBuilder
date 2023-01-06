
import { AiOutlineMenuFold, AiOutlineMenuUnfold } from "react-icons/ai"
import { motion } from "framer-motion"
import { useState, useRef, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"



export default function NavBar({ fill, isHome, closeAllWidgets, widgetControl }) {

    const [open, setOpen] = useState(false);

    

   

    function enableDocumentScroll() {
       

        if(typeof document !== 'undefined'){
            document.body.style.overflow = "scroll"

        }
    }

    return (
        <div  className="navbar">
            {
                isHome ? 
                
                    <div className="logo" 
                        
                        onClick={ () => {
                            closeAllWidgets();
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
                

                
                {
                    isHome ? 
                    <div href="./" className="link">
                        <p onClick={ () => {
                            closeAllWidgets();
                            setOpen(false);
                        } }>Home</p>
                    </div>
                    :
                    <Link href="./" className="link">
                        <p onClick={ () => enableDocumentScroll() }>Home</p>
                    </Link>
                }
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

           


        </div>
    )
}