$(function () {
    $('[data-toggle="tooltip"]').tooltip()
});

const desarrolladorDeSoftware = document.getElementById("desarrollador-de-software");

document.addEventListener("scroll", function(){
    console.log(document.getElementById("wraper").offsetTop);
});