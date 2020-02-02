//Zadanie 0
class Basket {
	constructor() {
		this.products = [];
		this.sum = 0;
	}

	addProduct(name, price) {
		const { products } = this;
		products.push([name, price]);
		this.sum += price;
	};

	showBasket() {
		const { products, sum } = this;
		for (let index in products)  {
			console.log(products[index]);
		}
		console.log(`Do zapłaty: ${sum} zł`);
	}
};
let aliceBasket = new Basket();
aliceBasket.addProduct("pomidor",10);
aliceBasket.addProduct("arbuz",40);
aliceBasket.showBasket();

let bruceBasket = new Basket();
bruceBasket.addProduct("rice", 10);
bruceBasket.addProduct("grzyby mun",50);
bruceBasket.addProduct("tofu",20);
bruceBasket.showBasket();