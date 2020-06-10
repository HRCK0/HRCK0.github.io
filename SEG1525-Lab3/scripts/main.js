// This function is called when any of the tab is clicked
// It is adapted from https://www.w3schools.com/howto/howto_js_tabs.asp

function openInfo(evt, tabName) {

	// Get all elements with class="tabcontent" and hide them
	tabcontent = document.getElementsByClassName("tabcontent");
	for (i = 0; i < tabcontent.length; i++) {
		tabcontent[i].style.display = "none";
	}

	// Get all elements with class="tablinks" and remove the class "active"
	tablinks = document.getElementsByClassName("tablinks");
	for (i = 0; i < tablinks.length; i++) {
		tablinks[i].className = tablinks[i].className.replace(" active", "");
	}

	// Show the current tab, and add an "active" class to the button that opened the tab
	document.getElementById(tabName).style.display = "block";
	evt.currentTarget.className += " active";

}


	
// generate a checkbox list from a list of products
// it makes each product name as the label for the checkbos

function populateListProductChoices(slct2) {
    var s2 = document.getElementById(slct2);
	
	// s2 represents the <div> in the Products tab, which shows the product list, so we first set it empty
    s2.innerHTML = "";
		
	// obtain a reduced list of products based on restrictions
    var optionArray = restrictListProducts(products);

	// for each item in the array, create a checkbox element, each containing information such as:
	// <input type="checkbox" name="product" value="Bread">
	// <label for="Bread">Bread/label><br>

    // Sort array
    for (i = 0; i < optionArray.length; i++){
        for (j = 0; j < optionArray.length; j++){
            if (optionArray[i].price < optionArray[j].price){
                let tempProd = optionArray[j];
                optionArray[j] = optionArray[i];
                optionArray[i] = tempProd;
            }
        }
    }

	for (i = 0; i < optionArray.length; i++) {

		let currentProduct = optionArray[i];
		var productName = optionArray[i].name;
		
		let itemDiv = document.createElement('div');
		itemDiv.className = "itemDiv";

		//create the image for the item
		let image = document.createElement('img');
		image.src = optionArray[i].imglink;
		image.width = 100;
		image.height = 100;
		image.display = "block";
		itemDiv.appendChild(image);

		itemDiv.appendChild(document.createElement("br"));
		
		// create the checkbox and add in HTML DOM
		var checkbox = document.createElement("input");
		checkbox.type = "checkbox";
		checkbox.name = "product";
		checkbox.value = productName;
		itemDiv.appendChild(checkbox);
		
		// create a label for the checkbox, and also add in HTML DOM
		var label = document.createElement('label');
		label.htmlFor = productName;

		label.appendChild(document.createTextNode(productName + " $" + currentProduct.price));
		itemDiv.appendChild(label);
		
		// create a breakline node and add in HTML DOM
		//s2.appendChild(document.createElement("br")); 
		s2.appendChild(itemDiv);   
	}
}
	
// This function is called when the "Add selected items to cart" button in clicked
// The purpose is to build the HTML to be displayed (a Paragraph) 
// We build a paragraph to contain the list of selected items, and the total price

function selectedItems(){
	
	var ele = document.getElementsByName("product");
	var chosenProducts = [];
	
	var c = document.getElementById('displayCart');
	c.innerHTML = "";
	
	// build list of selected item
	var para = document.createElement("P");
	para.innerHTML = "You selected : ";
	para.appendChild(document.createElement("br"));
	
	for (i = 0; i < ele.length; i++) { 
		if (ele[i].checked) {
			para.appendChild(document.createTextNode(ele[i].value));
			para.appendChild(document.createElement("br"));
			chosenProducts.push(ele[i].value);
		}
	}
		
	// add paragraph and total price
	c.appendChild(para);
	c.appendChild(document.createTextNode("Total Price is $" + getTotalPrice(chosenProducts)));
		
}