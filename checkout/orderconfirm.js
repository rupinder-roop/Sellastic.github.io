let cartItem = localStorage.getItem("productInCartOrg");
if (cartItem){
    cartItem = JSON.parse(cartItem);
    let productContainer = document.querySelector("#order_mail");
    if (cartItem && productContainer) {
        productContainer.innerHTML = '';
    Object.values(cartItem).map(item => {
        var reg = /[₹ ,]/gm;
        var disprice = item.disprice;
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
        productContainer.innerHTML += `
        <table border="0" cellpadding="0" cellspacing="0" width="100%" style="border: 2px #002627 solid" class="tableProduct">
            <tr>
                <td align="center" valign="top" class="productImg ">
                    <!-- Product Image and Link // -->
                        <img class=-"image rounded cart-image float-start text-center my-4 responsive magnifiedImg text-center" src="${item.image}" width="100" alt="" border="0" style="width:100%; max-width:150px; height:auto; display:block;padding:20px 0 0 0;" />
                </td>
                <td align="center" valign="top" style="padding-bottom:10px;width:100px;" class="productName">
                    <!-- Offer Title Text// -->
                    
                        <h3 class="text" style="color:#002627;font-size:15px; font-family:'Bahnschrift'; font-weight:600; font-style:normal; letter-spacing:normal; text-transform:none; text-align:center; padding:0;align:center; margin:50% auto">
                            ${item.name}
                        </h3>
                    
                </td>
                <td align="center" valign="top" style="padding-bottom:10px;" class="productQty">
                    <!-- Offer Title Text// -->
                    <p class="text" style="color:#002726; font-family:'Bahnschrift'; font-size:18px; font-weight:600; font-style:normal; letter-spacing:normal; line-height:26px; text-transform:none; text-align:center; padding:0; margin:70px auto">
                        Quantity: <strong>${item.inCart}</strong>
                    </p>
                </td>
                <td align="center" valign="top" style="padding-bottom:10px;" class="productPrice">
                    <!-- Offer Code Text// -->
                    <p class="text" style="color:#002726; font-family:'Bahnschrift'; font-size:18px; font-weight:600; font-style:normal; letter-spacing:normal; line-height:26px; text-transform:none; text-align:center; padding:0; margin:70px auto">
                        Price: <strong>${res}</strong>
                    </p>
                </td>
            </tr>
        </table>

        <table border="0" cellpadding="0" cellspacing="0" width="100%" class="tableDivider">
            <tr>
                <td align="center" valign="top" style="padding-top:20px;padding-bottom:40px;">
                    <!-- Divider // -->
                    <table border="0" cellpadding="0" cellspacing="0" width="100%">
                        <tr>
                            <td height="1" style="background-color:#002726;font-size:1px;line-height:1px;" class="divider">&nbsp;</td>
                        </tr>
                    </table>
                </td>
            </tr>
        </table>
        ` ;
    });
}
}

function confirmit(fetchedData,userdata){
    for (let i = 0; i <= fetchedData.length-1; i++) {
        if(fetchedData[i].username==userdata[i].username){
            var ans =userdata[i].address;
        }
    }
    return ans;
}



