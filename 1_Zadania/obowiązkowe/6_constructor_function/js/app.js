function Basket(){
    this.products = [];
    this.sum = 0;
    this.addProduct = function(name, price){
        this.products.push(name);
        this.sum += price;
    };
    this.showBasket = function(){
        for(var i = 0; i < this.products.length; i++)
        {
            console.log(this.products[i]);
        }
        console.log("Suma: " +this.sum);
    }
}