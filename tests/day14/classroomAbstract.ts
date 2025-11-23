abstract class abstractation {
    typeAndClick(){
        console.log("Typed and clicked in abstract class")
    }
    abstract enterText():void
    abstract click():void
}

class child extends abstractation{
    enterText(){
        console.log("Text is typed")
    }
    click(){
        console.log("Cliked")
    }
}

let c = new child()
c.enterText()
c.click()
c.typeAndClick()
