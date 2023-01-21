3  // Создайте класс Калькулятор, который будет содержать 4 статических метода - Сложение, Умножение, Вычитание и Деление. Доработайте свою страничку с калькулятором, чтобы в ней использовались методы этого класса.
const num1 = document.getElementById('input1')
const num2 = document.getElementById('input2')

class Calculator {
    // constructor (num1, num2) {
    //     this.num1 = num1;
    //     this.num2 = num2;
    // }
    static multiplication (num1, num2) {
        return +num1.value * +num2.value
    }
    static division (num1,num2) {
        return +num1.value / +num2.value
    }
    static extraction (num1,num2) {
        return +num1.value - +num2.value
    }
    static addition (num1,num2) {
        return +num1.value * num2.value
    }
}
function dividebyZero(){
    if(input2.value === '0') {
        alert('На ноль делить нельзя')}
}
function clearInput(){
    input1.value='' ;
    input2.value='' ;
}
function multiplication(){
    alert(Calculator.multiplication(num1,num2))
    clearInput()
}
function division(){
    dividebyZero()
    alert(Calculator.division(num1,num2))
    clearInput()
}
function extraction(){
    alert(Calculator.extraction(num1,num2))
    clearInput()
}
function addition(){
    alert(Calculator.addition(num1,num2))
    clearInput()
}

