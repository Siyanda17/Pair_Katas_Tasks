function longest(array1){
    var longest1 = '';
    var long_number = longest1.length;
    for(var i = 1; i < array1.length; i++){
        if( long_number < array1[i].length){
            longest1 = array1[i];
            long_number = array1[i].length;
        }
        else if(long_number == array1[i].length){
            longest1 += '\n' + array1[i];
            long_number = array1[i].length;
        }
    }console.log(longest1);
}
longest(["the","quick","brown", "fox", "ate", "my", "chickens"]);