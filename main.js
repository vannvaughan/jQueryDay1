$(document).ready(function() {
//   $('#error_msg').hide();
  var user = 'Shea';
  var pass = '1234';
  $('#button').click(function() {
    var userName = $('#input');
    var password = $('#password');

    userName.css('box-shadow', '0 0 0 5px transparent');
    password.css('box-shadow', '0 0 0 5px transparent');

    if (!userName.val()) {
      userName.css('box-shadow', '0 0 0 5px red');
    //   $('#error_msg').show();
    }
    if (!password.val()) {
      password.css('box-shadow', '0 0 0 5px red');
    //   $('#error_msg').show();
    }
    if (userName.val() === user && password.val() === pass) {
      console.log("You're in");
    } else {
        $('#container').prepend('<p id="error_msg" style="color:red; font-size:12px">Please complete all fields</p>')
        console.log("You shall not pass!!!!!!")
    }
  });
});


// -------Second Set------ Showing old school javascript
// var input = document.getElementById('id');
// var password = document.getElementById('password')
// var button = document.getElementById('button')

// var userName = 'Shea';
// var myPass = 'password'

// button.onclick = function() {
//   if (userName === input.value && myPass === password.value)
//     console.log("You're in!!")
// }


// -------First Set------
// var div = document.getElementById('container');

// function randomColor() {
//   var rgb1 = Math.floor(Math.random() * 10);
//   var rgb2 = Math.floor(Math.random() * 10);
//   var rgb3 = Math.floor(Math.random() * 10);
//   return `#${rgb1}${rgb2}${rgb3}`;
// }

// div.onclick = function() {
//   this.style.backgroundColor = randomColor();
// };