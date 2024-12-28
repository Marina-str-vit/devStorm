const form = document.querySelector(".footer-form");
const emailInput = document.querySelector('input[type="email"]');
const textInput = document.querySelector('input[type="text"]');
const sendButton = document.querySelector(".footer-button");

const modalOverlay = document.querySelector(".footer-modal-overlay");
const modal = document.querySelector(".footer-modal");
const modalCloseBtn = modal.querySelector(".footer-modal-button");

const modalTitle = modal.querySelector(".footer-modal-h2");
const modalMessage = modal.querySelector(".footer-modal-message");

const emailPattern = /^\w+(\.\w+)?@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
const emailMessage = document.getElementById("email-message");

function validateEmail(email) {
    return emailPattern.test(email);
}

function showValidationMessage(isValid) {
    if (isValid) {
        emailInput.classList.remove("error");
        emailInput.classList.add("success");
        emailMessage.textContent = "Success!";
        emailMessage.classList.remove("error");
        emailMessage.classList.add("success");
    } else {
        emailInput.classList.remove("success");
        emailInput.classList.add("error");
        emailMessage.textContent = "Invalid email, try again.";
        emailMessage.classList.remove("success");
        emailMessage.classList.add("error");
    }
}

emailInput.addEventListener("input", () => {
    const email = emailInput.value.trim();
    if (email === "") {
        emailMessage.textContent = ""; // Очищення, якщо поле порожнє
        emailInput.classList.remove("error", "success");
    } else {
        showValidationMessage(validateEmail(email));
    }
});

function showModal(title, message) {
    modalTitle.textContent = title;
    modalMessage.textContent = message;
    modalOverlay.classList.remove("hidden");
}

sendButton.addEventListener('click', async (event) => {
    event.preventDefault();

    const email = emailInput.value.trim();
    const comments = textInput.value.trim();

    if (!validateEmail(email)) {
        showValidationMessage(false);
        return;
    } else {
        showValidationMessage(true);
    }

    const requestBody = {
        email,
        comments,
    };

    try {
        const response = await fetch(`https://pixabay.com/api/?key=47415384-99a3119bdb6a092e7cf8e4330&q=cooperation&image_type=photo`, {
            method: 'GET',
        });

        if (response.ok) {
            showModal(
                'Thank you for your interest in cooperation!',
                'The manager will contact you shortly to discuss further details and opportunities for cooperation. Please stay in touch.'
            );
            form.reset();
            emailMessage.textContent = ""; 
            emailInput.classList.remove("success", "error");
        } else {
            emailMessage.textContent = "An error occurred. Try again later.";
        }
    } catch (error) {
        emailMessage.textContent = "Connection error. Check your internet connection.";
    }
});

modalCloseBtn.addEventListener('click', closeModal);

modalOverlay.addEventListener('click', (event) => {
    if (event.target === modalOverlay) {
        closeModal();
    }
});

document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
        closeModal();
    }
});

modalOverlay.classList.add("hidden");

function closeModal() {
    modalOverlay.classList.add('hidden');
}
