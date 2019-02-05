// Display contact form
function popup() {
    var overlay = document.querySelector(".Contact-Form-Overlay");
    var contactContent = document.querySelector('.Contact-Form-Content');
    overlay.id = 'load';
    contactContent.id = 'load';
}

// Close function for close button on contact form
function close() {
    var overlay = document.querySelector('.Contact-Form-Overlay');
    var contactContent = document.querySelector('.Contact-Form-Content');
    var input1 = document.querySelectorAll('#input-text-1');
    var input2 = document.querySelector('#input-text-2');
    overlay.id = 'unload';
    contactContent.id = 'unload';
    input1[0].value = '';
    input1[1].value = '';
    input2.value = '';
}

// Fade in inquiry message 
function loadInquiryMsg() {
    var resultFade = document.querySelector('#result');
    resultFade.className = 'load';
}

// Load arrow if screen is bigger than the following
function arrwAnimationIn(){
    if(screen.width !== 375 && screen.width !== 414 && screen.width !== 768)
    {
        if(document.querySelector('#result').innerHTML.includes('For inquiries'))
        {
            var arrw = document.querySelector('#arrow-symbol');
            arrw.className = 'fadein';
        }
    }
}
// Anime the arrow in and out
function arrwAnimationOut(){
    if(screen.width !== 375 && screen.width !== 414 && screen.width !== 768)
    {
        if(document.getElementById('result').innerHTML.includes('For inquiries'))
        {
            var arrw = document.getElementById('arrow-symbol');
            arrw.classList.replace('fadein', 'fadeout');
        }
    }
}

// Prevent mobile phones from copying arrow character
function arrwHide() {
    var arrw = document.getElementById('result-content').style.pointerEvents ='none';
}

// Dark mode toggle
function ChangeColor() {
    var bod = document.getElementsByTagName('BODY')[0];
    var toggled = document.getElementById('Checkbox-Slider').checked;
    if(toggled) {
        addDarkmode();
    }
    else {
        removejscssfile('darkmode.css','css');
    }
}

function addDarkmode() {
    var body = document.getElementsByTagName('BODY')[0];
    var link = document.createElement('link');
    link.setAttribute('rel', 'stylesheet');
    link.setAttribute('type', 'text/css');
    link.setAttribute('href', '/assets/css/darkmode.css');
    body.appendChild(link);   
}

function removejscssfile(filename, filetype) {
    var targetelement = (filetype=="js") ? "script" : (filetype=="css") ? "link" : "none";   //determine element type to create nodelist from
    var targetattr = (filetype=="js") ? "src" : (filetype=="css") ? "href" : "none";         //determine corresponding attribute to test for
    var files = document.getElementsByTagName(targetelement);

    for (var i = files.length; i >= 0; i--) {                                         //search backwards within nodelist for matching elements to remove
        if (files[i] && files[i].getAttribute(targetattr)!=null && files[i].getAttribute(targetattr).indexOf(filename)!=-1)
            files[i].parentNode.removeChild(files[i]);                       //remove element by calling parentNode.removeChild()
    }
}

var removeArrow = (width, height) => {
    if (width <= 414 && height <= 812) {
        document.querySelector('#result').childNodes[7].remove();
    }
};

// On load 
window.onload = () => {
    document.querySelector('#contact-button').onclick = () => {
        popup();
    };

    document.querySelector('#close-button').onclick = () => {
        close();
    };

    document.querySelector('#search-bar-textbox').onclick = () => {
        arrwHide();
    };

    var toggled = document.querySelector('#Checkbox-Slider').checked;
    if(toggled) {
        addDarkmode();
    }

    // Watch if mouse hovers over the result content area to anime arrow drop down
    var arrwContent = document.getElementById('result-wrapper');
    arrwContent.addEventListener('mouseover', arrwAnimationIn);
    arrwContent.addEventListener('mouseout', arrwAnimationOut);

    // Watch for Dark Mode to be checked
    var toggling = document.querySelector('#Checkbox-Slider');
    toggling.addEventListener('click', ChangeColor);

    var ovrlay = document.querySelector('.Contact-Form-Overlay');
    ovrlay.addEventListener('click', close());

    removeArrow(screen.width, screen.height);

};
window.setTimeout(loadInquiryMsg, 500);
