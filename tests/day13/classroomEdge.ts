import { Browser } from "./classroomBrowser";

class Edge extends Browser{
      launchBrowser(){
        console.log("Launching Edge Browser")
    }
}

let objEdge = new Edge()
objEdge.browserType()
objEdge.browserVersion()
objEdge.launchBrowser()