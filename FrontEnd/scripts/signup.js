
const form = document.querySelector("#signup");


const validate = (e)=>{
    e.preventDefault();
    const form = e.currentTarget
    const check = (checkName(form.name.value) && checkPass(form.password.value) && (form.password.value == form.cpassword.value));
    console.log("Name",checkName(form.name.value));
    console.log("Pass",checkPass(form.password.value));
    console.log("Confirm",(form.password.value == form.cpassword.value));
    // if (!checkName(form.name)){
    //     check;
    // }
    // if (!checkPass(form.password)){
    //     check;
    // }
    // if(form.password != form.cpassword){
    //     check;
    // }
    
    // else check = true;

    if(check){
        const formData = new FormData(form)
        // for (let pair of formData.entries()) {
        //     console.log(pair[0] + ', ' + pair[1]); 
        // }
		const urlencoded = new URLSearchParams(formData).toString();
			fetch("http://localhost:8000/signup", {
				method: 'POST',
				body: urlencoded,
                headers:{
                    'Content-type': 'application/x-www-form-urlencoded'
                }
				
			})
				.then((response) => response.json())
				.then((data) => {
					if(data.redirect){
                        window.location.href = data.redirect;
						console.log("data in stored")
					}
				})
			
		}
        else{
            document.getElementById("sign-in-error").innerText = "You have tried to sign up using an invalid field format, Please try again";
            setTimeout(function() {
                document.getElementById("sign-in-error").innerText = "";
              }, 2000);
        }
    
    }

const alpha = /^[a-zA-Z\s]+$/
/**
 * 
 * @param {string} name 
 * @returns 
 */
const checkName = (name) => ((name.length <= 14)&& alpha.test(name));

const checkPass = (password) =>{
    var criteria = {
        length: /.{8,}/,
        lowercase: /[a-z]/,
        uppercase: /[A-Z]/,
        digit: /\d/,
        special: /[^A-Za-z0-9]/
    };

    var validPass = Object.values(criteria).every(function(expression) {
        return expression.test(password);
    });

    return validPass;
}

form.addEventListener("submit", validate);