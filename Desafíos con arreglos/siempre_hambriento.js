function siempreHambriento(arr) {
    var alimento = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] == "comida") {
            console.log("delicioso, delicioso");
            alimento++;
        }
    }
    if (alimento == 0) {
        console.log("Tengo Hambre");
    }
}

siempreHambriento([3.14, "comida", "pastel", true, "comida"]);
// esto debería mostrar "delicioso, "delicioso"
siempreHambriento([4, 1, 5, 7, 2]);
// esto debería mostrar "Tengo hambre"
