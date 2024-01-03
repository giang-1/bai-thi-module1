class PhoneBook{
    constructor(name,phoneNumber,email){
        this.name = name;
        this.phoneNumber = phoneNumber;
        this.email = email;
    }

    addContact =function(name,phoneNumber,email){
        this.name = name;
        this.phoneNumber = phoneNumber;
        this.email = email;
    }
    searchContact = function(name){
        let findName = prompt("nhập tên:");
        if(findName == name){
            
        }
    }
}

let user = new PhoneBook();
user.addContact("giang","12312412","giang@gmail.com")
document.write(user.name + user.phoneNumber + user.email +"<br>") 
let user2 = new PhoneBook();
user2.addContact("hải","0191230","hải@gmail.com")
document.write(user2.name + user2.phoneNumber + user2.email +"<br>")
let user3 = new PhoneBook();
user3.addContact("nghĩa", "192390123","nghĩa@gmail.com")
document.write(user3.name + user3.phoneNumber + user3.email +"<br>")
let user4 = new PhoneBook();
user4.addContact("phước","121328","phuoc@adsaksd")
document.write(user4.name + user4.phoneNumber + user4.email +"<br>")