function displaycost(){
	let bill = localStorage.getItem("totalCost");
    let currlogin = JSON.parse(localStorage.getItem("currentLoginInfo"));
    let userlogin = JSON.parse(localStorage.getItem("LoginDatainfo"));
	if (bill) {
		bill = parseInt(bill);
        let costContainer = document.querySelector("#subcost");
        if(bill && costContainer){
        var totalprice=bill
        totalprice = totalprice.toString();
        var lastThree = totalprice.substring(totalprice.length - 3);
        var otherNumbers = totalprice.substring(0, totalprice.length - 3);
        if (otherNumbers != '')
            lastThree = ',' + lastThree;
        var res = "₹" + otherNumbers.replace(/\B(?=(\d{2})+(?!\d))/g, ",") + lastThree;
        costContainer.innerHTML = `
        <p class="text" style="color:#000000; font-family:'Open Sans', Helvetica, Arial, sans-serif; font-size:20px; font-weight:600; font-style:normal; letter-spacing:normal; line-height:26px; text-transform:none; text-align:center; padding:0; margin:0">
            Sub Total : &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>${res}</strong>
        </p>
        `;
        }


		let productContainer = document.querySelector(".displaycost");
		if (bill && productContainer) {
			var totalprice=bill+100;
			totalprice = totalprice.toString();
			var lastThree = totalprice.substring(totalprice.length - 3);
			var otherNumbers = totalprice.substring(0, totalprice.length - 3);
			if (otherNumbers != '')
				lastThree = ',' + lastThree;
			var res = "₹" + otherNumbers.replace(/\B(?=(\d{2})+(?!\d))/g, ",") + lastThree;
			productContainer.innerHTML = `
                <p class="text" style="color:#000000; font-family:'Open Sans', Helvetica, Arial, sans-serif; font-size:20px; font-weight:700; font-style:normal; letter-spacing:normal; line-height:26px; text-transform:none; text-align:center; padding:0; margin:0">
                    Total: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>${res}</strong>
                </p>
            `;
		}
        
        let addressContainer = document.querySelector("#addressdisplay");
		if (currlogin && addressContainer) {
                var address=confirmit(currlogin,userlogin);
                addressContainer.innerHTML = `
                <p class="text" style="color:#000000; font-family:'Open Sans', Helvetica, Arial, sans-serif; font-size:20px; font-weight:600; font-style:normal; letter-spacing:normal; line-height:26px; text-transform:none; text-align:center; padding:5px 0 0 0; margin:0">
                    ${address}
                </p>
                <p style="padding:10px 0 10px 0">
                    <div height="1" style="background-color:#002726;font-size:1px;line-height:1px;width:60%;" class="divider">&nbsp;</div>
                </p>
                <tr>
                    <td align="center" valign="top" style="padding-top:20px;" class="mediumTitle">
                        <!-- Medium Title Text // -->
                        <p class="text" style="color:#002726; font-family:'Open Sans', Helvetica, Arial, sans-serif; font-size:22px; font-weight:600; font-style:normal; letter-spacing:normal; line-height:26px; text-transform:none; text-align:center; padding:20px 0 0 0; margin:0">
                            Billing Address :
                        </p>
                    </td>
                </tr>

                <tr>
                    <td align="center" valign="top" style="padding-bottom:20px;" class="description" >
                        <!-- Description Text// -->
                        <br>
                        <p class="text" style="color:#000000; font-family:'Open Sans', Helvetica, Arial, sans-serif; font-size:20px; font-weight:600; font-style:normal; letter-spacing:normal; line-height:22px; text-transform:none; text-align:center; padding:0; margin:0">
                            ${address}
                        </p>
                    </td>
                    <p style="padding:10px 0 10px 0">
                    <div height="1" style="background-color:#002726;font-size:1px;line-height:1px;width:60%;" class="divider">&nbsp;</div>
                </p>
                </tr>
            `;
			
		}
        let dateContainer=document.querySelector("#arrive_on");
        var today = new Date();
        var dd = today.getDate();
        var mm = today.getMonth() + 1;
  
        var yyyy = today.getFullYear();
        if (dd < 10) {
            dd = dd+5;
        }
        if (mm < 10) {
            mm = '0' + mm;
        }
        var today = dd + '/' + mm + '/' + yyyy;
        dateContainer.innerHTML=`
                        <br>
                        <p style="padding:10px 0 10px 0">
                            <div height="1" style="background-color:#999999;font-size:1px;line-height:1px;width:60%;" class="divider">&nbsp;</div>
                        </p>
                        <p class="text" style="color:#000000; font-family:'Open Sans', Helvetica, Arial, sans-serif; font-size:21px; font-weight:700; font-style:normal; letter-spacing:normal; line-height:20px; text-transform:none; text-align:center; padding:20px 0 0 0; margin:0">
                            Arriving on: ${today}
                        </p>
        `;
	}
}

displaycost();

{/* <tr style="border-bottom: 1px solid #ccc">
            	<th>Total</th>
                <td style="color: rgb(15, 207, 143);font-weight: 680" class="recap-item">${res}</td>
            </tr> */}