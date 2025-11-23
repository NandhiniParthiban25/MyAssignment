class ReusableMethods{
    ElementClick(locator: string):void
    ElementClick(locator: string,timeout:number ,forceClick:boolean):void 
    //ElementClick(locator: string,forceClick:boolean):void //will not accept ,only 2 methods can be created
    
    ElementClick(locator: string,timeout?:number,forceClick?:boolean){//you have to make the parameters as optional
        if(forceClick == true && timeout){
            console.log("click with force and timeout "+locator)
        }
        else{
            console.log("click without force "+locator)
        }
    }
    
}
let rm = new ReusableMethods()
rm.ElementClick("username")
rm.ElementClick("New user",2000,true)