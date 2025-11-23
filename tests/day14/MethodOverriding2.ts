import { parent } from "./MethodOverriding1";

class child extends parent{
    phone(){
        console.log("Smart Phone")
        super.phone()
    }
}

let c = new child()
c.phone()