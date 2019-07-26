//all javascript and jquery code here
// Get the modal
var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
function login(){
  var userEmail = document.getElementById("email_field").value;
  var userPassword = document.getElementById("password_field").value;
}

function logout(){
  firebase.auth().signOut();
  window.alert("Signed Out");
  document.getElementById("logout").style.display = "none";
  document.getElementById("login").style.display = "initial";
}

firebase.auth().onAuthStateChange(function(user) {
  if(user){
    var user = firebase.auth().currentUser;
    document.getElementById("logout").style.display = "initial";
    document.getElementById("login").style.display = "none";
  }else{
    document.getElementById("logout").style.display = "none";
    document.getElementById("login").style.display = "initial";
  }
});
