let Gifimg = document.getElementById(contact-right)
GIFimg.src = "gif bru.gif"
GIFimg.addEventLister("load", function(){
GIFimg.loop = false;
GIFimg.play();
});