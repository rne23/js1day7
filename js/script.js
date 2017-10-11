var div1 = document.getElementById('myDiv');
var btn1 = document.getElementById('clickme');

btn1.addEventListener('click', function(){
  var x = prompt('Please enter a title:');
  var title = document.getElementById('myH1');
  title.textContent = x;
  div1.appendChild(title);
  var y = prompt('What did you do today?');
  var today = document.createElement('p');
  today.textContent = y;
  today.style.textAlign = 'justify';
  div1.appendChild(today);
  var z = prompt('What is your favorite color?');
  z.toLowerCase();
  today.style.backgroundColor = z;
})
