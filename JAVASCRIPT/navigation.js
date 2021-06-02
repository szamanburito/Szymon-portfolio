var home = document.getElementById('containerHOME');
var about = document.getElementById('containerABOUT');
var music = document.getElementById('containerMUSIC');
var websites = document.getElementById('containerWEBSITES');
var projects = document.getElementById('containerPROJECTS');
var contact = document.getElementById('containerCONTACT');

// display : none //
function none() {
    about.style.display = "none";
    music.style.display = "none";
    websites.style.display = "none";
    projects.style.display = "none";
    contact.style.display = "none";
    home.style.display = "block";
}

none();

// ABOUT ME //
document.getElementById('btnABOUT').addEventListener('click', function() {
        if (about.style.display == "none") {
            //
            about.style.display = "block";
            music.style.display = "none";
            websites.style.display = "none";
            projects.style.display = "none";
            contact.style.display = "none";
            home.style.display = "none";
        }
    })
    // MUSIC //
document.getElementById('btnMUSIC').addEventListener('click', function() {
    if (music.style.display == "none") {
        //
        about.style.display = "none";
        music.style.display = "block";
        websites.style.display = "none";
        projects.style.display = "none";
        contact.style.display = "none";
        home.style.display = "none";
    }
})
document.getElementById('btnWEBSITES').addEventListener('click', function() {
    if (websites.style.display == "none") {
        //
        about.style.display = "none";
        music.style.display = "none";
        websites.style.display = "block";
        projects.style.display = "none";
        contact.style.display = "none";
        home.style.display = "none";
    }
})
document.getElementById('btnPROJECTS').addEventListener('click', function() {
    if (projects.style.display == "none") {
        //
        about.style.display = "none";
        music.style.display = "none";
        websites.style.display = "none";
        projects.style.display = "block";
        contact.style.display = "none";
        home.style.display = "none";
    }
})
document.getElementById('btnCONTACT').addEventListener('click', function() {
    if (contact.style.display == "none") {
        //
        about.style.display = "none";
        music.style.display = "none";
        websites.style.display = "none";
        projects.style.display = "none";
        contact.style.display = "block";
        home.style.display = "none";
    }
})


document.getElementById('btnHOME').addEventListener('click', function() {
    none();
})