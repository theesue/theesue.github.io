function screen_size_style(width, height) {
    var head = document.getElementsByTagName('HEAD')[0];
    var link = document.createElement('link');
    link.setAttribute('rel', 'stylesheet');
    link.setAttribute('type', 'text/css');

    var body = document.getElementsByTagName('BODY')[0];
    var toggle = document.createElement('label');
    var input = document.createElement('input');
    var slider = document.createElement('span');
    toggle.setAttribute('class', 'Darkmode-Toggle');
    input.setAttribute('class', 'Checkbox');
    slider.setAttribute('class', 'Slider');


    // iPhone X/Xs
    if(width === 375 && height === 812){
        link.setAttribute("href", '../assets/css/iphone-xxs-screen.css');
    } 
    // iPhone 6/7/8 Plus
    else if(width === 414 && height === 736){
        link.setAttribute("href", '../assets/css/iphone-678plus-screen.css');
    }
    // iPhone 6/7/8
    else if(width === 375 && height === 667){
        link.setAttribute("href", '../assets/css/iphone-678-screen.css');
    }
    else if(width === 360 && height === 740){
        link.setAttribute('href', '../assets/css/samsung-s99plus-screen.css');
    }
}

// Execute code to style the right screen size
screen_size_style(screen.width, screen.height);