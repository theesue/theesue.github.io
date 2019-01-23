function popup() {
    document.getElementById('contact-form-overlay').style.display = 'block';
}

function close() {
    document.getElementById('contact-form-overlay').style.display = 'none';
    var contactFade = document.getElementById('contact-form-overlay-background');
    contactFade.className = 'unload';
}

function loadingInquiry() {
    var resultFade = document.getElementById('result');
    resultFade.className = 'load';
}

function loadingContact() {
    var contactFade = document.getElementById('contact-form-overlay-background');
    contactFade.className = 'load';
}

window.onload = function() {
    document.getElementById('contactformbutton').onclick = function popupshow() {
        popup();
        window.setTimeout(loadingContact, 200);
    }
    document.getElementById('close-button').onclick = function closePopup() {
        close();
    }
    document.getElementById('popup-click').onclick = function hidePopup() {
        close();
    }
    //document.getElementById('search-button').onclick = function serachKey() {
    //    search();
    //}
}
window.setTimeout(loadingInquiry, 500);