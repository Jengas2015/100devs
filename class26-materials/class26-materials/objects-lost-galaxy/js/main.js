//Create a pizza object that has four properties and three methods

let pizza = {
    shape: 'round',
    crust: 'pan',
    topping: ['veggies', 'pepperoni'],
    cheese: true,

    save: function () {
        console.log("Your order is saved!")
    },
    order: function () {
        console.log("Your order is on its way!")
    }

}