import {motion, AnimatePresence} from "framer-motion"
import { useState, useEffect } from "react";

export default function OpenContent(props){
    const {isOpen, style, children} = props;

    // const [show, setShow] = useState(0);

    // useEffect(()=>{
    //     setShow(0);
    //     setTimeout(()=>{
    //         if(isOpen){
    //             setShow(1)
    //         }
            
    //     }, 1200)
    // }, [isOpen]);

    return (
        <AnimatePresence>
            {/* show === 1 */}
            { isOpen && (
                <motion.div 
                    style={ style ? style : {
                        height: "100%", 
                        position:"relative"
                    }}
                    initial={{opacity: 0}}
                    animate={{ opacity: 1}}
                    transition={{duration:.3}}
                    exit={{opacity:0}}
                >
                    { children }    

                </motion.div>
            )}

        </AnimatePresence>
    )
}