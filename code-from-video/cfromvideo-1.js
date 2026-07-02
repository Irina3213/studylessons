// SHOP
// task: shop and products box
// Creat class Product, were wil be product from shop, and class Cart, who will be genarate this box. relization next function:
// Class Product must have: name, price
// class Cart must have methodes:
// addProduct(product) -added product into box;
// removeProduct(productName)-delete product from box by name
// getTotalPrice()-retern all summa of all product into box
// listProducts()-show all items into box

class Product {
    constructor(name, price){
        this.name = name;
        this.price = price;
    }
}

class Cart {
    #products = [];
    constructor(){}

    addProduct(...product) {
        this.#products.push(...product);
        // log(this.products)
        product.forEach(product => log(`${product.name} add to box`));
    }

    removeProduct(productName) {
        this.#products = this.#products.filter((product) => product.name !== productName);
        
        return productName;
    }

    getTotalPrice() {
        const totalPrice = this.#products.reduce((total, product) => total + product.price, 0);
        return totalPrice;
    }

    get listOfProducts(){
        return this.#products;
    }
}

const cart = new Cart();

const bread = new Product("Bread", 30);
const apple = new Product("Apple", 50);
const milk = new Product("Milk", 60);

cart.addProduct(bread, apple, milk);
log(cart.products);


const removedProduct = cart.removeProduct("Milk");
log(`${removedProduct} deleted from box`);

cart.removeProduct("Milk");
log(cart.listOfProducts);

// get(totalPrice);
log(`Summa products into box: ${totalPrice}`);  
cart.getTotalPrice()