document.onload = () => {
    var form = document.querySelector("#contact-form");
    var button = document.querySelector('#contact-form-send');

    form.submit(function(event) {
        event.preventDefault();
    
        var template_params = {
            'sender_email' : 'send_email_value',
            'full_name' : 'full_name_value',
            'message' : 'message_value'
        }
    
        var service_id = 'gmail';
        var template_id = 'hmong_translator';
    
        button.innerHTML = 'Sending...';
        emailjs.send(service_id,template_id,template_params)
            .then(function(response) {
                console.log('successs', reponse.status, reponse.text);
                button.innerHTML = 'Send';
            }, function(err) {
                console.log('failed', err);
                button.innerHTML = 'Send';
            });
            return false;
    });   
};
