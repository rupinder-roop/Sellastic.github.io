
function pay(){

	document.getElementById('details').style.display="none";
	document.getElementById('btn-details').style.display="none";
	document.getElementById('payment').style.display="block";
	setAddress();
}
function displaycost(){
	let bill = localStorage.getItem("totalCost");
	if (bill) {
		bill = parseInt(bill);
		let productContainer = document.querySelector(".displaycost");
		console.log(productContainer)
		if (bill && productContainer) {
			var totalprice=bill+100;
			console.log(totalprice)
			totalprice = totalprice.toString();
			var lastThree = totalprice.substring(totalprice.length - 3);
			var otherNumbers = totalprice.substring(0, totalprice.length - 3);
			if (otherNumbers != '')
				lastThree = ',' + lastThree;
			var res = "₹" + otherNumbers.replace(/\B(?=(\d{2})+(?!\d))/g, ",") + lastThree;
			productContainer.innerHTML = `
			<tr style="border-bottom: 1px solid #ccc">
            	<th>Total</th>
                <td style="color: rgb(15, 207, 143);font-weight: 680" class="recap-item">${res}</td>
            </tr>
			`;
		}
	}
}

const cleaveCC = new Cleave("#cardNumber", {
creditCard: true,
delimiter: "-",
onCreditCardTypeChanged: function (type) {
	const cardBrand = document.getElementById("cardBrand"),
	visa = "fab fa-cc-visa",
	mastercard = "fab fa-cc-mastercard",
	amex = "fab fa-cc-amex",
	diners = "fab fa-cc-diners-club",
	jcb = "fab fa-cc-jcb",
	discover = "fab fa-cc-discover";
	defaultcard = "fas fa-credit-card";

	switch (type) {
	case "visa":
		cardBrand.setAttribute("class", visa);
		break;
	case "mastercard":
		cardBrand.setAttribute("class", mastercard);
		break;
	case "amex":
		cardBrand.setAttribute("class", amex);
		break;
	case "diners":
		cardBrand.setAttribute("class", diners);
		break;
	case "jcb":
		cardBrand.setAttribute("class", jcb);
		break;
	case "discover":
		cardBrand.setAttribute("class", discover);
		break;
	default:
		cardBrand.setAttribute("class", defaultcard);
		break;
	}
},
});

var cleave = new Cleave('#cardExpiry', {
    date: true,
    datePattern: ['m', 'y']
});
  
const cleaveCCV = new Cleave("#cardCvv", {
	blocks: [3],
});



function setnewaddress(fetchedData,adr,email){
    for (let i = 0; i <= fetchedData.length-1; i++) {
        if(fetchedData[i].email === email){
			console.log("checked");
			var ans=fetchedData[i].address=adr;
			console.log(ans);
		}else{
			console.log("uncheck")
		};
    }
	console.log(fetchedData)
    return adr;
}

function setAddress(){
	var email = $("#email").val();
	var adr = $("#adr").val();
	var logindetails = JSON.parse(localStorage.getItem("LoginDatainfo"));
	console.log(logindetails.length)
	if(setnewaddress(logindetails,adr,email)){
		localStorage.setItem("LoginDatainfo", JSON.stringify(logindetails));
	}

}

function displayCart() {
	let cartItem = localStorage.getItem("productInCartOrg");
	if (cartItem) {
		cartItem = JSON.parse(cartItem);
		let productContainer = document.querySelector(".displayProduct");
		console.log(productContainer)
		if (cartItem && productContainer) {
			productContainer.innerHTML = '';
			Object.values(cartItem).map(item => {
				var reg = /[₹ ,]/gm;
				var disprice = item.disprice;
				console.log(disprice)
				if (disprice.match(reg)) {
					var disprice = disprice.replace(/₹/i, "");
					var disprice = disprice.replace(/,/i, "");
					disprice = parseInt(disprice);
				}
				var totalprice = disprice * item.inCart;


				totalprice = totalprice.toString();
				var lastThree = totalprice.substring(totalprice.length - 3);
				var otherNumbers = totalprice.substring(0, totalprice.length - 3);
				if (otherNumbers != '')
					lastThree = ',' + lastThree;
				var res = "₹" + otherNumbers.replace(/\B(?=(\d{2})+(?!\d))/g, ",") + lastThree;
				let totalOrgCost = localStorage.getItem("totalOrgPrice");
				productContainer.innerHTML += `
				<tbody class="">
				<tr>
                    <td>${item.name}</td>
                    <td class="recap-item">${res}</td>
                </tr>
			</tbody>
				` ;
			});
		}
	}
}


// {{{{{{{{{{{{{{{{{{{{{{{{{---------BUY NOW---------}}}}}}}}}}}}}}}}}}}}}}}}}
function displaycostbuy(){
	let bill = localStorage.getItem("buynow");
	if (bill) {
		bill=JSON.parse(bill);
		console.log(bill.disprice);
		let productContainer = document.querySelector(".displaycost");
		console.log(productContainer)
		if (bill && productContainer) {
			var reg = /[₹ ,]/gm;
			var disprice = bill.disprice;
			console.log(disprice);
			if (disprice.match(reg)) {
				var disprice = disprice.replace(/₹/i, "");
				var disprice = disprice.replace(/,/i, "");
				disprice = parseInt(disprice);
			}
			var totalprice = disprice+100;
			console.log(totalprice);
			totalprice = totalprice.toString();
			var lastThree = totalprice.substring(totalprice.length - 3);
			var otherNumbers = totalprice.substring(0, totalprice.length - 3);
			if (otherNumbers != ''){
				lastThree = ',' + lastThree;
			}
			var res = "₹" + otherNumbers.replace(/\B(?=(\d{2})+(?!\d))/g, ",") + lastThree;
			productContainer.innerHTML = `
			<tr style="border-bottom: 1px solid #ccc">
            	<th>Total</th>
                <td style="color: rgb(15, 207, 143);font-weight: 680" class="recap-item">${res}</td>
            </tr>
			`;
		}
	}
}

function displaybuynow() {
	let bill = localStorage.getItem("buynow");
	if (bill) {
		bill = JSON.parse(bill);
		let productContainer = document.querySelector(".displayProduct");
		console.log(productContainer)
		if (bill && productContainer) {
			var reg = /[₹ ,]/gm;
			var disprice = bill.disprice;
			console.log(disprice)
			if (disprice.match(reg)) {
				var disprice = disprice.replace(/₹/i, "");
				var disprice = disprice.replace(/,/i, "");
				disprice = parseInt(disprice);
			}
			var totalprice = disprice;


			totalprice = totalprice.toString();
			var lastThree = totalprice.substring(totalprice.length - 3);
			var otherNumbers = totalprice.substring(0, totalprice.length - 3);
			if (otherNumbers != '')
				lastThree = ',' + lastThree;
			var res = "₹" + otherNumbers.replace(/\B(?=(\d{2})+(?!\d))/g, ",") + lastThree;
			let totalOrgCost = localStorage.getItem("totalOrgPrice");
			productContainer.innerHTML = `
			<tbody class="">
				<tr>
					<td>${bill.name}</td>
					<td class="recap-item">${res}</td>
				</tr>
			</tbody>
			` ;
		}
	}
}



displaycostbuy();

displaybuynow();


displayCart();

displaycost();