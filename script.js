document.addEventListener('DOMContentLoaded', () => {
    const userInput = document.getElementById('user-input');
    const checkBtn = document.getElementById('check-btn');
    const clearBtn = document.getElementById('clear-btn');
    const resultsDiv = document.getElementById('results-div');

    checkBtn.addEventListener('click', () => {
        const phoneNumber = userInput.value.trim();

        if (phoneNumber === '') {
            alert('Please provide a phone number');
            return;
        }

        const isValid = validatePhoneNumber(phoneNumber);

        if (isValid) {
            resultsDiv.textContent = `Valid US number: ${formatPhoneNumber(phoneNumber)}`;
            resultsDiv.style.color = '#28a745'; 
        } else {
            resultsDiv.textContent = `Invalid US number: ${phoneNumber}`;
            resultsDiv.style.color = '#dc3545'; 
        }
    });

    clearBtn.addEventListener('click', () => {
        resultsDiv.textContent = '';
        userInput.value = '';
    });

    function validatePhoneNumber(phoneNumber) {
        const phoneRegex = /^1?[-. ]?(\(\d{3}\)|\d{3})[-. ]?\d{3}[-. ]?\d{4}$/;
        return phoneRegex.test(phoneNumber);
    }

    function formatPhoneNumber(phoneNumber) {
   
        const cleaned = phoneNumber.replace(/\D/g, ''); 
        const match = cleaned.match(/^(\d{1,3})(\d{3})(\d{3})(\d{4})$/);
        if (match) {
            return `+1 (${match[1]}) ${match[2]}-${match[3]}-${match[4]}`;
        }
        return phoneNumber;
    }
});
