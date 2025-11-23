class overloading{
    enterText(locator:string):void
    enterText(locator:string,text:string):void

    enterText(locator:string,text?:string){
        if(text?.length!=null){
            console.log("Locator : "+locator+" with text : "+text )
        }
        else{
            console.log("Locator : "+locator)
        }
        
    }

}

let over = new overloading()
over.enterText("#username")
over.enterText("#id","id has been taken")