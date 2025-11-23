import { Browser } from "./classroomBrowser";

class Chrome extends Browser{
    launchBrowser(){
        console.log("Launching Chrome Browser")
    }
}

let objChrome = new Chrome()
objChrome.browserType()
objChrome.browserVersion()
objChrome.launchBrowser()