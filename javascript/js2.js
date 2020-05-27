//itration looping
//var i=10
////while(i>0){
////console.log(i)
////i--}
//
//var i=1
//while(i<=10){
//console.log(i+"*2="+(i*2));
//i++}

//for(i=10;i>0;i--){
//console.log(i)}
//n1=Number(prompt("upper Num: "))
//n2=Number(prompt("lower Num: "))
//for(i=n2;i<n1;i++){
//if(i%2==0){
//console.log(i)}
//}

//function add(num1,num2){
//res=num1+num2
//console.log(res)}
//add(30,40)
//function sub(num1,num2){
//res=num1-num2
//console.log(res)}
//sub(40,30)
//function multi(num1,num2){
//res=num1+num2
//console.log(res)}
//multi(20,30)

var num=Number(prompt("num: "));
num1=num;
var res=0;
function rev(num){
while(num>0){
    var digit=(num%10);
    res=(res*10)+digit;
    num=Math.floor(num/10);
    console.log(res)
    }
console.log(res);
if(res===num1){
console.log(res);}}

rev(num);