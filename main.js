function long(){
  const one=document.getElementById("first").value
  const two=document.getElementById("second").value
  const longest= Math.max(parseInt(one),parseInt(two))
  
  document.getElementById("result").innerHTML="The Maximum of two numbers is: "+longest
  
}


