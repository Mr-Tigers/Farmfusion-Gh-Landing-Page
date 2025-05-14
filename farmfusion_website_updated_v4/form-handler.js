// Connect the waitlist form to the backend API
document.addEventListener('DOMContentLoaded', function() {
    const waitlistForm = document.getElementById('waitlist-form');
    const formSuccess = document.getElementById('form-success');
    
    if (waitlistForm) {
        waitlistForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = {
                name: document.getElementById('name').value,
                email: document.getElementById('email').value,
                company: document.getElementById('company').value,
                role: document.querySelector('input[name="role"]:checked').value,
                message: document.getElementById('message').value
            };
            
            // Disable submit button and show loading state
            const submitButton = waitlistForm.querySelector('button[type="submit"]');
            const originalButtonText = submitButton.textContent;
            submitButton.disabled = true;
            submitButton.textContent = 'Submitting...';
            
            // Send data to backend API
            fetch('/api/waitlist', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            })
            .then(response => response.json())
            .then(data => {
                if (data.success) {
                    // Show success message
                    waitlistForm.style.display = 'none';
                    formSuccess.classList.remove('hidden');
                    
                    // Scroll to success message
                    window.scrollTo({
                        top: formSuccess.offsetTop - 100,
                        behavior: 'smooth'
                    });
                } else {
                    // Show error message
                    alert('Error: ' + (data.error || 'Failed to submit form. Please try again.'));
                    submitButton.disabled = false;
                    submitButton.textContent = originalButtonText;
                }
            })
            .catch(error => {
                console.error('Error:', error);
                alert('An error occurred. Please try again later.');
                submitButton.disabled = false;
                submitButton.textContent = originalButtonText;
            });
        });
    }
});
