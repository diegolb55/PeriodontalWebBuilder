import { useState, useEffect } from "react";


export default class HeightHandler {
    constructor(){
        this.h = this.getInnerWHeight();
    }
    
    getInnerWHeight(){
        if(typeof window !== 'undefined'){
            return window.innerHeight;
        }
        return "100vh";
    }

 

    get windowHeight(){
        return this.h;
    }

}



