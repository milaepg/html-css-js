function betterThanAverage(arr) {
    var sum = 0;
    for(var i = 0; i < arr.length; i++ ){
        sum += arr[i];
    }
    var count = 0
    var avg = sum /arr.length
    for(var i = 0; i < arr.length; i++){
        if(arr[i] > avg){
            count++;
        }
    }
    return count;
}
var result = betterThanAverage([6, 8, 3, 10, -2, 5, 9]);
console.log(result); // esperamos 4 de vuelta