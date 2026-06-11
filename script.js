const form = document.getElementById("formulaire");

const nom = document.getElementById("nom");
const email = document.getElementById("email");
const password = document.getElementById("password");

const successMessage = document.getElementById("success-message");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    let isValid = true;

    // Nom
    if (nom.value.trim() === "") {
        setError(nom, "Veuillez entrer votre nom");
        isValid = false;
    } else if (nom.value.trim().length < 3) {
        setError(nom, "Le nom doit contenir au moins 3 caractères");
        isValid = false;
    } else {
        setSuccess(nom);
    }

    // Email
    if (email.value.trim() === "") {
        setError(email, "Veuillez entrer votre email");
        isValid = false;
    } else if (!isValidEmail(email.value.trim())) {
        setError(email, "Adresse email invalide");
        isValid = false;
    } else {
        setSuccess(email);
    }

    // Mot de passe
    if (password.value.trim() === "") {
        setError(password, "Veuillez entrer votre mot de passe");
        isValid = false;
    } else if (password.value.length < 6) {
        setError(password, "Minimum 6 caractères");
        isValid = false;
    } else {
        setSuccess(password);
    }

    // Succès
    if (isValid) {
        successMessage.textContent = "Formulaire envoyé avec succès ✅";

        form.reset();

        document
            .querySelectorAll(".input-box")
            .forEach(box => box.classList.remove("success"));
    } else {
        successMessage.textContent = "";
    }
});

function setError(input, message) {
    const inputBox = input.parentElement;
    const small = inputBox.querySelector("small");

    inputBox.classList.add("error");
    inputBox.classList.remove("success");

    small.textContent = message;
}

function setSuccess(input) {
    const inputBox = input.parentElement;
    const small = inputBox.querySelector("small");

    inputBox.classList.add("success");
    inputBox.classList.remove("error");

    small.textContent = "";
}

function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}