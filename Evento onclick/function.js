function changeLabel() {
    let btn = document.getElementById('btn-label');
    if(btn.innerText == 'Login') {
          btn.innerText = 'Logout';
    }
    else {
          btn.innerText = 'Login';
    }
} 
function showMessage() {
    alert("Ninja was liked");
  }
  
  function disappear() {
    document.getElementById("btn-add").style.display="none"; 
  }