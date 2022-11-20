let letters = 'qwertyuiopasdfghjklzxcvbnm';
let digits = '0123456789';
let specials = '!@#$%^&*()_-+=|/.,:;[]{}';

let input_test = document.getElementById('input');

let letter = document.getElementById('letters');
let digit = document.getElementById('digits');
let special = document.getElementById('special');
let len = document.getElementById('len');

input_test.onblur = function() {
    document.getElementById('message').style.display = 'none';
  }
input_test.onfocus = function() {
    document.getElementById('message').style.display = 'block';
  }
input.addEventListener('keyup', function (evt) {
  let input_val = input.value;
  let is_s = false;
  let is_d = false; 
  let is_sp = false;
  letter.style.color = '#e7140d';
  digit.style.color = '#e7140d';
  special.style.color = '#e7140d';

  for (let i = 0; i < input_val.length; i++) {
   
    if (!is_s && letters.indexOf(input_val[i]) != -1) {
      is_s = true;
      letter.style.color = '#61ac27';
    }
    
    else if (!is_d && digits.indexOf(input_val[i]) != -1) {
      is_d = true;
      digit.style.color = '#61ac27';
    } 
    
    else if (!is_sp && specials.indexOf(input_val[i]) != -1) {
      is_sp = true;
      special.style.color = '#61ac27';
    }
  }

  let rating = 0;
  if (is_s) rating++;
  if (is_d) rating++;
  if (is_sp) rating++; 

  if (input_val.length == 0) {
    first.style.backgroundColor = '#cacaca';
    second.style.backgroundColor = '#cacaca';
    third.style.backgroundColor = '#cacaca';

  } 
  else if (input_val.length < 8) {
    first.style.backgroundColor = '#e7140d';
    second.style.backgroundColor = '#e7140d';
    third.style.backgroundColor = '#e7140d';
    len.style.color = '#e7140d';
  }

  else if (input_val.length >= 8 && rating == 1) {
    first.style.backgroundColor = '#e7140d';
    second.style.backgroundColor = '#cacaca';
    third.style.backgroundColor = '#cacaca';
  }
  
  // if (input_val.length >= 8){
  //   len.style.color = '#61ac27';
  // }

  else if (input_val.length >= 8 && rating < 3) {
    first.style.backgroundColor = '#fcf403';
    second.style.backgroundColor = '#fcf403';
    third.style.backgroundColor = '#cacaca';
  } 
  
  else if (input_val.length >= 8 && rating >= 3) {
    first.style.backgroundColor = '#61ac27';
    second.style.backgroundColor = '#61ac27';
    third.style.backgroundColor = '#61ac27';
  }
  
});