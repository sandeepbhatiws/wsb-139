
function add(){
    var a = 5;
    var b = 5;

    var c = a+b;

    console.log(c);
}

var numbers = [14,25,12,76,96,45,32,20];
console.log(numbers);
var output = [];
var lowestValue  = numbers[0]; 
var gretestValue = numbers[0];

function reverse(){
    // for(var i = (numbers.length-1); i >= 0; i--){
    //     console.log(i);
    // }
    for(var i = numbers.length; i > 0; i--){
        console.log(numbers[i-1]);
        output.push(numbers[i-1]);
    }

    console.log(output);
}


function lowest(){
    for(var v of numbers){
        if(v < lowestValue){
            lowestValue = v;
        }
    }

    console.log(lowestValue);
}

function gretest(){
    for(var v of numbers){
        if(v > gretestValue){
            gretestValue = v;
        }
    }

    console.log(gretestValue);
}

function nonRepeatingCharacter(character){
    var characterCount = { };

    for(let char of character){
        if(char.trim() != ''){
            characterCount[char.toLowerCase()] = (characterCount[char.toLowerCase()] || 0) + 1;
        }
        
    }

    for(let char of character){
        if(characterCount[char.toLowerCase()] == 1){
            console.log(char.toLowerCase());
            break;
        }
    }

    console.log(characterCount);

}