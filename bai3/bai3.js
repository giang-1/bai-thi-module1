function isNarcissiticNumber(number){
    let sum  = 0;
    let temp = number;
    while(temp > 0){
        let heSo = temp % 10;
        sum += heSo * heSo * heSo;
        temp = parseInt(temp / 10);}
        if(sum == number){
            console.log(number + "là số tự mãn")
        }else{
            console.log(number + "không phải là số tự mãn")
        }

}
// let numbers = parseInt(prompt("điền số bạn muốn check:"))
// isNarcissiticNumber(numbers);


//hiển thị số tự mãn từ 100 đến 10000
for (let i = 100; i <= 10000; i++) {
    let number = i.toString().length;
    let sum = 0;
    let temp = i;
    while (temp > 0) {
        let remainder = temp % 10;
        sum += remainder ** number;
        temp = parseInt(temp / 10); 
    }
    if (sum == i) {
        console.log(i);
    }
}