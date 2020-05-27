var num=[10,11,12,13,14,15,16]
//for (i of num){
//if(i%2==0){
//console.log(i);}}
var flag=0
var s=Number(prompt("element: "))
for (i in num){
    if(i==s){
        flag=1;
        break;
        }
    else{
        flag=0;
        }

}
if(flag>0){
    alert("element found");
    }
else{
    alert("element not found")}