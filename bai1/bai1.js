let array1 = ["giang","hai","le","phu","nghiem"];
function findEmlement(arr){
    let max = arr[0];
    for(let i = 0;i < arr.length;i++){
        if(max.length < arr[i].length){
            max = arr[i];
        }
    }
    console.log(max);
}
findEmlement(array1);