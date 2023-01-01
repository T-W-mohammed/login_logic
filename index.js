
	function displayForm(e){
		if(e){
			let arr = document.querySelectorAll("section");
			arr.forEach(s=>{

				if(s.className === e){
					s.style.display = "block";
				}else{
					s.style.display = "none";
				}
			});
		}
	}



	function check_Validation_signIn(event){
		event.preventDefault();
		let text = document.getElementById('texts'),
		 	number = document.getElementById('numbers');
		 	pText = document.querySelector('.texts'),
		 	nText = document.querySelector('.numbers');
		 	if(text.value !== "" && !parseInt(text.value)){
		 		text.style.cssText = "border:4px solid green";
		 		pText.innerHTML = "valid";
		 		pText.style.cssText = "color:green"; 
		 	}else{
		 		text.style.cssText = "border:4px solid red";
		 		pText.innerHTML = "Not valid";
		 		pText.style.cssText = "color:red"; 
		 	}
		 	let numberv = number.value;
		 	if( numberv !== ""){
		 		number.style.cssText = "border:4px solid green";
		 		nText.innerHTML = "valid";
		 		nText.style.cssText = "color:green"; 
		 	}else{
		 		number.style.cssText = "border:4px solid red";
		 		nText.innerHTML = "Not valid";
		 		nText.style.cssText = "color:red"; 
		 	}
		 	
		if(text.value !== ""  && numberv !==""){
			 		let newArr = getData();

			 		let a = newArr.filter(a=> a.name == text.value  &&  a.password == numberv );
			 		console.log(a);
			 		let pMessage = document.querySelector('.userExists');
			 		if(a.length > 0 ){
			 			pMessage.innerHTML = `your are in our data base you will go to the home page `;
			 			pMessage.style.csstext = `font-weight:bold;color:green;font-size:30px`;

			 		}
			 		else{
			 			pMessage.innerHTML = `your are not in our data base you need to sign UP `;
			 			pMessage.style.csstext = `font-weight:bold;color:red;font-size:30px1`;
			 		}


			 		
			 	}
	}

	function setData(elemet){
		 localStorage.setItem('users',JSON.stringify(elemet));
	}

	function getData(){
		return JSON.parse(localStorage.getItem('users'));
	}

	

	function check_Validation_signUp(event){
			event.preventDefault();
			let text = document.getElementById('text'),
			 	number = document.getElementById('number');
			 	pText = document.querySelector('.text'),
			 	nText = document.querySelector('.number');
			 	if(text.value !== "" && !parseInt(text.value)){
			 		text.style.cssText = "border:4px solid green";
			 		pText.innerHTML = "valid";
			 		pText.style.cssText = "color:green"; 
			 	}else{
			 		text.style.cssText = "border:4px solid red";
			 		pText.innerHTML = "Not valid";
			 		pText.style.cssText = "color:red"; 
			 	}
			 	let numberv = number.value;
			 	if( numberv !== ""){
			 		number.style.cssText = "border:4px solid green";
			 		nText.innerHTML = "valid";
			 		nText.style.cssText = "color:green"; 
			 	}else{
			 		number.style.cssText = "border:4px solid red";
			 		nText.innerHTML = "Not valid";
			 		nText.style.cssText = "color:red"; 
			 	}
			 	
			 	if(text.value !== "" && !parseInt(text.value) && numberv !==""){
			 		
			 		let newArr = getData();
			 		let a = newArr.filter(a=> a.name == text.value  &&  a.password == numberv );
			 		if(a.length == 0 ){
			 			newArr.push({name: text.value  , password:numberv});
						setData(newArr);
						document.querySelector('.userExist').innerHTML = "your just have made an account in our website";

			 		}
			 		else{
			 			document.querySelector('.userExist').innerHTML = "the name and password are already exist ! ";
			 		}


			 		
			 	}
	}		