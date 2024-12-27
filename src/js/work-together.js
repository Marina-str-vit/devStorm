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

function validateEmail(email) {
    return emailPattern.test(email);
}

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
        alert('Please enter a valid email.');
        return;
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
        } else {
            alert('An error occurred while submitting the form. Please try again.');
        }
    } catch (error) {
        alert('Connection error. Check your internet connection.');
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