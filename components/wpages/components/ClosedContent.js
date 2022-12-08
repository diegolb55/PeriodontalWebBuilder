import {motion, AnimatePresence, usePresence} from "framer-motion"
import { useState, useEffect } from "react";


export default function ClosedContent(props){

    const {isOpen, style, children} = props;

    const [show, setShow] = useState(0);

    useEffect(()=>{
        setShow(0);
        setTimeout(()=>{
            if(!isOpen){
                setShow(-1)
            }
            
        }, 1000)
    }, [isOpen]);

    return (
        <AnimatePresence>

            {show === -1 && (
                <motion.div 
                    style={ style ? style : {
                        height: "100%", 
                        position:"relative",
                        padding: 5,
                    }}
                    initial={{opacity: 1}}
                    animate={{ opacity: 1}}
                    transition={{duration:.2}}
                    exit={{opacity:0}}
                >
                    { children }    

                </motion.div>
            )}

        </AnimatePresence>
    )
}