
function Product(name, price, discount) {
    this.name = name;
    this.price = price;
    this.discount = discount;
    this.getDiscountedPrice = function() {
        return this.price - (this.price * this.discount / 100);
    };
}
let watch = new Product("Watch", 5000, 50);
let ledTV = new Product("LED TV", 10000, 20);
let oven = new Product("Oven", 20000, 30);
let shoes = new Product("Shoes", 8000, 5);
console.log(`${watch.name}: ₹${watch.getDiscountedPrice()}`);
console.log(`${ledTV.name}: ₹${ledTV.getDiscountedPrice()}`);
console.log(`${oven.name}: ₹${oven.getDiscountedPrice()}`);
console.log(`${shoes.name}: ₹${shoes.getDiscountedPrice()}`);