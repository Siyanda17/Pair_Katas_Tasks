function combine_two(list1,list2){
    var combo = [];
    var current_lis1 = 0;
    var current_lis2 = 0;
    for(var i = 1; i <= list1.length * 2; i++){
        if(i % 2 == 0){
            combo[i-1] = list2[current_lis2];
            current_lis2 += 1;
        }
        else{
            combo[i-1] = list1[current_lis1];
            current_lis1 += 1;
        }
    }
    console.log(combo);
}
combine_two([11,22,33], [1,2,3]);

function even_or_odd(number){
    if (number % 2 === 0){
        console.log("Even");
    }else{
        console.log("Odd");
    }
}
even_or_odd(5);

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

function hello(name){
    console.log(`Hello ${name}`);
}
hello("Siyanda");

function right_triangle(sides){
    for(var i = 1; i<=sides;i++){
        var tria = '';
        for(var j = 0; j<i;j++){
            tria += '#';
        }
        console.log(tria);
        tria = '';
    }
}right_triangle(4);

function isosceles(number){
    var space = number;
    for(var l = 1; l<=number;l++){
        space -= 1;
        console.log(' '.repeat(space)+"#".repeat((l * 2) - 1));
    }
}
isosceles(4);

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