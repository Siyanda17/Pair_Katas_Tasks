function longest(array1){
    var longestword="";
    var wordlength=0;
    for (var i= 0; i< array1.length; i++){
        if (wordlength < array1[i].length){
            longestword = array1[i];
            wordlength = array1[i].length;
        }
        else if (wordlength ==array1[i].length){
            longestword += "\n" + array1[i];
            wordlength = array1[i].length;
        }
    }
    console.log(longestword);
}
longest(["the","quick","brown", "fox", "ate", "my", "chickens"]);