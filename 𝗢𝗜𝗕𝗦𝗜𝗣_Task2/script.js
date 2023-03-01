// When the user scrolls down 50px from the top of the document, resize the header's font size
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
  if ( document.body.scrollTop > 50 || document.documentElement.scrollTop > 50 ) {
    document.getElementById( "header" ).style.fontSize = "15px";
    document.getElementById( "header" ).style.borderBottomLeftRadius = "50%";
    document.getElementById( "header" ).style.borderBottomRightRadius = "50%";
  } else {
    document.getElementById( "header" ).style.fontSize = "45px";
    document.getElementById( "header" ).style.borderBottomLeftRadius = "0px";
    document.getElementById( "header" ).style.borderBottomRightRadius = "0px";

  }
}
