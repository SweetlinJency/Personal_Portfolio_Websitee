// contact form validation 
		function validateName(){
			  var name = document.getElementById('name').value;
			  var nameError = document.getElementById('nameError');
			  nameError.innerHTML = "";
			  if(name == ""){
				  nameError.innerHTML = '*Name is required';
			  }
		}

		function validateEmail(){
			  var email = document.getElementById('email').value;
			  var emailError = document.getElementById('emailError');
			  emailError.innerHTML = "";
			  if (email === '') {
				emailError.innerHTML = '*Email is required';
			  }
			  else if(!isValidEmail(email)){
				  emailError.innerHTML = '*Invalid email format';
			  }
		}

		function validateMessage(){
			  var message = document.getElementById('message').value;
			  var messageError = document.getElementById('messageError');
			  messageError.innerHTML = "";
			  if (message === '') {
				messageError.innerHTML = '*Message is required';
			  }
		}

		function validateForm(){
			validateName();
			validateEmail();
			validateMessage();
			//check if there are any error messages
			var errors = document.getElementsByClassName('error');
			for(var i=0; i<errors.length; i++){
				if(errors[i].innerHTML !== ""){
					return false;  //allow form submission
				}
			}
			//If no errors, show success alert
			  alert('Form submitted successfully!');
			 return true;
			};
			function isValidEmail(email){
				var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
				return emailRegex.test(email);
			}
	
	
	
	
// Show or hide the back to top button based on scroll position
	window.onscroll = function() {scrollFunction()};
	function scrollFunction() {
	  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
		document.getElementById("backToTopBtn").style.display = "block";
	  } else {
		document.getElementById("backToTopBtn").style.display = "none";
	  }
	}

// Scroll to top smoothly when the button is clicked
	function scrollToTop() {
	  document.body.scrollTop = 0; // For Safari
	  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
	}
		