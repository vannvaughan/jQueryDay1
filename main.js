var passwordInput = document.getElementById('password_input');

var userNameInput = document.getElementById('user_name_input');

var button = document.querySelector('button');

function randomColor() {
  var rgb1 = Math.floor(Math.random() * 10);
  var rgb2 = Math.floor(Math.random() * 10);
  var rgb3 = Math.floor(Math.random() * 10);
  return `#${rgb1}${rgb2}${rgb3}`;
}

button.onclick = function(e) {
  if (userNameInput.value === 'SheaClose' && passwordInput.value === 'Nope') {
    setInterval(function() {
      document.querySelector('body').style.backgroundColor = randomColor();
    }, 1000);
  } else {
    alert('Wrong Password Dummy!');
  }
};

console.dir(button);
