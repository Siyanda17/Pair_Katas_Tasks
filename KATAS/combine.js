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