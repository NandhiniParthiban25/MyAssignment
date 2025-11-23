"use strict";
/*
create file 1
2 property
2 method - one public method and one private method
default constructore
create object -> execute


create file 2
create object for the file 1 and execute it
*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.file1 = void 0;
var file1 = /** @class */ (function () {
    function file1() {
        this.empName = "Nandhini";
        this.id = 23;
        console.log("Default constructor");
    }
    file1.prototype.getName = function () {
        console.log(this.empName);
    };
    file1.prototype.getId = function () {
        console.log(this.id);
    };
    file1.prototype.getIdInfo = function () {
        this.getName();
        this.getId();
    };
    return file1;
}());
exports.file1 = file1;
var obj1 = new file1();
obj1.getIdInfo();
