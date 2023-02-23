//Create a constructor with 4 properties and 3 methods
function PizzaMaker (size, toppings, crust, sauce) {
    this.size =size
    this.toppings = toppings
    this.crust = crust
    this.sauce = sauce 

    this.estimatedDeliveryTime = () => {
        console.log("it's on its way!")
    }

    this.frisbee = () => {
        console.log("Yeet!")
    }

    this.eat = () => {
        console.log("nomnomnom!")
    }
}


let pizza = new PizzaMaker('large', ['spinach', 'garlic'], 'deep dish', 'white')