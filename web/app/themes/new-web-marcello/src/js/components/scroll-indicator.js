window.onscroll = function () { myFunction() };

function myFunction() {
   console.log('sss');
   var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
   var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
   var scrolled = (winScroll / height) * 100;
   document.getElementById("scrollIndicator").style.width = scrolled + "%";
}