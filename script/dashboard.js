function sidebar_open(){
    document.getElementById("sidebar").style.display = "block";

}

function sidebar_close(){
    document.getElementById("sidebar").style.display = "none";
}

let allButton = document.getElementById("allButton");
let sideBar = document.getElementById("sidebar");
document.onclick = function(e){
    if (!allButton.contains(e.target) && !sideBar.contains(e.target) ) {
        sideBar.style.display = "none";
    }
}