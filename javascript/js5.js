var x=[1,2];

var y=[3,4];
var lst=[];
for(i of x){
    for(j of y){
        console.log((i+j));
        lst.push((i+j));
        j++;

    }

i++;
}

console.log(lst);