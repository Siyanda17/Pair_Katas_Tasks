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