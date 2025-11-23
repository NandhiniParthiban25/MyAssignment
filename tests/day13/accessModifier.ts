class access{
    //public access modifier - default
    //private access modifier - can be accessed only inside the class
    //protected access modifier - cab be accessed inside the class and by the dervied class
    public loadUrl(){
        console.log("Load URL method")
    }
    private loadUSerName(){
        console.log("Load UserName method")
    }
    protected info(){
        console.log("Info method")
    }
    public getInfo(){
        this.loadUSerName()  // directly we cannot call outside the call if it is private method -> so create public call
        this.info()
    }
}

let acc = new access()
acc.loadUrl()
acc.getInfo()