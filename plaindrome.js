#to check if string is  palindrome in javascript
function palindrome(str) {
  // Good luck!
  str = str.replace(/[^a-zA-Z0-9]/ig,'').toLowerCase();
  var x = str.split('').reverse().join('');
  if( x === str){
    
  return true;}
  
  return false;
}



palindrome("eye");
