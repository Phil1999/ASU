/* open/close side nav js stuff */
function openNav() {
  if (document.getElementById("mySidenav").style.width == "210px") {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
  }
  else {
    document.getElementById("mySidenav").style.width = "210px";
    document.getElementById("main").style.marginLeft = "210px";

  }
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";


}
