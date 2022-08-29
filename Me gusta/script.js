function like(numLike){
    var inc = document.getElementById(numLike).textContent;
    let number = parseInt(inc);
    number++;
    document.getElementById(numLike).innerHTML = number;
}