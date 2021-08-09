// CHATBOT

function cb_open(){
	document.getElementById("cb-content").style.display="block";
}

function cb_close(){
	document.getElementById("cb-content").style.display="none";
}

function cb_chat(){
	var name= document.getElementById("cb-name").value;
	var phone= document.getElementById("cb-phone").value;
	var ques= document.getElementById("cb-ques").value;
	
	document.getElementById("cb-form").style.display="none";
	document.getElementById("cb-chat").style.display="block";
	document.getElementById("cb-mark").style.display="none";
	document.getElementById("cb-header").innerHTML="We are live and ready to chat with you now. Say something to start a live chat."
	var forminfo = document.createElement("div");
	forminfo.innerHTML="Name: "+name+"<br>Phone: "+phone+"<br>Question: "+ques;
	forminfo.setAttribute('class', 'divright');
	document.getElementById("cb-chat").appendChild(forminfo);

	var selly = document.createElement("div");
	selly.innerHTML="Hi, I am Selly. Sellastic's Virtual AI. Please Choose The Options Below Related To Your Problem.";
	selly.setAttribute('class', 'divleft');
	document.getElementById("cb-chat").appendChild(selly);

	
	
}

function btm_btn1(){
	var user1 = document.createElement("div");
	user1.innerHTML="Delivery";
	user1.setAttribute('class', 'divright');
	document.getElementById("cb-chat").appendChild(user1);

	var selly1 = document.createElement("div");
	selly1.innerHTML="Usually products take upto 2-3 days depending on your location, but in case you didn't received the product, please make a ticket.";
	selly1.setAttribute('class', 'divleft');
	document.getElementById("cb-chat").appendChild(selly1);

	var elem = document.getElementById('cb-chat');
	elem.scrollTop = elem.scrollHeight;

}

function btm_btn2(){
	var user2 = document.createElement("div");
	user2.innerHTML="Cancellation";
	user2.setAttribute('class', 'divright');
	document.getElementById("cb-chat").appendChild(user2);

	var selly2 = document.createElement("div");
	selly2.innerHTML="If you placed your order by mistake or want to cancel it, you can do it before the product gets shipped.";
	selly2.setAttribute('class', 'divleft');
	document.getElementById("cb-chat").appendChild(selly2);

	var elem = document.getElementById('cb-chat');
	elem.scrollTop = elem.scrollHeight;
}

function btm_btn3(){
	var user3 = document.createElement("div");
	user3.innerHTML="Refund";
	user3.setAttribute('class', 'divright');
	document.getElementById("cb-chat").appendChild(user3);

	var selly3 = document.createElement("div");
	selly3.innerHTML="You can request refund only if you are not satisfied with the product or didn't received it.";
	selly3.setAttribute('class', 'divleft');
	document.getElementById("cb-chat").appendChild(selly3);

	var elem = document.getElementById('cb-chat');
	elem.scrollTop = elem.scrollHeight;
}

function btm_btn4(){
	var user4 = document.createElement("div");
	user4.innerHTML="Live Chat";
	user4.setAttribute('class', 'divright');
	document.getElementById("cb-chat").appendChild(user4);

	var selly4 = document.createElement("div");
	selly4.innerHTML="Our service executive will be with you right away. Please waite for some time.";
	selly4.setAttribute('class', 'divleft');
	document.getElementById("cb-chat").appendChild(selly4);

	var elem = document.getElementById('cb-chat');
	elem.scrollTop = elem.scrollHeight;
}