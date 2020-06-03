// Array of products, each product is an object with different fieldset
// A set of ingredients should be added to products		 

var products = [
	{
		name: "brocoli",
		vegetarian: true,
        glutenFree: true,
        organic: true,
		price: 1.99
	},
	{
		name: "bread",
		vegetarian: true,
        glutenFree: false,
        organic: false,
		price: 2.35
	},
	{
		name: "salmon",
		vegetarian: false,
        glutenFree: true,
        organic: true,
		price: 10.00
    },
    {
		name: "beef",
		vegetarian: false,
        glutenFree: false,
        organic: false,
		price: 8.45
    },
    {
		name: "muffin",
		vegetarian: true,
        glutenFree: false,
        organic: true,
		price: 1.50
    },
    {
		name: "egg",
		vegetarian: true,
        glutenFree: true,
        organic: false,
		price: 0.70
    },
    {
		name: "pizza",
		vegetarian: false,
        glutenFree: false,
        organic: true,
		price: 16.99
    },
    {
		name: "potato",
		vegetarian: true,
        glutenFree: true,
        organic: false,
		price: 3.45
    },
    {
		name: "apple",
		vegetarian: true,
        glutenFree: true,
        organic: true,
		price: 2.80
    },
    {
		name: "pork",
		vegetarian: false,
        glutenFree: true,
        organic: false,
		price: 9.87
    }
];
	
let restrictions = {
    vegetarian: null,
    glutenFree: null,
    organic: null
};

// given restrictions provided, make a reduced list of products
// prices should be included in this list, as well as a sort based on price

function restrictListProducts(prods) {
    let product_names = [];

    restrictions.vegetarian = document.getElementById("dietSelectVeg").checked;
    restrictions.glutenFree = document.getElementById("dietSelectGlu").checked;
    restrictions.organic = document.getElementById("dietSelectOrg").checked;

	for (let i=0; i<prods.length; i+=1) {

        if (!((prods[i].vegetarian == false && restrictions.vegetarian == true) ||
            (prods[i].glutenFree == false && restrictions.glutenFree == true) ||
            (prods[i].organic == false && restrictions.organic == true))){
                product_names.push(prods[i]);
            }
	}
	return product_names;
}

// Calculate the total price of items, with received parameter being a list of products
function getTotalPrice(chosenProducts) {
	totalPrice = 0;
	for (let i=0; i<products.length; i+=1) {
		if (chosenProducts.indexOf(products[i].name) > -1){
			totalPrice += products[i].price;
		}
	}
	return totalPrice;
}
