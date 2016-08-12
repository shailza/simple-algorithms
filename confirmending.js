#Check if a string (first argument, str) ends with the given target string (second argument, target).
function confirmEnding(str, target) {
  var len=target.length;
  var x= str.substring(str.length - len);
  if(x === target)
    return true;
  return false;
}

confirmEnding("Bastian", "n");
