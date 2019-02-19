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
function loadPage() {
    var serachBar = document.querySelector('.Search-Bar-Textbox');
    var resultFade = document.querySelector('#result');
    var credit = document.querySelector('#credit');
    var copyRight = document.querySelector('#copyright');
    serachBar.id = 'load';
    resultFade.className = 'load';
    credit.className = 'load';
    copyRight.className = 'load';
}

// Load arrow if screen is bigger than the following
function arrwAnimationIn() {
    if(screen.width > 375 && screen.width > 414 && screen.width > 768)
    {
        if(document.querySelector('#result').innerHTML.includes('For inquiries'))
        {
            var arrw = document.getElementById('arrow-symbol');
            arrw.className = 'fadein';
        }
    }
}
// Anime the arrow in and out
function arrwAnimationOut() {
    if(screen.width > 375 && screen.width > 414 && screen.width > 768)
    {
        if(document.getElementById('result').innerHTML.includes('For inquiries'))
        {
            var arrw = document.getElementById('arrow-symbol');
            arrw.classList.replace('fadein', 'fadeout');
        }
    }
}

// Prevent mobile phones from copying arrow character
function hideArrow() {
    var arrw = document.getElementById('result-content').style.pointerEvents ='none';
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

    document.querySelector('.Search-Bar-Textbox').onclick = () => {
        hideArrow();
    };

    // Watch if mouse hovers over the result content area to anime arrow drop down
    var arrwContent = document.getElementById('result-wrapper');
    arrwContent.addEventListener('mouseover', arrwAnimationIn);
    arrwContent.addEventListener('mouseout', arrwAnimationOut);

    var ovrlay = document.querySelector('.Contact-Form-Overlay');
    ovrlay.addEventListener('click', close());

    removeArrow(screen.width, screen.height);
};
window.setTimeout(loadPage, 500);
