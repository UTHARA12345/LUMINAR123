var lim=Number(prompt("enter the limit"));
var lst=[]
for(i=0;i<lim;i++){
    var element=Number(prompt("enter element"));
    lst.push(element);
}
console.log(i);
var srch=Number(prompt("enter the num"))

console.log(lst);
var low=lst[0];
var upp=len(lst);
var flag=0;
var mid=Math.floor(low+upp)/2;

while(low<=upp){


    if(srch>mid){
        low=mid+1;
    }
    else if(srch<mid){
        upp=mid-1;
    }
    else if(srch==mid){
        flag=1;
        break;
    }
    mid=Math.floor(low+up/2);
}
if(flag>0){
    console.log("search found"+srch);
    }
else{
    console.log("search not found")
    }