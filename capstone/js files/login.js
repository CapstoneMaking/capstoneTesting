const registerBtn = document.getElementById('register-swap');
const loginBtn = document.getElementById('login-swap');

registerBtn.addEventListener('click', () => {
    container.classList.add("active");
});

loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});
