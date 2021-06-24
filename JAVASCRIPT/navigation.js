// links //
var home = document.getElementById('containerHOME');
var about = document.getElementById('containerABOUT');
var music = document.getElementById('containerMUSIC');
var websites = document.getElementById('containerWEBSITES');
var projects = document.getElementById('containerPROJECTS');
var contact = document.getElementById('containerCONTACT');

// buttons //
var bhome = document.getElementById('btnHOME');
var babout = document.getElementById('btnABOUT');
var bmusic = document.getElementById('btnMUSIC');
var bwebsites = document.getElementById('btnWEBSITES');
var bprojects = document.getElementById('btnPROJECTS');
var bcontact = document.getElementById('btnCONTACT');

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
babout.addEventListener('click', function() {
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
bmusic.addEventListener('click', function() {
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
    // WEBSITES //
bwebsites.addEventListener('click', function() {
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
    // PROJECTS //
bprojects.addEventListener('click', function() {
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
    // CONTACT //
bcontact.addEventListener('click', function() {
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

// HOME //
bhome.addEventListener('click', function() {
    none();
})