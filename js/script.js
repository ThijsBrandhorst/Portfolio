import config from './config.js';

emailjs.init(config.emailJsUserId);

document.addEventListener('DOMContentLoaded', function () {
    var form = document.getElementById('contactForm');
    form.addEventListener('submit', function (event) {
        event.preventDefault();

        var formData = {
            from_name: form.name.value,
            reply_to: form.email.value,
            message: form.message.value
        };        
        
        // Send form data to EmailJS to trigger email sending
        emailjs.send(config.emailJsServiceId, config.emailJsTemplateId, formData)
            .then(function(response) {
                console.log('Email sent successfully:', response);
                alert('Your message has been sent successfully!');
            }, function(error) {
                console.error('Email sending failed:', error);
                alert('An error occurred while sending your message. Please try again later.');
            });
    });
});
