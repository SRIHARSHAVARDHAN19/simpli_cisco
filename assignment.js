var Vechile = /** @class */ (function () {
    function Vechile(name,capacity) {
        this.name=name
        this.capacity=capacity
    }
    Vechile.prototype.startEnginee=function(){
        console.log(`${this.name} can start and has capacity of ${this.capacity}`)
    };
    Vechile.prototype.stopEnginee=function(){
        console.log(`${this.name} can stop and has capacity of ${this.capacity}`)
    };
    Vechile.prototype.run=function(){
        console.log(`${this.name} can run on manual code`)
    };
    Vechile.prototype.capacity()=function(){
        console.log("")
    };
    Vechile.prototype.callCapacity()=function(){
        console.log(`${this.name} has this much ${capacity}`)
    }
    return Vechile;
}());

