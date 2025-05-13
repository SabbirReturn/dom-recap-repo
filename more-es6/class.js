class Teacher{
    constructor(name,subject){
        this.name = name;
        this.subject = subject;
    }
    lecture(){
        console.log('Sir is teaching Math')
    }
}

// let sabbir = new Teacher('Sabbir Hasan', 'ICT');
// console.log(sabbir);


class BusinessMan{
    constructor(name, business, address){
        this.name = name;
        this.business=business
        this.address = address;
    }
}

let sabbir = new BusinessMan('Sabbir','Construction','Uttara');
let address = sabbir.address;
console.log(sabbir)

class details{
    constructor(name,age,address){
        this.name = name;
        this.age = age;
        this.address = address
    }
}
let person1 = new details('Sabbir',26,'Uttara');
let person2 = new details('Hasan',32,'Dhanmondi');
// console.log(person1)
console.log(person1)