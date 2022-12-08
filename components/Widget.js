import styles from "../styles/Widget.module.css"
import { motion, AnimatePresence } from "framer-motion"
import { useState, useRef, useEffect } from "react"


export default function Widget(props){
    

    const {
        isOpen, setIsOpen, 
        wposition, background,
        height, width,
        children} = props;

    const [wopen, setWOpen] = useState(false);
    const [fixed, setFixed] = useState(false);
    const [zIndex, setZIndex] = useState(false);

    useEffect(() => {
        setTimeout(function(){
            setWOpen(isOpen );
        }, 300);
        setTimeout(function(){
            setFixed(isOpen );
        }, 800);
        setTimeout(function(){
            setZIndex(isOpen);
        }, 1200);
    }, [isOpen]);

    let cvariants = {
        open:{
            /**
             * state 2 -- 
             * area = from 100 to 100vh * from 100 to 100vw
             * scale = area * 50
             * pos = from absolute to fixed
             * 
            */
            
            height: fixed ? "100vh":height,
            width: fixed ? "100vw":width,
            scale: fixed ? 1 : 25,
            position: fixed ? "fixed" : "relative",
            zIndex: 11,
            overflowY: "scroll"
           
        },
        
        closed:{
            /**
             * state 2 -- 
             * area = from 100vh to 100 * from 100vw to 100
             * scale = from (area * 50) to (area * 1)
             * pos = from fixed to absolute
             * 
            */
            
            height: fixed ? "100vh" : height,
            width:  fixed ? "100vw" : width,
            position: fixed ? "fixed" : "relative",
            scale:  fixed ? 25 : 1,
            zIndex : zIndex ? 11 : 10,
            overflowY: "visible",

        }
    }


    return (
        <div style={wposition} >

            <motion.div  className={`${styles.widgetCover} `}
                variants={cvariants}
                animate={
                    wopen ? "open" : "closed"
                }
                transition={{duration: .5}}
            >
                <motion.div className={`${styles.widget} ${ styles.absolute}`}
                    animate={{
                        background: wopen ? background[0] : background[1],
                        borderRadius: fixed ? 0 : 15,
                    }}
                    onClick={ () => setIsOpen( (b)=>!b) }   
                >


                    { children }


                </motion.div>
            </motion.div>   
             </div>
        
            
        
    )
}