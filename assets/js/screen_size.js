function screen_size_style(width, height) {
    var head = document.getElementsByTagName('HEAD')[0];
    var link = document.createElement('link');
    link.setAttribute('rel', 'stylesheet');
    link.setAttribute('type', 'text/css');

    // iPhone X/Xs
    if (width === 375 && height === 812) {
        link.setAttribute("href", '../assets/css/iphone-xxs-screen.css');
    } 
    // iPhone 6/7/8 Plus
    else if (width === 414 && height === 736) {
        link.setAttribute("href", '../assets/css/iphone-678plus-screen.css');
    }
    // iPhone 6/7/8
    else if (width === 375 && height === 667) {
        link.setAttribute("href", '../assets/css/iphone-678-screen.css');
    }
    // S9/9+
    else if (width === 360 && height === 740) {
        link.setAttribute('href', '../assets/css/samsung-s99plus-screen.css');
    }
    //iPad Portrait
    else if (width === 768 && height === 1024) {
        
    }
    //iPad Landscape
    else if (width === 1024 && height === 768) {

    }

    head.appendChild(link);
}

// Execute code to style the right screen size
screen_size_style(screen.width, screen.height);