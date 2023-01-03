import styles from "../styles/Widget.module.css"
import { motion, AnimatePresence } from "framer-motion"
import { useState, useRef, useEffect } from "react"
import HeightHandler from "../utilities/HeightHandler";
import { useElementPosition, getAbsoluteOffsetLeft, getAbsoluteOffsetTop } from "../utilities/useElementPosition";
import { BsBoundingBoxCircles } from "react-icons/bs";


export default function Widget(props){
    
    const {
        isOpen, setIsOpen, 
        background,
        height, width,
        children } = props;

    const [wopen, setWOpen] = useState(false);
    const [fixed, setFixed] = useState(false);
    const [zIndex, setZIndex] = useState(false);

    useEffect(() => {

        setTimeout(function(){
            setWOpen( isOpen );
        }, 300);
        setTimeout(function(){
            setFixed(isOpen );
        }, 800);
        setTimeout(function(){
            setZIndex(isOpen);
        }, 1200);

    }, [isOpen]);




    const heighthandler = new HeightHandler();
    const windowH =  heighthandler.getOuterWindowHeight();


   
    
    let cvariants = {
        open:{
            
            height: fixed ? [null, windowH] : height,
            width: fixed ? "100vw" : width,
            scale: fixed ? 1 : 25,
            position: fixed ? "fixed" : "relative",
            zIndex: 11,
            overflowY: "scroll",
            background: background[1],

        },
        
        closed:{
            
            height: fixed ? windowH : height,
            width:  fixed ? "100vw" : width,
            position: fixed ? "fixed" : "relative",
            scale:  fixed ? 25 : 1,
            zIndex : zIndex ? 11 : 10,
            overflowY: "visible",
            background: "transparent",

        }
    }
    
    function disableDocumentScroll() {
       
        if(typeof document !== 'undefined'){
            document.body.style.overflow = "hidden"

        }
       
    }


    return (
        <div >
            <motion.div  
                className={`${styles.widgetCover} `}
                variants={cvariants}
                animate={
                    wopen ? "open" : "closed"
                    
                }
                transition={{duration: .5}}
            >
                <motion.div className={`${styles.widget} ${ styles.absolute}`}
                    animate={{
                        background: wopen ? background[1] : background[0],
                        borderRadius: fixed ? 0 : 15,
                        boxShadow: wopen ? "none" : " 2px -2px 15px 2px rgba(114,196,145,0.75)",

                    }}
                    onClick={ () => {
                        disableDocumentScroll()
                        setIsOpen();
                    } }   
                >

                    { children }

                </motion.div>
            </motion.div>   
        </div>
        
            
        
    )
}