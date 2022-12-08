

export default class PeriodontalSchedule {

    constructor(obj, date){
        this.schedule = obj;
        this.date = date;
        
    }

   


    isOpen() {
        let t = ( this.date.getHours()) + ( this.date.getMinutes() * .01 );
        if (t < 9 || t > 17 ){
            return false
        }
        return true;
    }


    get weekdays(){
        return this.schedule.map( (d, index) => {
            
            if (this.date?.getDay() == index){
                return <p style={{color: "red", fontSize: "1.2rem", fontWeight:"bolder"}}>{ d.day }</p>
            }
            return <p>{ d.day }</p>
        } );
    }

    get weekhours(){
        return this.schedule.map( (d, index) => {
            
            if (this.date?.getDay() == index){
                return <p style={{color: "red", fontSize: "1.2rem", fontWeight:"bolder"}}>{ d.time }</p>
            }
            return <p>{ d.time }</p>
        } );
    }

    get weeklocations(){
        return this.schedule.map( (d, index) => {
            
            if (this.date?.getDay() == index){
                return <p style={{color: "red", fontSize: "1.2rem", fontWeight:"bolder"}}>{ d.location }</p>
            }
            return <p>{ d.location }</p>
        } );
    }
    
    
    

}