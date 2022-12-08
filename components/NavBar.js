
import { AiOutlineMenuFold, AiOutlineMenuUnfold } from "react-icons/ai"
import { motion } from "framer-motion"
import { useState, useRef, useEffect } from "react"
import Link from "next/link";


export default function NavBar(){

    const [open, setOpen] = useState(false);


    return (
        <div  className="navbar">

            <Link href={"./"}>
                <div className="logo">

                </div>
            </Link>

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

           


        </div>
    )
}