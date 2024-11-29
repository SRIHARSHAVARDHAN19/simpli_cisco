class Product {
    constructor(product,price,discount){
        this.product=product
        this.price=price
        this.discount=discount
    }
    discountedPrice(){
        let result= this.price - (this.price * this.discount / 100);
        console.log(result)
    }
}

class productBrand extends Product {
    constructor(product,price,discount,brand){
        super(product,price,discount)
        this.brand=brand
    }
    details(){
        return (`product :${this.product} price :${this.price} brand:${this.brand}`)
    }
}
 let ob1=new productBrand("watch",5000,10,"titan")
 let ob2=new productBrand("Led TV",10000,20,"samsung")
 let ob3=new productBrand("oven",20000,30,"xyz")
 let ob4=new productBrand("shoes",8000,5,"nike")
 obj1.discountedPrice()
 obj2.discountedPrice()
 obj3.discountedPrice()
 obj4.discountedPrice()