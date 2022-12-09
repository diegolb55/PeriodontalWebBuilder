
import { AiOutlineMenuFold, AiOutlineMenuUnfold } from "react-icons/ai"
import { motion } from "framer-motion"
import { useState, useRef, useEffect } from "react"
import Link from "next/link"



export default function NavBar({ fill, isHome, closeAllWidgets, widgetControl }) {

    const [open, setOpen] = useState(false);
    // console.log(widgetControl?.current.location || fill)

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

    return (
        <motion.div  className="navbar" 
            variants={variants}
            animate={ widgetControl?.current.location || fill ? "color" : "nocolor"}
            transition={{duration: 1.5}}
            >

            {
                isHome ? 
                
                    <div className="logo" onClick={()=> closeAllWidgets()}>

                    </div>

                :
                <Link href={"./"}>
                    <div className="logo">

                    </div>
                </Link>
            }

            {/* link box */}
            <motion.div className="links"
                animate={{
                    right: open ? 0 : "-70%",
                }}
                transition={{type:"tween"}}

            >
                {/* menu icon */}
                <motion.div 
                    animate={{
                        // border: "2px solid black",
                        display:"flex",
                        justifyContent:"center",
                        alignItems:'center',
                        position:"absolute",
                        height: "10vh",
                        top: 0,
                        left: open ? 20 : -60,
                    }}
                    transition={{type:"tween"}}
                >
                    { open ? 
                        <AiOutlineMenuUnfold className="burger"
                            onClick={() => setOpen(false)}
                        
                        />
                        :
                        <AiOutlineMenuFold className="burger"
                            onClick={() => setOpen(true)}
                            
                        />
                    }
                </motion.div>

                
                <Link href="#" className="link">
                    <p>Citas</p>
                </Link>
                <Link href="./HorarioPage" className="link">
                    <p>Horario</p>
                </Link>
                <Link href="#" className="link">
                    <p>Equipo</p>
                </Link>
                <Link href="#" className="link">
                    <p>Tratamientos</p>
                </Link> 
                <Link href="./LocationPage" className="link">
                    <p>Localizacion</p>
                </Link>
                <Link href="#" className="link">
                    <p>Metodos de Pago</p>
                </Link>                   
               

                
            </motion.div>

           


        </motion.div>
    )
}