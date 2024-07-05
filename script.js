document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Here you can add functionality to send the form data to a server or email

    alert('Thank you for your message, ' + name + '!');
    this.reset();
});
