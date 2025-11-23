/*
create file 1
2 property 
2 method - one public method and one private method 
default constructore
create object -> execute 


create file 2 
create object for the file 1 and execute it 
*/

export class file1{
    empName:string ="Nandhini"
    id:number= 23

    getName(){
        console.log(this.empName)
    }
    private getId(){
        console.log(this.id)
    }
    constructor(){
        console.log("Default constructor")   
    }
    public getIdInfo(){
        this.getName()
        this.getId()
    }
}
let obj1 = new file1()
obj1.getIdInfo()