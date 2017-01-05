var clicked = document.getElementById("aboutMe");
var aboutMe = document.getElementById("myIntro");
var span = document.getElementById("close")[0];

clicked.onclick = function() {
    
    aboutMe.style.display = "block";
}

span.onclick = function() {
    
    aboutMe.style.display = "none";
}

window.onclick = function(event){
    
    if (event.target == aboutMe){
        
        aboutMe.style.display = "none";
    }
}