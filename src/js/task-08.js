const formEl = document.querySelector(".login-form");


formEl.addEventListener('submit', onFormElSubmit);

function onFormElSubmit(event) {
    event.preventDefault();

    const { email, password } = event.currentTarget.elements;

    if (email.value === "" || password.value === "") {
    return alert("Please fill in all the fields!");
    }

    const informOfForm = {
        email: email.value,
        password: password.value,
    }

    console.log(informOfForm);
    event.currentTarget.reset();   
}
    

   