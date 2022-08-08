let outPutScreen = document.getElementById("output-screen");

function spac(num){

  outPutScreen.value += num;
}

function calculate(){
  try {
    outPutScreen.value = eval(outPutScreen.value);
    
  }
  catch(err){

    alert("Invalid")
  }
}
  function clear1(){
outPutScreen.value = "";
  }
function del(){
  outPutScreen.value = outPutScreen.value.slice(0,-1);
}
