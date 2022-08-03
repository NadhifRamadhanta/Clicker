const view = document.querySelector(".view");

let dummyNumber = 1;

view.addEventListener("click", function(){
    document.querySelector(".number").innerHTML = dummyNumber++;
    
    let a = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    let c = Math.floor(Math.random() * 256);
    document.body.style.backgroundColor= 'rgb(' + a + ',' + b + ',' + c + ')';

    console.log("CLICKED");
}, {once : false});




