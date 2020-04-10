function square(units){
    for(var i = 0;i<units;i++){
        var line = "";
        for(var j = 0;j<units;j++){
            line += '#';
        }
        console.log(line);
        line = 0;
    }
}
square(2);