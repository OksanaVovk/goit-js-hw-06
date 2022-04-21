const formEl = document.querySelector('.login-form');
const inputEl = document.querySelectorAll('input');

formEl.addEventListener('submit', onFormElSubmit);

function onFormElSubmit(event) {
  event.preventDefault();

  const { email, password } = event.currentTarget.elements;

  if (email.value === '' || password.value === '') {
    alert('Please fill in all the fields!');
    inputEl.value = '';
  }

  const informOfForm = {
    email: email.value,
    password: password.value,
  };

  console.log(informOfForm);
  event.currentTarget.reset();
}
