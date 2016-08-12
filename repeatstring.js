#Repeat a given string (first argument) num times (second argument). Return an empty string if num is not a positive number.
function repeatStringNumTimes(str, num) {
  var x="";
  if(num < 0)
    return x;
  while(num > 0){
   x += str;
    num--;
  }
  return x;
}
