// 4. Реализуйте класс `Валидатор`, который будет проверять строки. К примеру, у него будет метод `isEmail`, который параметром принимает строку и проверяет, является ли она корректным емейлом или нет. Если является - возвращает true, если не является - то false. Кроме того, класс будет иметь следующие методы: метод `isDomain` для проверки домена, метод `isDate` для проверки даты и метод `isPhone` для проверки телефона.
//     Сделайте 2 версии этого класса - стандартную и статическую.

class Validator {
    constructor (email,url, date, number){
        this.email = email
        this.url = url
        this.date = date
        this.number = number
    }
    isEmail(email){
        // this.email = email
        const mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if(email.match(mailFormat)){
            return true;
        }
        return false 
    }

    isDomain(url){
        // this.url = url
        const urlFormat =/(^https?:\/\/)?[a-z0-9~_\-\.]+\.[a-z]{2,9}(\/|:|\?[!-~]*)?$/i;
        if(url.match(urlFormat)){
            return true;
        }
        return false 
    }
    isDate(date){
        // this.date = date
        const dateFormat =/^(0[1-9]|[12][0-9]|3[01])[- /.](0[1-9]|1[012])[- /.](19|20)\d\d/
        if(date.match(dateFormat)){
            return true;
        }
        return false 
    }
    isPhone(number){
        // this.number = number
        const numberFormat = /^((8|\+374|\+994|\+995|\+375|\+7|\+380|\+38|\+996|\+998|\+993)[\- ]?)?\(?\d{3,5}\)?[\- ]?\d{1}[\- ]?\d{1}[\- ]?\d{1}[\- ]?\d{1}[\- ]?\d{1}(([\- ]?\d{1})?[\- ]?\d{1})?$/
        if(number.match(numberFormat)){
            return true;
        }
        return false 
    }
    }


let validator = new Validator();
console.log(validator.isEmail('alisa@mail.ru'));
console.log(validator.isDate('12.05.2021'));
console.log(validator.isPhone('+7(910)123-45-67'));
console.log(validator.isDomain('itgirlschool.ru'));


class ValidatorStatic {
    
    static isEmail(email){
        this.email = email
        const mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if(this.email.match(mailFormat)){
            return true;
        }
        return false 
    }
    static isDomain(url){
        this.url = url
        const urlFormat =/(^https?:\/\/)?[a-z0-9~_\-\.]+\.[a-z]{2,9}(\/|:|\?[!-~]*)?$/i;
        if(this.url.match(urlFormat)){
            return true;
        }
        return false 
    }
    static isDate(date){
        this.date = date
        const dateFormat =/^(0[1-9]|[12][0-9]|3[01])[- /.](0[1-9]|1[012])[- /.](19|20)\d\d/
        if(this.date.match(dateFormat)){
            return true;
        }
        return false 
    }
    static isPhone(number){
        const numberFormat = /^((8|\+374|\+994|\+995|\+375|\+7|\+380|\+38|\+996|\+998|\+993)[\- ]?)?\(?\d{3,5}\)?[\- ]?\d{1}[\- ]?\d{1}[\- ]?\d{1}[\- ]?\d{1}[\- ]?\d{1}(([\- ]?\d{1})?[\- ]?\d{1})?$/
        this.number = number
        if(this.number.match(numberFormat)){
            return true;
        }
        return false 
    }
}

console.log(ValidatorStatic.isEmail('alisa@mail.ru'));
console.log(ValidatorStatic.isDomain('itgirlschool.ru'));
console.log(ValidatorStatic.isDate('12.05.2021'));
console.log(ValidatorStatic.isPhone('+7(910)123-45-67')); 



const person = {
    name:'valera',
    age:23
}

let city = person.city
city = "amsterdam"
console.log(person.city)

let user = {
    name: "John",
    surname: "Smith",
  
    get fullName() {
      return `${this.name} ${this.surname}`;
    },
  
    set  fullName(value) {
      [this.name, this.surname] = value.split(" ");
    }
  };
  
  // set fullName запустится с данным значением
  user.fullName = "Alice Cooper";
  
  alert(user.name); // Alice
  alert(user.surname); // Cooper