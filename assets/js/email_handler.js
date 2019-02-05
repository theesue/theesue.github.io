var contactform = document.querySelector('contact-form');

contactform.submit(function(event) {
    event.preventDefault();

    var template_params = {
        'sender_email' : 'send_email_value',
        'full_name' : 'full_name_value',
        'message' : 'message_value'
    };

    var service_id = 'gmail';
    var template_id = 'hmong_translator';

    contactform.find('#contact-form-send').text('Sending...');
    emailjs.send(service_id, template_id, template_params)
        .then(function(response) {
            console.log('successs', reponse.status, reponse.text);
        }, function(error) {
            console.log('failed', JSON.stringify(error));
            contactform.find('#contact-form-send').text('Send');
        });
        return false;
});