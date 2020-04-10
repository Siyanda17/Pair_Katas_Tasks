function isosceles(number){
    var space = number;
    for(var l = 1; l<=number;l++){
        space -= 1;
        console.log(' '.repeat(space)+"#".repeat((l * 2) - 1));
    }
}
isosceles(4);