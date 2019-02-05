document.onload = () => {
    let form = document.querySelector("#contact-form");
    let button = document.querySelector('#contact-form-send');

    form.submit(function(event) {
        event.preventDefault();
    
        let template_params = {
            'sender_email' : 'send_email_value',
            'full_name' : 'full_name_value',
            'message' : 'message_value'
        }
    
        let service_id = 'gmail';
        let template_id = 'hmong_translator';
        let user_id = 'user_AaGPQlJDryNmPCv9GWwk9';
    
        button.innerHTML = 'Sending...';
        emailjs.send(service_id,template_id,template_params,user_id)
            .then(function(response) {
                console.log('successs', response.status, response.text);
                button.innerHTML = 'Send';
            }, function(err) {
                console.log('failed', err);
                button.innerHTML = 'Send';
            });
        return false;
    });   
};
