import { useState, useEffect, useCallback } from 'react';

interface ElementPosition {
    left: number | undefined;
    right: number | undefined;
    top: number | undefined;
    bottom: number | undefined;

}


export const useElementPosition = (elem) => {

    if(elem.current){
        console.log(elem.current)

    }

    const [position, setPosition] = useState<ElementPosition>({
        left: undefined,
        right: undefined,
        top: undefined,
        bottom: undefined,
    });

    
    // const [change, setChange] = useState(false)
    let rect;
    function update(){
        // setChange((b)=>!b);
        if(elem.current){
            rect = elem.getBoundingClientRect();
            setPosition({
                top: rect.top,
                bottom: rect.bottom,
                left: rect.left,
                right: rect.right,
            })
        }
        
        
    }

    if (typeof document !== 'undefined'){
        document.addEventListener('scroll', update);
    }


    
    // const ref = useCallback((node) => {
    //     if (node !== null) {

    //         let rect = node.getBoundingClientRect();

    //         setPosition({
    //             top: rect.top,
    //             bottom: rect.bottom,
    //             left: rect.left,
    //             right: rect.right,
    //         });
    //     }
    // }, [change]);

    // return [position, ref];
    return position;

    

    
    
    

}