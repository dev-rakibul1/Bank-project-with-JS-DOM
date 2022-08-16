const btn = document.getElementById("submit");
btn.addEventListener("click", () => {
  const emailField = document.getElementById("email");
  const passwordField = document.getElementById("password");
  const email = emailField.value;
  const password = passwordField.value;

  if (email === "info@gmail.com" && password === "12345") {
    window.location.href = "./bank.html";
  } else {
    const htmlError = document.getElementById("error-display");
    htmlError.innerText = "Invalid your user";
    htmlError.style.opacity = "1";
  }
});
