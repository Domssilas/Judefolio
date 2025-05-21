jQuery(document).ready(function($) {
  "use strict";
  //Contact
  $('form.contactForm').submit(function() {
    var f = $(this).find('.form-group'),
      ferror = false,
      emailExp = /^[^\s()<>@,;:\/]+@\w[\w\.-]+\.[a-z]{2,}$/i;

    // ... (existing validation code remains the same)

    if (ferror) return false;
    else {
      var params = {
        name: $('#name').val(),
        email: $('#email').val(),
        message: $('#message').val()
      };

      emailjs.send("service_n1xizon", "template_idv92wd", params)
        .then(function(res) {
          $("#sendmessage").addClass("show");
          $("#errormessage").removeClass("show");
          $('.contactForm').find("input, textarea").val("");
          alert("Success!" + res.status);
        })
        .catch(function(err) {
          $("#sendmessage").removeClass("show");
          $("#errormessage").addClass("show");
          $('#errormessage').html("Error sending email: " + err);
        });
    }
    return false;
  });
});


