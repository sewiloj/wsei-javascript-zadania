//Zadanie 2
var calculator = {
    save: function (newA, newB) {
        this.a = newA;
        this.b = newB;
    },
    sum: function () {
        return this.a + this.b;
    },
    multiply: function () {
        return this.a * this.b;
    }

};

calculator.save(5, 10);
console.log(calculator.sum());
console.log(calculator.multiply());
