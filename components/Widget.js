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
            setWOpen(isOpen );
        }, 300);
        // setTimeout(function(){
        //     setFixed(isOpen );
        // }, 800);
        // setTimeout(function(){
        //     setZIndex(isOpen);
        // }, 1200);
    }, [isOpen]);


    const widgetRef = useRef()
    

    const positionControl = useRef({
        top: 0,
        left: 0,
    })
    
    function update(){
        if (widgetRef.current){
            positionControl.current.top = widgetRef.current?.getBoundingClientRect()?.top;
            positionControl.current.left = widgetRef.current?.getBoundingClientRect()?.left;
            console.log("top", positionControl.current.top)
            console.log("left", positionControl.current.left)

        }
    }
    if(typeof document !== 'undefined'){
        document.addEventListener("scroll", update);
    }
    
    


    const heighthandler = new HeightHandler();
    const windowH =  heighthandler.getOuterWindowHeight();

    const [closing, setClosing] = useState(false);
    useEffect(()=>{
        if(wopen){
            setClosing(true)

        }
    }, [wopen])
    
    let cvariants = {
        open:{
            
            
            // height: fixed ? heighthandler.getOuterWindowHeight() : height,
            // width: fixed ? "100vw":width,
            
            // scale: fixed ? 1 : 25,
            // position: fixed ? "fixed" : "relative",

            height: [height, windowH],
            width: [width, "100vw"],


            position: "fixed",
            top: [positionControl.current.top, 0],
            left: [positionControl.current.left, 0],
            

          

            zIndex: 11,
            overflowY: "scroll",
            // background: background[1]
            background:"green"

           
        },
        
        closed:{
            
            // height: fixed ? heighthandler.getOuterWindowHeight() : height,
            
            // width:  fixed ? "100vw" : width,
            // position: fixed ? "fixed" : "relative",
            // scale:  fixed ? 25 : 1,

            height: height,
            width: width,
            position: "relative",
            top: closing ? [ positionControl.current.top, 0] : 0,
            left: closing ? [ positionControl.current.left, 0] : 0,
            





            


            zIndex : zIndex ? 11 : 10,
            overflowY: "visible",
            background: "green",


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
                ref={widgetRef} 
                className={`${styles.widgetCover} `}
                variants={cvariants}
                animate={
                    wopen ? "open" : "closed"
                    
                }
                transition={{duration: 1, times:[.5, .5, .5, .5], ease:"easeInOut"}}
                onClick={ () => {
                    disableDocumentScroll()
                    // disableScroll();
                    setIsOpen();
                } }   
            >
                <motion.div className={`${styles.widget} ${ styles.absolute}`}
                    animate={{
                        background: wopen ? background[1] : background[0],
                        borderRadius: fixed ? 0 : 15,
                        boxShadow: wopen ? "none" : " 2px -2px 15px 2px rgba(114,196,145,0.75)",

                    }}
                    onClick={ () => {
                        disableDocumentScroll()
                        // disableScroll();
                        setIsOpen();
                    } }   
                >

                    { children }

                </motion.div>
            </motion.div>   
        </div>
        
            
        
    )
}