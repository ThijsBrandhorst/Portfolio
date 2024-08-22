document.addEventListener('DOMContentLoaded', async function () {
    emailjs.init(ENV.EMAIL_JS_USER_ID);

    var form = document.getElementById('contactForm');
    form.addEventListener('submit', function (event) {
        event.preventDefault();

        var formData = {
            from_name: form.name.value,
            reply_to: form.email.value,
            message: form.message.value
        };

        emailjs.send(ENV.EMAIL_JS_SERVICE_ID, ENV.EMAIL_JS_TEMPLATE_ID, formData)
            .then(function(response) {
                console.log('Email sent successfully:', response);
                alert('Your message has been sent successfully!');
            }, function(error) {
                console.error('Email sending failed:', error);
                alert('An error occurred while sending your message. Please try again later.');
            });
    });
});
