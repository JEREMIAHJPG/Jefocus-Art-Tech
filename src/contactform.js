//initialize firebase
firebase.initializeApp(firebaseConfig);

// reference your database
var contactFormDB = firebase.database().ref('contactform');

document.getElementById('contactform').addEventListener("submit",submitform );

function submitform(e) {
    e.preventDefault();

    var fname = getElementVal('fname');
    var lname = getElementVal('lname');
    var email = getElementVal('email');
    var profession = getElementVal('profession');
    var subject = getElementVal('content');

    // enable alert
    document.querySelector('alert').style.display="block";
    //  remove the alert
    setTimeout(() => { 
        document.querySelector('alert').style.display = "none";
    }, 3000);

    // reset the form
    document.getElementById("contactform").reset();
}
    
const savemessages = (fname, lname, email, profession,subject) => {
    var newcontactform =  contactFormDB.push();

    newcontactform.set({
        firstname:  fname,
        lastname:   lname,
        email:      email,
        profession: profession,
        subject:    subject,
    })  
}

const getElementVAl = (id)=> {
    return document.getElementById(id).value;
}