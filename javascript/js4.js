//object
//var srt="this is a text text";
//var words=srt.split(" ");
//var ob={};
//for(i of words)
//    {
//        if(i in ob){
//            ob[i]+=1;
//        }
//        else{
//            ob[i]=1;
//        }
//}
//for (i in ob){
//    console.log(i);
//    console.log(ob[i]);
//    }



var num=[10,20,30,10,35,30];
var ob={};
for(i of num){
    if(i in ob){
        ob[i]+=1;
    }
    else{
        ob[i]=1;
    }
}
for (i in ob){
    console.log(i);
    console.log(ob[i]);
    }

