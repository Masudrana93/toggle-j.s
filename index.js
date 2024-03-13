let topId = document.getElementById("top-id");
let leftId = document.getElementById("left-id");
let bottomId = document.getElementById("bottom-id");
let rightId = document.getElementById("right-id");


topId.addEventListener('click',function(){
    leftId.classList.toggle("d-none");
});

leftId.addEventListener('click',function(){
    bottomId.classList.toggle("d-none");
});

bottomId.addEventListener('click',function(){
    rightId.classList.toggle("d-none");
});