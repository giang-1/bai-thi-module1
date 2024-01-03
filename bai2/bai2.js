let findValue = 0;
function tryLastlndex(arr,value){
    for(let i = 0; i< arr.length; i++){
        if(value === arr[i]){
            findValue = i;
        }
    }
    if(findValue){
        console.log("vị trí cuối cùng của value trong mảng là :" + findValue)
    }else{
        console.log(-1)
    }
}  
tryLastlndex([1,2,3,3,4,3],3);