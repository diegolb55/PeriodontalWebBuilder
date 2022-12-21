

export default class PeriodontalSchedule {

    constructor( date){
        this.schedule = [
            {
                day: "domingo",
                time: "--",
                location: "--"
            },
            {
                day: "lunes",
                time: "9am - 5pm",
                location: "Ponce",
            },
            {
                day: "martes",
                time: "9am - 5pm",
                location: "Manati",
            },
            {
                day: "miercoles",
                time: "--",
                location: "--"
            },
            {
                day: "jueves",
                time: "9am - 5pm",
                location: "Manati",
            },
            {
                day: "viernes",
                time: "9am - 5pm",
                location: "Manati",
            },
            {
                day: "sabado",
                time: "--",
                location: "--"
            },
        ]
        this.date = date;
        
    }

   


    isOpen() {
        let t = ( this.date.getHours()) + ( this.date.getMinutes() * .01 );
        let h = t > 9 && t < 17;
        let d = this.date.getDay() > 0 && this.date.getDay() < 6 && this.getDay() != 3

        if (  h && d ){
            return true
        }
        return false;
    }

    currentSchedule(){
        return this.schedule.filter((s, index) => this.date.getDay() === index)
    }

    


    get weekdays(){
        return this.schedule.map( (d, index) => {
            
            if (this.date?.getDay() == index){
                return <p key={Math.random()} 
                        style={{
                        color: this.isOpen() ? "red" : "white", 
                        fontSize: "1.2rem", 
                        fontWeight:"bolder"}}
                    >{ d.day }</p>
            }
            return <p key={Math.random()} >{ d.day }</p>
        } );
    }

    get weekhours(){
        return this.schedule.map( (d, index) => {
            
            if (this.date?.getDay() == index){
                return <p key={Math.random()}  
                    style={{
                    color: this.isOpen() ? "red" : "white", 
                    fontSize: "1.2rem", 
                    fontWeight:"bolder"}}>{ d.time }</p>
            }
            return <p key={Math.random()} >{ d.time }</p>
        } );
    }

    get weeklocations(){
        return this.schedule.map( (d, index) => {
            
            if (this.date?.getDay() == index){
                return <p key={Math.random()} 
                        style={{
                        color: this.isOpen() ? "red" : "white", 
                        fontSize: "1.2rem", 
                        fontWeight:"bolder"}}>
                    { d.location }</p>
            }
            return <p key={Math.random()} >{ d.location }</p>
        } );
    }
    
    
    

}