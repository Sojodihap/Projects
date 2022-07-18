
 function displayDiv(idName){
      let x=document.getElementById(idName);
      let button=document.getElementById('but1');
      if (button.innerHTML === "More Details") {
        button.innerHTML = "less Detail";
        x.style.display="block";
      }
      else{button.innerHTML="More Details";
        x.style.display="none";
      }
}

function displayDiv1(idName){
      let x=document.getElementById(idName);
      let button=document.getElementById('but2');
      if (button.innerHTML === "More Details") {
        button.innerHTML = "less Detail";
        x.style.display="block";
      }
      else{button.innerHTML="More Details";
        x.style.display="none";
      }
}
var button = document.getElementById('remBtn')

function removeReg(del_reg) {
  swal({
      title: "Booked successfully",
      text: "An email will be sent to you with complete reservation details",
      icon: "success",
      buttons: 'OK',
      
    })
    .then(function(value) {
      console.log('returned value:', value);
    });
}

button.addEventListener('click', function() {
  console.log('clicked on button')
  removeReg('SomeCustomRegName');
});
var button = document.getElementById('remBtn1') 

function removeReg(del_reg) {
  swal({
    title: "Booked successfully",
      text: "An email will be sent to you with complete reservation details",
      icon: "success",
      buttons: 'OK',
      
    })
    .then(function(value) {
      console.log('returned value:', value);
    });
}

button.addEventListener('click', function() {
  console.log('clicked on button')
  removeReg('SomeCustomRegName');
}); 


function overr() {
  let img=document.getElementById('div1-over');
  img.style.transform = "scale(2)";
    img.style.transition = "all .35s ease-in-out";

}
function mouseOutt() {
  let img=document.getElementById('div1-over');
  img.style.transform="none";
}
function over() {
  let img=document.getElementById('div2-over');
  img.style.transform = "scale(2)";
    img.style.transition = "all .35s ease-in-out";

}
function mouseOut() {
  let img=document.getElementById('div2-over');
  img.style.transform="none";
}
function ovver() {
  let img=document.getElementById('div3-over');
  img.style.transform = "scale(2)";
    img.style.transition = "all .35s ease-in-out";

}
function mmouseOut() {
  let img=document.getElementById('div3-over');
  img.style.transform="none";
}

function over2() {
  let x=document.getElementById('over');
  x.style.border="solid 2px";
}
function mouseOut2() {
  let x=document.getElementById('over');
  x.style.border="0px";
}
function oveer() {
  let x=document.getElementById('over1');
  x.style.border="solid 2px";
}
function mouseOuut() {
  let x=document.getElementById('over1');
  x.style.border="0px";
}

function check(){
  alert("Welcom in Medical Service Website :)")
}


