import styles from "../styles/Widget.module.css"
import { motion, AnimatePresence } from "framer-motion"
import { useState, useRef, useEffect } from "react"
import HeightHandler from "../utilities/HeightHandler";
import { useElementPosition, getAbsoluteOffsetLeft, getAbsoluteOffsetTop } from "../utilities/useElementPosition";
import { BsBoundingBoxCircles } from "react-icons/bs";


export default function WidgetPro(props){
    
    const {
        isOpen, setIsOpen, 
        background,
        height, width, maxwidth,
        children } = props;

    const heighthandler = new HeightHandler();
    let windowH =  heighthandler.windowHeight;
    
    const [, forceRender] = useState(new Date())
   


    const currentPos = useRef({
        top:0,
        left:0,
    })
    const widget = useRef();
    const [wopen, setWOpen] = useState(false);
    

    useEffect(() => {


        if(typeof widget.current != 'undefined'){
            if(isOpen){
                
                currentPos.current.top = widget.current.getBoundingClientRect().top;
                currentPos.current.left = widget.current.getBoundingClientRect().left;
                setWOpen(true);
                disableDocumentScroll();

                
    
            }
            else {
                setTimeout(()=>{
                    setWOpen(false);
                    enableDocumentScroll();
                }, 600)

            }
        }
           

    }, [isOpen]);

    
    let cvariants = {
        open:{
            
            zIndex: 11,

            // new
            background: background[1],
            height: windowH,
            width: "100vw",
            maxWidth: "none",

            position: "fixed",
            top: [currentPos.current.top, 0],
            left: [currentPos.current.left, 0],

        },
        
        closed:{
            
           
            zIndex : wopen ? 11 : 10,

            // new
            background: "transparent",
            height: height,
            width: width,
            maxWidth: wopen ? "none" : ( maxwidth ? maxwidth: 250 ),
            position: wopen ? "fixed" : "relative",
            top: wopen ? [0, currentPos.current.top] : [0, 0],
            left: wopen ? [0, currentPos.current.left] : [0, 0],

        }
    }
    
    function disableDocumentScroll() {
       
        if(typeof document !== 'undefined'){
            document.body.style.overflow = "hidden"
            

        }
       
    }
    function enableDocumentScroll() {
       
     

        if(typeof document !== 'undefined'){
            document.body.style.overflow = "scroll"

        }
    }

    function handleOrientation (e){
        if(e.matches) {
            // Portrait mode
            forceRender(new Date())
        } else {
            // Landscape

            forceRender(new Date())
        }
    }

    let portrait = 'undefined';
    useEffect(()=>{
        if ( typeof window !== 'undefined'){
            portrait = window.matchMedia("(orientation: portrait)");

            portrait.addEventListener("change", function (e){handleOrientation(e)});


        }
        return () => {
            portrait.removeEventListener("change",function (e){handleOrientation(e)})
        }
    }, [])




    return (
        <div >
            <motion.div  
                className={`${styles.widgetCover} `}
                variants={cvariants}
                animate={
                    isOpen ? "open" : "closed"
                    
                }
                transition={{duration: .5}}
                
                ref={widget}  
            >
                <motion.div className={`${styles.widget} ${ styles.absolute }`} // ${ styles.absolute }
                    animate={{
                        background: isOpen ? background[1] : background[0],
                        borderRadius: isOpen ? 0 : 15,
                        boxShadow: isOpen ? "none" : "2px -2px 15px 2px rgba(114,196,145,0.75)",
                        overflow: isOpen ? "scroll" : "hidden"

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