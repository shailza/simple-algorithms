#this function finds the length of longest word in a string separated by spaces
function findLongestWord(str) {
  var arr=str.split(" ");
  var max=0;
  var longie="";
  for(var i=0;i<arr.length;i++){
    if(arr[i].length > max)
    {
       max = arr[i].length;}
  }
  return max;
}

findLongestWord("The quick brown fox jumped over the lazy dog");
#thankyou
