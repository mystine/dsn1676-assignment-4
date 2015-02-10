var blueberries = {
    family: 'Vaccinium corymbosum',
    growsShrub: true,
    energy: '240 kJ',
    carbohydrates: '14.49 g',
    protein: '0.74 g'
};

var grapes = {
    family: 'Vitis vinifera',
    growsShrub: false,
    energy: '288 kJ',
    carbohydrates: '18.1 g',
    protein: '0.72 g'
};

var redCurrant = {
    family: 'Ribes rubrum',
    growsShrub: true,
    energy: '234 kJ',
    carbohydrates:'13.8 g',
    protein: '1.4 g'
};

var fruits = [blueberries, grapes, redCurrant];

fruits.forEach(function (section) {
    document.write('<dl>');

    document.write('<dt>Family</dt>');
    document.write('<dd>' + section.family + '</dd>');
                   
    document.write('<dt>GrowsShrub</dt>');
    document.write('<dd>' + section.growsShrub + '</dd>');
    
    document.write('<dt>Energy</dt>');
    document.write('<dd>' + section.energy + '</dd>');
    
    document.write('<dt>Carbohydrate</dt>');
    document.write('<dd>' + section.carbohydrates + '</dd>');
                   
    document.write('<dt>Protein</dt>');
    document.write('<dd>' + section.protein + '</dd>');
    
    document.write('<dl>');                                 
});














/*

// alert("Hello");

var firstName = "Mystine"; // Strings: just some text
console.log(firstName);

var isHuman = true; // Boolean: true or false
var age = 21;

// Array: a container that holds many things
var dinos = ['Stegosayrus', 'T-Rex', 'Apayodsutud'];
console.log(dinos[0]);

//Object: a container that holds manty variables
var trex = {
    weight: '3 tonnes',
    isMeatEater: true,
    age: 10000000
};

var stego = {
    weight: '2 tonnes',
    isMeatEater: false,
    age: 20000
};

var disnos2 = [trex, stego];

// console.log(dinos2[1].age)

dinos2.forEach(function (thing)  {
    document.write('<dl>');
    document.write('<dt>Age</dt>')
    document.write('<dd>' + thing.age + '</dd>');
    document.write('<dl>');
});

*/