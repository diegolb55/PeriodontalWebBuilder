


export default class HeightHandler {
    constructor(){
    }
    
    getOuterWindowHeight(){
        if(typeof window !== 'undefined'){
            return window.outerHeight;
        }
        return "100vh";
    }

}



