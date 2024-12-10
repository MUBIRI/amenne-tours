function sendMail(){
    let parms = {
        place: document.getElementById('place').value,
        guests: document.getElementById('guests').value,
        arrival: document.getElementById('arrival').value,
        leaving: document.getElementById('leaving').value,
        accommodation: document.getElementById('input[name="accommodation"]:checked').value,
    }
    emailjs.send("service_lubd4lt", "template_tvfufbr", parms).then(alert("Booking Successful!"))
}