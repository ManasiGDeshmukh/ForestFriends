let popup = document.getElementById("popup");
let newTrees = document.querySelector("input");
let count1 = document.querySelector("#counter");

function openPopup(){
     popup.classList.add("open-popup");
}

function closePopup(){    
    document.querySelector('input').value = "";
    document.getElementById('name').value = "";
    document.getElementById('email').value = "";
    document.getElementById('message').value = "";
    popup.classList.remove("open-popup");
}
