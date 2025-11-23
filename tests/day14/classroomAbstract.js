var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var abstractation = /** @class */ (function () {
    function abstractation() {
    }
    abstractation.prototype.typeAndClick = function () {
        console.log("Typed and clicked in abstract class");
    };
    return abstractation;
}());
var child = /** @class */ (function (_super) {
    __extends(child, _super);
    function child() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    child.prototype.enterText = function () {
        console.log("Text is typed");
    };
    child.prototype.click = function () {
        console.log("Cliked");
    };
    return child;
}(abstractation));
var c = new child();
c.enterText();
c.click();
c.typeAndClick();
