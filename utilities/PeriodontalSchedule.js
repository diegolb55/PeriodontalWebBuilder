

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

    currentSchedule(){
        return this.schedule.filter((s, index) => this.date.getDay() === index)
    }

    getThreeRows(){
        let day = this.date.getDay() 
        return this.schedule.map((s, index) => {
            if(day == 0){
                return (
                    <>
                        <p>{s.day} : {s.time}</p>
                        <p>{this.schedule[index+1]?.day} : {this.schedule[index+1]?.time}</p>
                        <p>{this.schedule[index+2]?.day} : {this.schedule[index+2]?.time}</p>

                    </>
                    
                )
            }
            if(day == 6){
                return (
                    <>
                        <p>{s.day} : {s.time}</p>
                        <p>{this.schedule[index+1]?.day} : {this.schedule[index+1]?.time}</p>
                        <p>{this.schedule[index+2]?.day} : {this.schedule[index+2]?.time}</p>

                    </>
                    
                )
            }
        })
    }


    get weekdays(){
        return this.schedule.map( (d, index) => {
            
            if (this.date?.getDay() == index){
                return <p style={{
                        color: this.isOpen() ? "red" : "white", 
                        fontSize: "1.2rem", 
                        fontWeight:"bolder"}}
                    >{ d.day }</p>
            }
            return <p>{ d.day }</p>
        } );
    }

    get weekhours(){
        return this.schedule.map( (d, index) => {
            
            if (this.date?.getDay() == index){
                return <p style={{
                    color: this.isOpen() ? "red" : "white", 
                    fontSize: "1.2rem", 
                    fontWeight:"bolder"}}>{ d.time }</p>
            }
            return <p>{ d.time }</p>
        } );
    }

    get weeklocations(){
        return this.schedule.map( (d, index) => {
            
            if (this.date?.getDay() == index){
                return <p style={{
                        color: this.isOpen() ? "red" : "white", 
                        fontSize: "1.2rem", 
                        fontWeight:"bolder"}}>
                    { d.location }</p>
            }
            return <p>{ d.location }</p>
        } );
    }
    
    
    

}