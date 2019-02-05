document.onload = () => {
    var form = document.querySelector('form #contact-form');
    var button = document.querySelector('#contact-form-send');

    form.submit(function(event) {
        event.preventDefault();
    
        /*let template_params = {
            'sender_email' : 'send_email_value',
            'full_name' : 'full_name_value',
            'message' : 'message_value'
        }*/

        var template_params = form.serializeArray().reduce(function (obj, item) {
            obj[item.name] = item.value;
            return obj;
        }, {});
    
        var service_id = 'default_service';
        var template_id = 'hmong_translator';
    
        button.innerHTML = 'Sending...';
        emailjs.send(service_id, template_id, template_params)
            .then(function() {
                console.log('successs');
                button.innerHTML = 'Send';
            }, function(err) {
                console.log('failed', err);
                button.innerHTML = 'Send';
            });
        return false;
    });   
};
