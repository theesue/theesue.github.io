var form = document.querySelector("#contact-form");

form.submit(function(event) {
    event.preventDefault();

    var template_params = {
        'sender_email' : 'send_email_value',
        'full_name' : 'full_name_value',
        'message' : 'message_value'
    };

    var service_id = 'gmail';
    var template_id = 'hmong_translator';

    form.querySelector('#contact-form-send').innerHTML = 'Sending...';
    emailjs.send(service_id, template_id, template_params)
        .then(function(response) {
            console.log('successs', reponse.status, reponse.text);
        }, function(error) {
            console.log('failed', error);
            form.querySelector('#contact-form-send').innerHTML = 'Send';
        });
        return false;
});