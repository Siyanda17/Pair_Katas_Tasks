function frame(list1){
    var long_1 = longest(list1);
    var top_bottom = '';
    for(var v = 0; v < long_1 + 4; v++){
        top_bottom += '*';
    }
    console.log(top_bottom);
    for(var i = 0; i < list1.length; i++){
        var temp_line = '';
        for(var j = 0; j < long_1; j++){
            if(list1[i].length != long_1){
                var space = long_1 - list1[i].length;
                var space_str = '';
                for(var z = 0; z < space; z++){
                    space_str += " ";
                }
                temp_line = '* '+list1[i]+space_str+' *';
            }
            else{
                temp_line = '* '+list1[i]+' *';
            }
        }
        console.log(temp_line);
    }
    console.log(top_bottom);
}
frame(["Write","good","code","every","day"]);


function longest(array1){
    var longest1 = array1[0];
    var long_number = longest1.length;
    for(var i = 1; i < array1.length; i++){
        if( long_number < array1[i].length){
            longest1 = array1[i];
        }
        else if(long_number === array1[i].length){
            longest1 += '\n' + array1[i];
            long_number = array1.length;
        }
    }return long_number;
}