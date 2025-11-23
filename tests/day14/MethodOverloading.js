var ReusableMethods = /** @class */ (function () {
    function ReusableMethods() {
    }
    //ElementClick(locator: string,forceClick:boolean):void //will not accept ,only 2 methods can be created
    ReusableMethods.prototype.ElementClick = function (locator, timeout, forceClick) {
        if (forceClick == true && timeout) {
            console.log("click with force and timeout " + locator);
        }
        else {
            console.log("click without force " + locator);
        }
    };
    return ReusableMethods;
}());
var rm = new ReusableMethods();
rm.ElementClick("username");
rm.ElementClick("New user", 2000, true);
