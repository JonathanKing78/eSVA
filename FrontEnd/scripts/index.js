const form = document.querySelector("#signin")

form.addEventListener('submit', function(e) {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const urlencoded = new URLSearchParams(formData).toString();
			fetch("http://localhost:8000/index", {
				method: 'POST',
				body: urlencoded,
                headers:{
                    'Content-type': 'application/x-www-form-urlencoded'
                }
				
			})
				.then((response) => response.json())
				.then((data) => {
					if(data.suser){
                        console.log(data.suser)
                        let jsonString = JSON.stringify(data.suser);
                        sessionStorage.setItem('currentUser', jsonString)
                        window.location.href='/homepage.html'
                        
					}
                    if(data.suser == null){
                        document.getElementById("sign-in-error").innerText = "Incorrect credentials";
                    }
				})
})





