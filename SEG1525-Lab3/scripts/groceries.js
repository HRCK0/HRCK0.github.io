// Array of products, each product is an object with different fieldset
// A set of ingredients should be added to products		 

var products = [
  {
    name: "brocoli",
    vegetarian: true,
    glutenFree: true,
    organic: true,
    price: 1.99,
    imglink: "https://cdn.apartmenttherapy.info/image/upload/f_jpg,q_auto:eco,c_fill,g_auto,w_1500,ar_4:3/k%2Farchive%2Fd852987f86aeae8b65926f9e7a260c28285ea744"
  },
  {
    name: "bread",
    vegetarian: true,
    glutenFree: false,
    organic: false,
    price: 2.35,
    imglink: "https://www.biggerbolderbaking.com/wp-content/uploads/2020/04/Hearty-Yeast-Free-Bread-WS-Thumbnail.jpg"
  },
  {
    name: "salmon",
    vegetarian: false,
    glutenFree: true,
    organic: true,
    price: 10.00,
    imglink: "https://barkingroyalty.com/wp-content/uploads/2019/01/salmon.jpg"
  },
  {
    name: "beef",
    vegetarian: false,
    glutenFree: false,
    organic: false,
    price: 8.45,
    imglink: "https://www.thespruceeats.com/thmb/tDWJzDYBuRqGuQIRuEr4yRMVGzQ=/2696x2696/smart/filters:no_upscale()/marinated-rump-roast-3058682-hero-01-0977a498722f47debaa7034c13053048.jpg"
  },
  {
    name: "muffin",
    vegetarian: true,
    glutenFree: false,
    organic: true,
    price: 1.50,
    imglink: "https://sugargeekshow.com/wp-content/uploads/2019/10/chocolate-chip-muffins-featured.jpg"
  },
  {
    name: "egg",
    vegetarian: true,
    glutenFree: true,
    organic: false,
    price: 0.70,
    imglink: "https://i0.wp.com/cdn-prod.medicalnewstoday.com/content/images/articles/283/283659/a-basket-of-eggs.jpg?w=1155&h=1541"
  },
  {
    name: "pizza",
    vegetarian: false,
    glutenFree: false,
    organic: true,
    price: 16.99,
    imglink: "https://www.kingarthurflour.com/sites/default/files/recipe_legacy/20-3-large.jpg"
  },
  {
    name: "potato",
    vegetarian: true,
    glutenFree: true,
    organic: false,
    price: 3.45,
    imglink: "https://thumbor.thedailymeal.com/5g1xxbo05RY_arzq5eNxq2VAGLs=/870x565/https://www.thedailymeal.com/sites/default/files/recipe/2020/istock_000010134416xsmall.jpg"
  },
  {
    name: "apple",
    vegetarian: true,
    glutenFree: true,
    organic: true,
    price: 2.80,
    imglink: "https://pull01-thefruitcompany.netdna-ssl.com/media/catalog/product/cache/1/image/800x/9df78eab33525d08d6e5fb8d27136e95/c/o/cosmic-crisp-apple.jpg"
  },
  {
    name: "pork",
    vegetarian: false,
    glutenFree: true,
    organic: false,
    price: 9.87,
    imglink: "https://www.rockrecipes.com/wp-content/uploads/2020/04/Brined-Roast-Pork-Loin-close-up-photo-of-sliced-pork.jpg"
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

  for (let i = 0; i < prods.length; i += 1) {

    if (!((prods[i].vegetarian == false && restrictions.vegetarian == true) ||
      (prods[i].glutenFree == false && restrictions.glutenFree == true) ||
      (prods[i].organic == false && restrictions.organic == true))) {
      product_names.push(prods[i]);
    }
  }
  return product_names;
}

// Calculate the total price of items, with received parameter being a list of products
function getTotalPrice(chosenProducts) {
  totalPrice = 0;
  for (let i = 0; i < products.length; i += 1) {
    if (chosenProducts.indexOf(products[i].name) > -1) {
      totalPrice += products[i].price;
    }
  }
  return totalPrice;
}
