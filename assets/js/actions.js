// Display contact form
function popup() {
    document.getElementById('contact-form-overlay').style.display = 'block';
}
// Close function for close button on contact form
function close() {
    document.getElementById('contact-form-overlay').style.display = 'none';
    var contactFade = document.getElementById('contact-form-overlay-background');
    contactFade.className = 'unload';
}
// Fade in inquiry message 
function loadInquiryMsg() {
    var resultFade = document.getElementById('result');
    resultFade.className = 'load';
}
// Fade in contact form
function loadContact() {
    var contactFade = document.getElementById('contact-form-overlay-background');
    contactFade.className = 'load';
}

function arrwAnimationIn(){
    if(screen.width !== 375 && screen.width !== 414 && screen.width !== 768)
    {
        if(document.getElementById('result').innerHTML.includes('For inquiries'))
        {
            var arrw = document.getElementById('arrow-symbol');
            arrw.className = 'fadein';
        }
    }
}
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

// On load 
window.onload = function() {
    document.getElementById('contact-form-button').onclick = function popupshow() {
        popup();
        window.setTimeout(loadContact, 200);
    }
    document.getElementById('close-button').onclick = function closePopup() {
        close();
    }
    document.getElementById('search-bar-textbox').onclick = function stopArrow() {
        arrwHide;
    }
    var toggled = document.getElementById('Checkbox-Slider').checked;
    if(toggled) {
        addDarkmode();
    }
}
window.setTimeout(loadInquiryMsg, 500);

var arrwContent = document.getElementById('result-wrapper');
arrwContent.addEventListener('mouseover', arrwAnimationIn);
arrwContent.addEventListener('mouseout', arrwAnimationOut);

var toggling = document.getElementById('Checkbox-Slider');
toggling.addEventListener('click', ChangeColor);
