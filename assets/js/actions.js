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
    if(document.getElementById('result').innerHTML.includes('For inquiries'))
    {
        var arrw = document.getElementById('arrow-symbol');
        arrw.className = 'fadein';
    }
}
function arrwAnimationOut(){
    if(document.getElementById('result').innerHTML.includes('For inquiries'))
    {
        var arrw = document.getElementById('arrow-symbol');
        arrw.classList.replace('fadein', 'fadeout');
    }
}

function arrwHide() {
    var arrw = document.getElementById('result-content').style.pointerEvents ='none';
}

window.onload = function() {
    document.getElementById('contactformbutton').onclick = function popupshow() {
        popup();
        window.setTimeout(loadContact, 200);
    }
    document.getElementById('close-button').onclick = function closePopup() {
        close();
    }
    document.getElementById('popup-click').onclick = function hidePopup() {
        close();
    }
    document.getElementById('search-bar-textbox').onclick = function stopArrow() {
        arrwHide;
    }

}
window.setTimeout(loadInquiryMsg, 500);

var arrwContent = document.getElementById('result-content');
arrwContent.addEventListener('mouseover', arrwAnimationIn);
arrwContent.addEventListener('mouseout', arrwAnimationOut);
