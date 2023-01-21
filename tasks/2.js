// Помните наше практическое задание с опросником для владельцев котиков? Он нам снова пригодится! 
// Напишите класс Cat со свойствами, соответствующими полям вашего опросника (например, кличка, корм и пр.), 
// и по нажатию на кнопку "Ок" создайте экземпляр этого класса, заполнив его свойства ответами из опросника.
//  В этом классе будут только свойства и конструктор, без методов. 
//  Выведите результат (заполненный объект класса Cat) в консоль при помощи console.log.
function  submitForm() {
const nickName = document.getElementById('name')
const owner = document.getElementById('owner')
const tel = document.getElementById('tel')
const selectCat = document.getElementById('selectCat')
const comment = document.getElementById('comment')
const food = document.getElementById('food')
const sex = document.getElementById('sex')

class Cat {
    constructor(nickName, owner, tel, selectCat,food,sex, comment){
        this.nickName = nickName
        this.owner = owner
        this.tel = tel
        this.selectCat = selectCat
        this.food = food
        this.sex = sex
        this.comment = comment
    }
}


//некорректно работает для чекбоксов (можно заменить на радио кнопки, но хочется разобраться с чекбоксами)
let typeOfFood
let typeOfFoodArr = []
typeOfFoodArr = food.children
Array.from(typeOfFoodArr).forEach((element) => {
    if (element.checked) {
        typeOfFood = element.value
    }
})


let typeOfSex
let typeOfSexArr = []
typeOfSexArr = sex.children
Array.from(typeOfSexArr).forEach((element) => {
    if (element.checked) {
        typeOfSex= element.value
    }
})

let cat1 = new Cat(nickName.value, owner.value, tel.value, selectCat.value,typeOfFood,typeOfSex, comment.value)
console.log(cat1)

}