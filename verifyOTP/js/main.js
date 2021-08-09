const inputs = document.querySelectorAll(".input");


function addcl(){
	let parent = this.parentNode.parentNode;
	parent.classList.add("focus");
}

function remcl(){
	let parent = this.parentNode.parentNode;
	if(this.value == ""){
		parent.classList.remove("focus");
	}
}


inputs.forEach(input => {
	input.addEventListener("focus", addcl);
	input.addEventListener("blur", remcl);
});

function checkotp(){
	var fillotp = $("#otp_input").val();
	var getotp = localStorage.getItem("otp");
	if(getotp){
		getotp=parseInt(getotp);
		if(getotp==fillotp){
			welcomemail();
			alert("sent");
			delete localStorage.otp;
			delete localStorage.customeremail;
			
			window.open("../index.html","_self");
		}else{
			Swal.fire({
				position: 'center',
				icon: 'error',
				title: 'OTP INVALID',
				text: 'Please Enter The Valid OTP',
				showConfirmButton: false,
				timer: 1500
			})
		}
	}
	
}




function generateotp(){
	var random=Math.floor(Math.random()*10000);
	return random;
};



function resendotpmail(){
	var otp=generateotp();
	localStorage.setItem("otp", otp);
	var mailbody=`
	<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">
<head>
	<!--[if (gte mso 9)|(IE)]>
	<xml>
		<o:OfficeDocumentSettings>
			<o:AllowPNG/>
			<o:PixelsPerInch>96</o:PixelsPerInch>
		</o:OfficeDocumentSettings>
	</xml>
	<![endif]-->
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
	<meta name="viewport" content="width=device-width" />
	<meta http-equiv="X-UA-Compatible" content="IE=edge" />
	<title>One Time Password(OTP)- Sellastic_Account_Verification</title>

	<!-- Google Fonts Link -->
	<link href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700" rel="stylesheet" />

	<style type="text/css">

		/*------ Client-Specific Style ------ */
		@-ms-viewport{width:device-width;}
		table, td{mso-table-lspace:0pt; mso-table-rspace:0pt;}
		img{-ms-interpolation-mode:bicubic; border: 0;}
		p, a, li, td, blockquote{mso-line-height-rule:exactly;}
		p, a, li, td, body, table, blockquote{-ms-text-size-adjust:100%; -webkit-text-size-adjust:100%;}
		#outlook a{padding:0;}
		.ReadMsgBody{width:100%;} .ExternalClass{width:100%;}
		.ExternalClass,.ExternalClass div,.ExternalClass font,.ExternalClass p,.ExternalClass span,.ExternalClass td,img{line-height:100%;}

		/*------ Reset Style ------ */
		*{-webkit-text-size-adjust:none;-webkit-text-resize:100%;text-resize:100%;}
		table{border-spacing: 0 !important;}
		h1, h2, h3, h4, h5, h6, p{display:block; Margin:0; padding:0;}
		img, a img{border:0; height:auto; outline:none; text-decoration:none;}
		#bodyTable, #bodyCell{ margin:0; padding:0; width:100%;}
		body {height:100%; margin:0; padding:0; width:100%;}

		.appleLinks a {color: #c2c2c2 !important; text-decoration: none;}
        span.preheader { display: none !important; }

		/*------ Google Font Style ------ */
		[style*="Open Sans"] {font-family:'Open Sans', Helvetica, Arial, sans-serif !important;}				
		/*------ General Style ------ */
		.wrapperWebview, .wrapperBody, .wrapperFooter{width:100%; max-width:600px; Margin:0 auto;}

		/*------ Column Layout Style ------ */
		.tableCard {text-align:center; font-size:0;}
		
		/*------ Images Style ------ */
		.imgHero img{ width:600px; height:auto; }
		
	</style>

	<style type="text/css">
		/*------ Media Width 480 ------ */
		@media screen and (max-width:640px) {
			table[class="wrapperWebview"]{width:100% !important; }
			table[class="wrapperEmailBody"]{width:100% !important; }
			table[class="wrapperFooter"]{width:100% !important; }
			td[class="imgHero"] img{ width:100% !important;}
			.hideOnMobile {display:none !important; width:0; overflow:hidden;}
		}
	</style>

</head>

<body style="background-color:#F9F9F9;">
<center>
	<table border="0" cellpadding="0" cellspacing="0" style="max-width:600px;" width="100%" class="wrapperWebview">
			<tr>
				<td align="center" valign="top">
					<!-- Content Table Open // -->
					<table border="0" cellpadding="0" cellspacing="0" width="100%">
						<tr>
							<td align="right" valign="middle" style="padding-top:10px;padding-right:0px;" class="webview">
								&nbsp;
							</td>
						</tr>
					</table>
					<!-- Content Table Close // -->
				</td>
			</tr>
		</table>
		<!-- Email Wrapper Webview Close //-->

<table border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout:fixed;background-color:#F9F9F9;" id="bodyTable">
	<tr>
		<td align="center" valign="top" style="padding-right:10px;padding-left:10px;" id="bodyCell">
		<!--[if (gte mso 9)|(IE)]><table align="center" border="0" cellspacing="0" cellpadding="0" style="width:600px;" width="600"><tr><td align="center" valign="top"><![endif]-->
		<!-- Email Wrapper Header Open //-->
		<table border="0" cellpadding="0" cellspacing="0" style="max-width:600px;" width="100%" class="wrapperWebview">
			<tr>
				<td align="center" valign="top">
					<!-- Content Table Open // -->
					<table border="0" cellpadding="0" cellspacing="0" width="100%">
						<tr>
							<td align="center" valign="middle" style="padding-top:35px;padding-bottom:35px;background-color: #002726;" class="emailLogo">
								<!-- Logo and Link // -->
								<a href="https://sellastic.tk" target="_blank" style="text-decoration:none;">
									<img src="https://i.ibb.co/QJSfx9N/logo.png" alt="" width="150" border="0" style="width:100%; max-width:350px;height:auto; display:block;"/>
								</a>
							</td>
						</tr>
					</table>
					<!-- Content Table Close // -->
				</td>
			</tr>
		</table>
		<!-- Email Wrapper Header Close //-->

		<!-- Email Wrapper Body Open // -->
		<table border="0" cellpadding="0" cellspacing="0" style="max-width:600px;" width="100%" class="wrapperBody">
			<tr>
				<td align="center" valign="top">

					<!-- Table Card Open // -->
					<table border="0" cellpadding="0" cellspacing="0" style="background-color:#FFFFFF;border-color:#E5E5E5; border-style:solid; border-width:0 1px 1px 1px;" width="100%" class="tableCard">

						<tr>
							<!-- Header Top Border // -->
							<td height="3" style="background-color:rgb(11, 195, 11);font-size:1px;line-height:3px;" class="topBorder" >&nbsp;</td>
						</tr>

						<tr>
							<td align="center" valign="top" style="padding-bottom:40px" class="imgHero">
								<!-- Hero Image // -->
									<img src="https://i.ibb.co/f0k3ygy/user-reset-password.png" width="600" alt="" border="0" style="width:100%; max-width:600px; height:auto; display:block;" />
								
							</td>
						</tr>

						<tr>
							<td align="center" valign="top" style="padding-bottom:5px;padding-left:20px;padding-right:20px;" class="mainTitle">
								<!-- Main Title Text // -->
								<h2 class="text" style="color:#002726; font-family:'Open Sans', Helvetica, Arial, sans-serif; font-size:28px; font-weight:1000; font-style:normal; letter-spacing:normal; line-height:36px; text-transform:none; text-align:center; padding:0; margin:0">
									YOUR ONE TIME PASSWORD (OTP)<br>- - - - - - - - - -
								</h2>
							</td>
						</tr>
						<tr>
							<td align="center" valign="top" style="padding-bottom:30px;padding-left:20px;padding-right:20px;" class="subTitle">
								<!-- Sub Title Text // -->
								<h4 class="text" style="color:#999999; font-family:'Open Sans', Helvetica, Arial, sans-serif; font-size:18px; font-weight:400; font-style:normal; letter-spacing:normal; line-height:26px; text-transform:none; text-align:center; padding:0; margin:0">
									We've received your request to<br>generate your OTP.
								</h4>
							</td>
						</tr>

						<tr>
							<td align="center" valign="top" style="padding-left:20px;padding-right:20px;" class="containtTable">

								<table border="0" cellpadding="0" cellspacing="0" width="100%" class="tableDescription">
									<tr>
										<td align="center" valign="top" style="padding-bottom:20px;" class="description">
											<!-- Description Text// -->
											<p class="text" style="color:#666666; font-family:'Open Sans', Helvetica, Arial, sans-serif; font-size:44px; font-weight:400; font-style:normal; letter-spacing:normal; line-height:26px; text-transform:none; text-align:center; padding:5px; margin:15px">
												Your OTP
											</p>
										</td>
									</tr>
									<tr>
							<!-- Header Top Border // -->
							<td><hr style="border:1px solid rgb(11, 195, 11);width: 35%;" class="topBorder" >&nbsp;</td>
						</tr>
								</table>
								<table border="0" cellpadding="0" cellspacing="0" width="100%" class="tableButton">
									<tr>
										<td align="center" valign="top" style="padding-top:20px;padding-bottom:10px;">

											<!-- Button Table // -->
											<table align="center" border="0" cellpadding="0" cellspacing="0">
												<tr>
													<td align="center" class="ctaButton" style="padding-top:12px;padding-bottom:12px;padding-left:35px;padding-right:35px;border-radius:50px">
														<p class="text" style="color:#002726; font-family:'Open Sans', Helvetica, Arial, sans-serif; font-size:23px; font-weight:700; font-style:normal;letter-spacing:1px; line-height:5px; text-transform:uppercase; text-decoration:none; display:block">
															REGARDS
														</p>
													</td>
												</tr>
											</table>

										</td>
									</tr>
								</table>

							</td>
						</tr>

						<tr>
							<td height="20" style="font-size:1px;line-height:1px;">&nbsp;</td>
						</tr>

						<tr>
							<td align="center" valign="middle" style="padding-bottom:40px" class="signature">
								<!-- signature and Link // -->
								<a href="https://sellastic.tk/others/aboutus" target="_blank" style="text-decoration:none;">
									<img src="https://i.ibb.co/6v6jmw5/Sellastic-Signature.png" alt="" border="0" style="padding:0 0 0 30px;display:block;"/>
								</a>
							</td>
						</tr>
					</table>
					<!-- Table Card Close// -->

					<!-- Space -->
					<table border="0" cellpadding="0" cellspacing="0" width="100%" class="space">
						<tr>
							<td height="30" style="font-size:1px;line-height:1px;">&nbsp;</td>
						</tr>
					</table>

				</td>
			</tr>
		</table>
		<!-- Email Wrapper Body Close // -->

		<!-- Email Wrapper Footer Open // -->
		<table border="0" cellpadding="0" cellspacing="0" style="max-width:600px;" width="100%" class="wrapperFooter">
			<tr>
				<td align="center" valign="top">
					<!-- Content Table Open// -->
					<table border="0" cellpadding="0" cellspacing="0" width="100%" class="footer">
						<tr>
							<td align="center" valign="top" style="padding-top:10px;padding-bottom:10px;padding-left:10px;padding-right:10px;" class="socialLinks">
								<!-- Social Links (Facebook)// -->
								<a href="" target="_blank" style="display:inline-block;" class="facebook">
									<img src="https://i.ibb.co/4dfbxRw/image-8.png" alt="" width="40" border="0" style="height:auto; width:100%; max-width:40px; margin-left:2px; margin-right:2px" />
								</a>
								
								<!-- Social Links (Instagram)// -->
								<a href="#instagram-link" target="_blank" style="display:inline-block;" class="instagram">
									<img src="https://i.ibb.co/VVVRqT0/image-1.png" alt="" width="40" border="0" style="height:auto; width:100%; max-width:40px; margin-left:2px; margin-right:2px" />
								</a>
								<!-- Social Links (mail)// -->
								<a href="mailto:sellasticverify@gmail.com" target="_blank" style="display:inline-block;" class="linkdin">
									<img src="https://i.ibb.co/m5pgWc3/image-3.png" alt="" width="40" border="0" style="height:auto; width:100%; max-width:40px; margin-left:2px; margin-right:2px" />
								</a>
							</td>
						</tr>

						<tr>
							<td align="center" valign="top" style="padding-top:10px;padding-bottom:5px;padding-left:10px;padding-right:10px;" class="brandInfo">
								<!-- Brand Information // -->
								<p class="text" style="color:#777777; font-family:'Open Sans', Helvetica, Arial, sans-serif; font-size:12px; font-weight:400; font-style:normal; letter-spacing:normal; line-height:20px; text-transform:none; text-align:center; padding:0; margin:0;">&copy;&nbsp;Sellastic | Rupinder Singh | Prabhjot Singh |
								</p>
							</td>
						</tr>

						<tr>
							<td align="center" valign="top" style="padding-top:0px;padding-bottom:20px;padding-left:10px;padding-right:10px;" class="footerLinks">
								<!-- Use Full Links (Privacy Policy)// -->
								<p class="text" style="color:#777777; font-family:'Open Sans', Helvetica, Arial, sans-serif; font-size:12px; font-weight:400; font-style:normal; letter-spacing:normal; line-height:20px; text-transform:none; text-align:center; padding:0; margin:0;" >
									<a href="https://sellastic.tk/others/aboutus" style="color:#777777;text-decoration:underline;" target="_blank">About us </a>&nbsp;|&nbsp;<a href="https://sellastic.tk/others/ppolicy" style="color:#777777;text-decoration:underline;" target="_blank"> Privacy Policy</a>&nbsp;|&nbsp;<a href="https://sellastic.tk/others/tc" style="color:#777777;text-decoration:underline;" target="_blank"> Terms & Conditions</a>
								</p>
							</td>
						</tr>

						<tr>
							<td align="center" valign="top" style="padding-top:0px;padding-bottom:10px;padding-left:10px;padding-right:10px;" class="footerEmailInfo">
								<!-- Information of NewsLetter (Subscribe Info)// -->
								<p class="text" style="color:#777777; font-family:'Open Sans', Helvetica, Arial, sans-serif; font-size:12px; font-weight:400; font-style:normal; letter-spacing:normal; line-height:20px; text-transform:none; text-align:center; padding:0; margin:0;" >
								If you have any quetions please contact us <a href="mailto:sellasticverfy@gmail.com" style="color:#777777;text-decoration:underline;" target="_blank">sellasticverify@gmail.com.</a><br> <a href="" style="color:#777777;text-decoration:underline;" target="_blank">Unsubscribe</a> from our mailing lists
								</p>
							</td>
						</tr>
						

						

						<!-- Space -->
						<tr>
							<td height="30" style="font-size:1px;line-height:1px;">&nbsp;</td>
						</tr>
					</table>
					<!-- Content Table Close// -->
				</td>
			</tr>

			<!-- Space -->
			<tr>
				<td height="30" style="font-size:1px;line-height:1px;">&nbsp;</td>
			</tr>
		</table>
		<!-- Email Wrapper Footer Close // -->

		<!--[if (gte mso 9)|(IE)]></td></tr></table><![endif]-->
		</td>
	</tr>
</table>

</center>
</body>
</html>
	`;

var email = localStorage.getItem("customeremail");
Email.send({
	// SecureToken:"c2e1bd23-3726-40aa-8dbd-e3020f31dd01",
    Host : "smtp.gmail.com",
    Username : "sellasticverify@gmail.com",
    // Password : "icvyprfwhenvyfeq",
	Password : "omirhqkgnrskbuzz",
    To : email,
    From : "sellasticverify@gamil.com",
    Subject : "Welcome To Sellastic",
    Body : mailbody
}).then(
  message =>{
	  if(message=="OK"){
		Swal.fire({
			position: 'center',
			icon: 'success',
			title: 'OTP Sent',
			text: 'Check Your Mail For One Time Password(OTP)',
			showConfirmButton: false,
			timer: 1500
		});
		window.open("../verifyOTP/index.html","_self");
	  }else{
		  console.log(message);
		  
	  }
  }
);

};



