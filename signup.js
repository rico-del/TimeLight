document.getElementById('signupForm').addEventListener('submit', 
    function(e){
        e.preventDefault();

        const email=document.getElementById('email').value.trim();
        const password=document.getElementById('password').value.trim();
        const confirmpassword=document.getElementById('confirmpassword').value.trim();

        if(email && password && confirmpassword){
            if(password==confirmpassword){

            alert('Welcome back to the stars');
        }
        else{
            alert('Passwords do not match')
        }
        else{
            alert('Please fill out both fields')
        }

    }
)