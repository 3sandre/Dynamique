function myFunction() {
	// selection du nom
	let nom = document.querySelector("#nom");
	let names = document.querySelector("#names");
    // le faire apparaitre en bas du formulaire
    names.innerHTML = nom.value;

    // selection de l'email
    let mails = document.querySelector("#mails");
	let mail = document.querySelector("#mail");
    // le faire apparaitre en bas du formulaire
    mail.innerHTML = mails.value;


    // selection du numbre de satisfaction
    let numero = document.querySelector("#numero");
	let satisfaction = document.querySelector("#satisfaction");
    // le faire apparaitre en bas du formulaire
    satisfaction.innerHTML = numero.value;

   
    // selection du nom du coach
    let coach = document.querySelector("#coach");
	let coachs = document.querySelector("#coachs");
    // le faire apparaitre en bas du formulaire
    coachs.innerHTML = coach.value;


    // selection du message
    let sms = document.querySelector("#sms");
	let expériences = document.querySelector("#expériences");
    // le faire apparaitre en bas du formulaire
    expériences.innerHTML = sms.value;

}