function welcomemail(){
	var mailbody=`<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
	<html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">
	<head>
		<!--[if (gte mso 9)|(IE)]>
		<xml>
			<o:OfficeDocumentSettings>
				<o:AllowPNG/>
				<o:PixelsPerInch>96</o:PixelsPerInch>
			</o:OfficeDocumentSettings>
		</xml>
		<![endif]-->
		<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
		<meta name="viewport" content="width=device-width" />
		<meta http-equiv="X-UA-Compatible" content="IE=edge" />
		<title>Welcome To SELLASTIC - Sellastic</title>
	
		<!-- Google Fonts Link -->
		<link href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700" rel="stylesheet" />
	
		<style type="text/css">
	
			/*------ Client-Specific Style ------ */
			@-ms-viewport{width:device-width;}
			table, td{mso-table-lspace:0pt; mso-table-rspace:0pt;}
			img{-ms-interpolation-mode:bicubic; border: 0;}
			p, a, li, td, blockquote{mso-line-height-rule:exactly;}
			p, a, li, td, body, table, blockquote{-ms-text-size-adjust:100%; -webkit-text-size-adjust:100%;}
			#outlook a{padding:0;}
			.ReadMsgBody{width:100%;} .ExternalClass{width:100%;}
			.ExternalClass,.ExternalClass div,.ExternalClass font,.ExternalClass p,.ExternalClass span,.ExternalClass td,img{line-height:100%;}
	
			/*------ Reset Style ------ */
			*{-webkit-text-size-adjust:none;-webkit-text-resize:100%;text-resize:100%;}
			table{border-spacing: 0 !important;}
			h1, h2, h3, h4, h5, h6, p{display:block; Margin:0; padding:0;}
			img, a img{border:0; height:auto; outline:none; text-decoration:none;}
			#bodyTable, #bodyCell{ margin:0; padding:0; width:100%;}
			body {height:100%; margin:0; padding:0; width:100%;}
	
			.appleLinks a {color: #c2c2c2 !important; text-decoration: none;}
			span.preheader { display: none !important; }
	
			/*------ Google Font Style ------ */
			[style*="Open Sans"] {font-family:'Open Sans', Helvetica, Arial, sans-serif !important;}				
			/*------ General Style ------ */
			.wrapperWebview, .wrapperBody, .wrapperFooter{width:100%; max-width:600px; Margin:0 auto;}
	
			/*------ Column Layout Style ------ */
			.tableCard {text-align:center; font-size:0;}
			
			/*------ Images Style ------ */
			.imgHero img{ width:600px; height:auto; }
			
		</style>
	
		<style type="text/css">
			/*------ Media Width 480 ------ */
			@media screen and (max-width:640px) {
				table[class="wrapperWebview"]{width:100% !important; }
				table[class="wrapperEmailBody"]{width:100% !important; }
				table[class="wrapperFooter"]{width:100% !important; }
				td[class="imgHero"] img{ width:100% !important;}
				.hideOnMobile {display:none !important; width:0; overflow:hidden;}
			}
		</style>
	
	</head>
	
	<body style="background-color:#F9F9F9;">
	<center>
	
	<table border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout:fixed;background-color:#F9F9F9;" id="bodyTable">
		<tr>
			<td align="center" valign="top" style="padding-right:10px;padding-left:10px;" id="bodyCell">
			<!--[if (gte mso 9)|(IE)]><table align="center" border="0" cellspacing="0" cellpadding="0" style="width:600px;" width="600"><tr><td align="center" valign="top"><![endif]-->
	
			<!-- Email Wrapper Webview Open //-->
			<table border="0" cellpadding="0" cellspacing="0" style="max-width:600px;" width="100%" class="wrapperWebview">
				<tr>
					<td align="center" valign="top">
						<!-- Content Table Open // -->
						<table border="0" cellpadding="0" cellspacing="0" width="100%">
							<tr>
								<td align="right" valign="middle" style="padding-top:10px;padding-right:0px;" class="webview">
									&nbsp;
								</td>
							</tr>
						</table>
						<!-- Content Table Close // -->
					</td>
				</tr>
			</table>
			<!-- Email Wrapper Webview Close //-->
	
			<!-- Email Wrapper Header Open //-->
			<table border="0" cellpadding="0" cellspacing="0" style="max-width:600px;" width="100%" class="wrapperWebview">
				<tr>
					<td align="center" valign="top">
						<!-- Content Table Open // -->
						<table border="0" cellpadding="0" cellspacing="0" width="100%">
							<tr>
								<td align="center" valign="middle" style="padding-top:35px;padding-bottom:35px;background-color: #002726;" class="emailLogo">
									<!-- Logo and Link // -->
									<a href="https://sellastic.tk" target="_blank" style="text-decoration:none;">
										<img src="https://i.ibb.co/QJSfx9N/logo.png" alt="" width="150" border="0" style="width:100%; max-width:350px;height:auto; display:block;"/>
									</a>
								</td>
							</tr>
						</table>
						<!-- Content Table Close // -->
					</td>
				</tr>
			</table>
			<!-- Email Wrapper Header Close //-->
	
			<!-- Email Wrapper Body Open // -->
			<table border="0" cellpadding="0" cellspacing="0" style="max-width:600px;" width="100%" class="wrapperBody">
				<tr>
					<td align="center" valign="top">
	
						<!-- Table Card Open // -->
						<table border="0" cellpadding="0" cellspacing="0" style="background-color:#FFFFFF;border-color:#E5E5E5; border-style:solid; border-width:0 1px 1px 1px;" width="100%" class="tableCard">
	
							<tr>
								<!-- Header Top Border // -->
								<td height="3" style="background-color:rgb(11, 195, 11);font-size:1px;line-height:3px;" class="topBorder" >&nbsp;</td>
							</tr>
	
							<tr>
								<td align="center" valign="top" style="padding-bottom:40px" class="imgHero">
									<!-- Hero Image // -->
										<img src="https://i.ibb.co/5hDpKLL/user-welcome.png" width="600" alt="" border="0" style="width:100%; max-width:600px; height:auto; display:block;" />
								</td>
							</tr>
	
							<tr>
								<td align="center" valign="top" style="padding-bottom:5px;padding-left:20px;padding-right:20px;" class="mainTitle">
									<!-- Main Title Text // -->
									<h2 class="text" style="color:#002726; font-family:'Open Sans', Helvetica, Arial, sans-serif; font-size:38px; font-weight:900; font-style:normal; letter-spacing:normal; line-height:36px; text-transform:none; text-align:center; padding:0; margin:0">
										Welcome to Sellastic!
									</h2>
								</td>
							</tr>
	
							<tr>
								<td align="center" valign="top" style="padding-bottom:30px;padding-left:20px;padding-right:20px;" class="subTitle">
									<!-- Sub Title Text // -->
									<h4 class="text" style="color:#999999; font-family:'Open Sans', Helvetica, Arial, sans-serif; font-size:16px; font-weight:600; font-style:normal; letter-spacing:normal; line-height:26px; text-transform:none; text-align:center; padding:0; margin:0">
										Getting Started With Sellastic Shopping
									</h4>
								</td>
							</tr>
	
							<tr>
								<td align="center" valign="top" style="padding-left:20px;padding-right:20px;" class="containtTable">
	
									<table border="0" cellpadding="0" cellspacing="0" width="100%" class="tablCatagoryLinks">
										<tr>
											<td align="center" valign="top" style="padding-bottom:20px;" class="catagoryLinks">
	
												<a href="#" target="_blank" style="display:inline-block;">
													<img src="img/catagory-1.png" alt="" width="60" border="0" style="height:auto; width:100%; max-width:60px; margin-left:2px; margin-right:2px" />
												</a>
	
												<a href="#" target="_blank" style="display:inline-block;">
													<img src="img/catagory-2.png" alt="" width="60" border="0" style="height:auto; width:100%; max-width:60px; margin-left:2px; margin-right:2px" />
												</a>
	
												<a href="#" target="_blank" style="display:inline-block;">
													<img src="img/catagory-3.png" alt="" width="60" border="0" style="height:auto; width:100%; max-width:60px; margin-left:2px; margin-right:2px" />
												</a>
	
												<a href="#" target="_blank" style="display:inline-block;">
													<img src="img/catagory-4.png" alt="" width="60" border="0" style="height:auto; width:100%; max-width:60px; margin-left:2px; margin-right:2px" />
												</a>
											</td>
										</tr>
									</table>
	
									<table border="0" cellpadding="0" cellspacing="0" width="100%" class="tableTitleDescription">
										<tr>
											<td align="center" valign="top" style="padding-bottom:10px;" class="mediumTitle">
												<!-- Medium Title Text // -->
												<p class="text" style="color:#002726; font-family:'Open Sans', Helvetica, Arial, sans-serif; font-size:20px; font-weight:800; font-style:normal; letter-spacing:normal; line-height:26px; text-transform:none; text-align:center; padding:0; margin:0">
													Welcome to the SELLASTIC Family!
													<br>I am glad that you are reading this email.
												</p>
											</td>
										</tr>
										<tr>
											<td align="center" valign="top" style="padding-bottom:10px;" class="mediumTitle">
												<!-- Medium Title Text // -->
												<p class="text" style="color:#002726; font-family:'Open Sans', Helvetica, Arial, sans-serif; font-size:20px; font-weight:800; font-style:normal; letter-spacing:0px;line-break:strict; line-height:26px; text-transform:uppercase; text-align:center; padding:0; margin:0">
													<br>You are now part of a growing community of Sellastic creating, collaborating, and connecting across the globe.<br>
												</p>
											</td>
										</tr>
										<tr>
											<td align="center" valign="top" style="padding-bottom:20px;" class="description">
												<!-- Description Text// -->
												<p class="text" style="color:#666666; font-family:'Open Sans', Helvetica, Arial, sans-serif; font-size:14px; font-weight:400; font-style:italic;margin: 5px; letter-spacing:normal; line-height:22px; text-transform:none; text-align:center; padding:0; margin:0">
													Thank you for joining with Sellastic, keeping you up to date with what’s new trend is going on in the world.
												</p>
											</td>
										</tr>
									</table>
									
									<table border="0" cellpadding="0" cellspacing="0" width="100%" class="tableButton">
										<tr>
											<td align="center" valign="top" style="padding-top:20px;padding-bottom:20px;">
	
												<!-- Button Table // -->
												<table align="center" border="0" cellpadding="0" cellspacing="0">
													<tr>
														<td align="center" class="ctaButton" style="background-color:#002726;padding-top:12px;padding-bottom:12px;padding-left:35px;padding-right:35px;border-radius:50px">
															<!-- Button Link // -->
															<a class="text" href="https://sellastic.tk" target="_blank" style="color:#FFFFFF; font-family:'Open Sans', Helvetica, Arial, sans-serif; font-size:13px; font-weight:700; font-style:normal;letter-spacing:1px; line-height:20px; text-transform:uppercase; text-decoration:none; display:block">
																Shop now
															</a>
														</td>
													</tr>
												</table>
	
											</td>
										</tr>
									</table>
									
								</td>
							</tr>
							<tr>
								<!-- Header Top Border // -->
								<td><hr style="border:1px solid rgb(11, 195, 11);width: 35%;" class="topBorder" >&nbsp;</td>
							</tr>
	
							<tr>
								<td align="center" valign="top" style="padding-top:20px;padding-bottom:20px;">
	
									<!-- Button Table // -->
									<table align="center" border="0" cellpadding="0" cellspacing="0">
										<tr>
											<td align="center" class="ctaButton" style="padding-top:12px;padding-bottom:12px;padding-left:35px;padding-right:35px;border-radius:50px">
												<p class="text" style="color:#002726; font-family:'Open Sans', Helvetica, Arial, sans-serif; font-size:23px; font-weight:700; font-style:normal;letter-spacing:1px; line-height:5px; text-transform:uppercase; text-decoration:none; display:block">
													REGARDS
												</p>
											</td>
										</tr>
									</table>
	
								</td>
							</tr>
	
							<tr>
								<td align="center" valign="middle" style="padding-bottom:20px" class="signature">
									<!-- signature and Link // -->
									<a href="https://sellastic.tk/others/aboutus" target="_blank" style="text-decoration:none;">
										<img src="https://i.ibb.co/6v6jmw5/Sellastic-Signature.png" alt="" border="0" style="display:block;padding: 0 0 0 30px;"/>
									</a>
								</td>
							</tr>
						</table>
						<!-- Table Card Close// -->
	
						<!-- Space -->
						<table border="0" cellpadding="0" cellspacing="0" width="100%" class="space">
							<tr>
								<td height="30" style="font-size:1px;line-height:1px;">&nbsp;</td>
							</tr>
						</table>
	
					</td>
				</tr>
			</table>
			<!-- Email Wrapper Body Close // -->
	
			<!-- Email Wrapper Footer Open // -->
			<table border="0" cellpadding="0" cellspacing="0" style="max-width:600px;" width="100%" class="wrapperFooter">
				<tr>
					<td align="center" valign="top">
						<!-- Content Table Open// -->
						<table border="0" cellpadding="0" cellspacing="0" width="100%" class="footer">
							
							<tr>
								<td align="center" valign="top" style="padding-top:10px;padding-bottom:10px;padding-left:10px;padding-right:10px;" class="socialLinks">
									<!-- Social Links (Facebook)// -->
									<a href="" target="_blank" style="display:inline-block;" class="facebook">
										<img src="https://i.ibb.co/4dfbxRw/image-8.png" alt="" width="40" border="0" style="height:auto; width:100%; max-width:40px; margin-left:2px; margin-right:2px" />
									</a>
									
									<!-- Social Links (Instagram)// -->
									<a href="#instagram-link" target="_blank" style="display:inline-block;" class="instagram">
										<img src="https://i.ibb.co/VVVRqT0/image-1.png" alt="" width="40" border="0" style="height:auto; width:100%; max-width:40px; margin-left:2px; margin-right:2px" />
									</a>
									<!-- Social Links (mail)// -->
									<a href="mailto:sellasticverify@gmail.com" target="_blank" style="display:inline-block;" class="linkdin">
										<img src="https://i.ibb.co/m5pgWc3/image-3.png" alt="" width="40" border="0" style="height:auto; width:100%; max-width:40px; margin-left:2px; margin-right:2px" />
									</a>
								</td>
							</tr>
	
							<tr>
								<td align="center" valign="top" style="padding-top:10px;padding-bottom:5px;padding-left:10px;padding-right:10px;" class="brandInfo">
									<!-- Brand Information // -->
									<p class="text" style="color:#777777; font-family:'Open Sans', Helvetica, Arial, sans-serif; font-size:12px; font-weight:400; font-style:normal; letter-spacing:normal; line-height:20px; text-transform:none; text-align:center; padding:0; margin:0;">&copy;&nbsp;Sellastic | Rupinder Singh | Prabhjot Singh |
									</p>
								</td>
							</tr>
							<tr>
								<td align="center" valign="top" style="padding-top:0px;padding-bottom:20px;padding-left:10px;padding-right:10px;" class="footerLinks">
									<!-- Use Full Links (Privacy Policy)// -->
									<p class="text" style="color:#777777; font-family:'Open Sans', Helvetica, Arial, sans-serif; font-size:12px; font-weight:400; font-style:normal; letter-spacing:normal; line-height:20px; text-transform:none; text-align:center; padding:0; margin:0;" >
										<a href="https://sellastic.tk/others/aboutus" style="color:#777777;text-decoration:underline;" target="_blank">About us </a>&nbsp;|&nbsp;<a href="https://sellastic.tk/others/ppolicy" style="color:#777777;text-decoration:underline;" target="_blank"> Privacy Policy</a>&nbsp;|&nbsp;<a href="https://sellastic.tk/others/tc" style="color:#777777;text-decoration:underline;" target="_blank"> Terms & Conditions</a>
									</p>
								</td>
							</tr>
	
							
	
							<tr>
								<td align="center" valign="top" style="padding-top:0px;padding-bottom:10px;padding-left:10px;padding-right:10px;" class="footerEmailInfo">
									<!-- Information of NewsLetter (Subscribe Info)// -->
									<p class="text" style="color:#777777; font-family:'Open Sans', Helvetica, Arial, sans-serif; font-size:12px; font-weight:400; font-style:normal; letter-spacing:normal; line-height:20px; text-transform:none; text-align:center; padding:0; margin:0;" >
									If you have any quetions please contact us <a href="mailto:sellasticverfy@gmail.com" style="color:#777777;text-decoration:underline;" target="_blank">sellasticverify@gmail.com.</a><br> <a href="" style="color:#777777;text-decoration:underline;" target="_blank">Unsubscribe</a> from our mailing lists
									</p>
								</td>
							</tr>
	
							<!-- Space -->
							<tr>
								<td height="30" style="font-size:1px;line-height:1px;">&nbsp;</td>
							</tr>
						</table>
						<!-- Content Table Close// -->
					</td>
				</tr>
	
				<!-- Space -->
				<tr>
					<td height="30" style="font-size:1px;line-height:1px;">&nbsp;</td>
				</tr>
			</table>
			<!-- Email Wrapper Footer Close // -->
	
			<!--[if (gte mso 9)|(IE)]></td></tr></table><![endif]-->
			</td>
		</tr>
	</table>
	
	</center>
	</body>
	</html>`;

var email = localStorage.getItem("customeremail");
Email.send({
	// SecureToken:"c2e1bd23-3726-40aa-8dbd-e3020f31dd01",
    Host : "smtp.gmail.com",
    Username : "sellasticverify@gmail.com",
    // Password : "icvyprfwhenvyfeq",
	Password : "omirhqkgnrskbuzz",
    To : email,
    From : "sellasticverify@gamil.com",
    Subject : "Welcome To Sellastic",
    Body : mailbody
}).then(
  message =>{
	  if(message=="OK"){
		alert("done");
	  }else{
		  console.log(message);
		  
	  }
  }
);

};
