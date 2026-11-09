for (var i = 0; i < 3; i++) {
    setTimeout(function () {
        console.log("Avec var: " + i);
    }, 100);

}
for (let j = 0; j < 3; j++) {
    setTimeout(function () {
        console.log("Avec let :" + j);
    }, 100);

}