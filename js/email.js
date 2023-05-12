function sendEmail(e){
    e.preventDefault();

    let params={
        from_name:document.getElementById("fname").Value,
        message:document.getElementById("message").Value,
        reply_to:document.getElementById("email")
    }
    emailjs.send('service_x3afkoi', 'image.png', params)
    .then(function(response) {
       console.log('SUCCESS!', response.status, response.text);
    }, function(error) {
       console.log('FAILED...', error);
    });
}