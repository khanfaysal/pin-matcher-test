let generatePin=document.querySelector('#generatePin');
generatePin.addEventListener('click',function(){
    let countPinNum=document.querySelector('#countPinNum').value;
    let fourPinCount=parseInt(Math.random(countPinNum)*10000)+'';
     if(fourPinCount.length==4){
        document.querySelector('#countPinNum').value=fourPinCount;
     }
    
});

// Handle Button Event Calculator Bubble
let dightsContainer=document.querySelector('#dightsContainer');
dightsContainer.addEventListener('click',function(event){
  let digit=event.target.innerText;
  if(isNaN(digit)){
    if(digit==="C"){
        let typedInput=document.querySelector("#typePin");
        typedInput.value="";
    }
    else if(digit==="B"){
        let typedInput=document.querySelector("#typePin");
        typedInput.value = typedInput.value.substring(0, typedInput.value.length - 1);
    }
  }
  else{
   let typedInput=document.querySelector("#typePin");
   typedInput.value=typedInput.value+digit;
  }
 
});

// Verify Pin Handle 
function verifyPin(){
    let pin=document.querySelector('#countPinNum').value;
    let typePin=document.querySelector("#typePin").value;
    if(pin===typePin){
        document.querySelector("#showNotify").style.display="block";
        document.querySelector("#removeNotify").style.display="none";
    }
    else{
        document.querySelector("#removeNotify").style.display="block";
        document.querySelector("#showNotify").style.display="none";
       
    }
    
}