// links //
var home = document.getElementById('containerHOME');
var about = document.getElementById('containerABOUT');
var music = document.getElementById('containerMUSIC');
var websites = document.getElementById('containerWEBSITES');
var projects = document.getElementById('containerPROJECTS');
var contact = document.getElementById('containerCONTACT');
var photo = document.getElementById('aboutphoto');


// mobile //
var checkbox = document.getElementById("mobile-line");

var menu = document.getElementById('mobile-menu');
var blackline = document.getElementById('blackline');

blackline.style.left = '0%';
blackline.style.right = '0%';
menu.style.right = '-100%';


function lefto() {

    if (menu.style.right == '0%') {
        menu.style.right = '-100%';
        blackline.style.left = '0%';
        blackline.style.right = '0%';
    } else {
        menu.style.right = "0%";
        blackline.style.right = '100%';
        blackline.style.left = '-100%';
    }

}

// buttons //
var bhome = document.getElementById('btnHOME');
var babout = document.getElementById('btnABOUT');
var bmusic = document.getElementById('btnMUSIC');
var bwebsites = document.getElementById('btnWEBSITES');
var bprojects = document.getElementById('btnPROJECTS');
var bcontact = document.getElementById('btnCONTACT');
var blogo = document.getElementById('logo');

var bhomem = document.getElementById('btnHOMEm');
var baboutm = document.getElementById('btnABOUTm');
var bmusicm = document.getElementById('btnMUSICm');
var bwebsitesm = document.getElementById('btnWEBSITESm');
var bprojectsm = document.getElementById('btnPROJECTSm');
var bcontactm = document.getElementById('btnCONTACTm');
var blogom = document.getElementById('mobile-logo');


// display : none //
function none() {
    about.style.display = "none";
    photo.style.display = "none";
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

        menu.style.right = "-100%";
        blackline.style.left = '0%';
        blackline.style.right = '0%';

        about.style.display = "block";
        photo.style.display = "block";
        music.style.display = "none";
        websites.style.display = "none";
        projects.style.display = "none";
        contact.style.display = "none";
        home.style.display = "none";
        

    }
})
baboutm.addEventListener('click', function() {
        if (about.style.display == "none") {
            //

            menu.style.right = "-100%";
            blackline.style.left = '0%';
            blackline.style.right = '0%';

            about.style.display = "block";
            photo.style.display = "block";
            music.style.display = "none";
            websites.style.display = "none";
            projects.style.display = "none";
            contact.style.display = "none";
            home.style.display = "none";

        } else
            menu.style.right = "-100%";
        blackline.style.left = '0%';
        blackline.style.right = '0%';
    })
    // MUSIC //
bmusic.addEventListener('click', function() {
    if (music.style.display == "none") {
        //
        menu.style.right = "-100%";
        blackline.style.left = '0%';
        blackline.style.right = '0%';

        about.style.display = "none";
        photo.style.display = "none";
        music.style.display = "block";
        websites.style.display = "none";
        projects.style.display = "none";
        contact.style.display = "none";
        home.style.display = "none";
    } else
        menu.style.right = "-100%";
    blackline.style.left = '0%';
    blackline.style.right = '0%';
})
bmusicm.addEventListener('click', function() {
        if (music.style.display == "none") {
            //
            menu.style.right = "-100%";
            blackline.style.left = '0%';
            blackline.style.right = '0%';

            about.style.display = "none";
            photo.style.display = "none";
            music.style.display = "block";
            websites.style.display = "none";
            projects.style.display = "none";
            contact.style.display = "none";
            home.style.display = "none";
        } else
            menu.style.right = "-100%";
        blackline.style.left = '0%';
        blackline.style.right = '0%';
    })
    // WEBSITES //
bwebsites.addEventListener('click', function() {
    if (websites.style.display == "none") {
        //
        menu.style.right = "-100%";
        blackline.style.left = '0%';
        blackline.style.right = '0%';

        about.style.display = "none";
        photo.style.display = "none";
        music.style.display = "none";
        websites.style.display = "block";
        projects.style.display = "none";
        contact.style.display = "none";
        home.style.display = "none";
    } else
        menu.style.right = "-100%";
    blackline.style.left = '0%';
    blackline.style.right = '0%';
})
bwebsitesm.addEventListener('click', function() {
        if (websites.style.display == "none") {
            //
            menu.style.right = "-100%";
            blackline.style.left = '0%';
            blackline.style.right = '0%';

            about.style.display = "none";
            photo.style.display = "none";
            music.style.display = "none";
            websites.style.display = "block";
            projects.style.display = "none";
            contact.style.display = "none";
            home.style.display = "none";
        } else
            menu.style.right = "-100%";
        blackline.style.left = '0%';
        blackline.style.right = '0%';
    })
    // PROJECTS //
bprojects.addEventListener('click', function() {
    if (projects.style.display == "none") {
        //
        menu.style.right = "-100%";
        blackline.style.left = '0%';
        blackline.style.right = '0%';

        about.style.display = "none";
        photo.style.display = "none";
        music.style.display = "none";
        websites.style.display = "none";
        projects.style.display = "block";
        contact.style.display = "none";
        home.style.display = "none";
    } else
        menu.style.right = "-100%";
    blackline.style.left = '0%';
    blackline.style.right = '0%';
})
bprojectsm.addEventListener('click', function() {
        if (projects.style.display == "none") {
            //
            menu.style.right = "-100%";
            blackline.style.left = '0%';
            blackline.style.right = '0%';

            about.style.display = "none";
            photo.style.display = "none";
            music.style.display = "none";
            websites.style.display = "none";
            projects.style.display = "block";
            contact.style.display = "none";
            home.style.display = "none";
        } else
            menu.style.right = "-100%";
        blackline.style.left = '0%';
        blackline.style.right = '0%';
    })
    // CONTACT //
bcontact.addEventListener('click', function() {
    if (contact.style.display == "none") {
        //
        menu.style.right = "-100%";
        blackline.style.left = '0%';
        blackline.style.right = '0%';

        about.style.display = "none";
        photo.style.display = "none";
        music.style.display = "none";
        websites.style.display = "none";
        projects.style.display = "none";
        contact.style.display = "block";
        home.style.display = "none";
    } else
        menu.style.right = "-100%";
    blackline.style.left = '0%';
    blackline.style.right = '0%';
})
bcontactm.addEventListener('click', function() {
        if (contact.style.display == "none") {
            // 
            menu.style.right = "-100%";
            blackline.style.left = '0%';
            blackline.style.right = '0%';

            about.style.display = "none";
            photo.style.display = "none";
            music.style.display = "none";
            websites.style.display = "none";
            projects.style.display = "none";
            contact.style.display = "block";
            home.style.display = "none";

        } else
            menu.style.right = "-100%";
        blackline.style.left = '0%';
        blackline.style.right = '0%';
    })
    // HOME //
bhome.addEventListener('click', function() {
    menu.style.right = "-100%";
    blackline.style.left = '0%';
    blackline.style.right = '0%';

    none();
})
bhomem.addEventListener('click', function() {
    if (home.style.display == "none") {

    } else {
        menu.style.right = "-100%";
        blackline.style.left = '0%';
        blackline.style.right = '0%';
    }

    none();
})
blogo.addEventListener('click', function() {
    menu.style.right = "-100%";
    blackline.style.left = '0%';
    blackline.style.right = '0%';

    none();
})
blogom.addEventListener('click', function() {
    if (home.style.display == "none") {

    } else {
        menu.style.right = "-100%";
        blackline.style.left = '0%';
        blackline.style.right = '0%';
    }

    none();
})