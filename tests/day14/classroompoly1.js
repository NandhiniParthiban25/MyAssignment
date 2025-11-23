var overloading = /** @class */ (function () {
    function overloading() {
    }
    overloading.prototype.enterText = function (locator, text) {
        if ((text === null || text === void 0 ? void 0 : text.length) != null) {
            console.log("Locator : " + locator + " with text : " + text);
        }
        else {
            console.log("Locator : " + locator);
        }
    };
    return overloading;
}());
var over = new overloading();
over.enterText("#username");
over.enterText("#id", "id has been taken");
