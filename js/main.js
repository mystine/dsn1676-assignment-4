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

var writeFruits = function (allFruits) {
    
    allFruits.forEach(function (section) {
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
};