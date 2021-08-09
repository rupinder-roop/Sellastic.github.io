let buys = document.querySelectorAll('.buynow');
var names = document.getElementById('product-name');
// buys.addEventListener('click',check_login());
function check_login(){
	var logindetails = JSON.parse(localStorage.getItem("LoginDatainfo"));
	if(!logindetails){
		Swal.fire({
			position: 'center',
			icon: 'info',
			title: 'Signin Details',
			text: 'You Are Not Login',
			showConfirmButton: false,
			timer: 1000
		});
		window.open("../../signinpages/signin.html","_self");
		
	}
}

if (names) {
	var products = [
		{
			name: document.getElementById("product-name").textContent,
			tag: document.getElementById("product-name").textContent.slice(0, 4),
			image: $('.product-sm').children('img').attr('src'),
			rating: document.getElementById('rating').textContent,
			disprice: document.getElementById('pricea').textContent,
			orgprice: document.getElementById('priceb').textContent,
			dispercentage: document.getElementById('pricec').textContent,
		}
	];
}


for (var i = 0; i < buys.length; i++) {
	buys[i].addEventListener('click', (e) => {
		var tru =check_login();
		if(tru==undefined){
		setBuyss(products[0]);}
	});
}

function setBuyss(product){

    localStorage.setItem("buynow", JSON.stringify(product));
    window.open("../../checkout/checkout.html","_self");
}