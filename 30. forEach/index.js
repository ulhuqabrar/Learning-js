/*
    forEach() - used to iterate over elements of an array & apply 
                specified function like callback to each array
    
    Syntax - array.forEach(callback)
             function callback(element, index, array) {
             array[index] = element;
}
*/

let numbs = [1, 2, 3, 4, 5];

numbs.forEach(square);
numbs.forEach(display);

function double(element, index, array) {
    array[index] = element * 2;
}

function square(element, index, array) {
    array[index] = element ** 2;
}

function cube(element, index, array) {
    array[index] = element ** 3;
}

function display(element){
    console.log(element);
}

let fruits = ["Mango", "Apple", "Banana", "Coconut"]

fruits.forEach(uppercase);
fruits.forEach(display);

fruits.forEach(lowercase);
fruits.forEach(disdplay)

function uppercase(elements, indax, arra) {
    arra [indax] = elements.toUpperCase();
}

function lowercase(elements, indax, arra) {
    arra [indax] = elements.toLowerCase();
}

function disdplay(elements) {
    console.log(elements)
}