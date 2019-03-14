// Bonus from map-filter-reduce exercise

const uniqueLanguages = users.reduce(function(person, currentLang){

    person += currentLang.languages + ",";

    let languages = person.split(',');

    for (let i = 0; i < languages.length; i++){

        for(let x = 1; i < languages.length; i++){

            if(languages[i] === languages [x]){

                languages.splice(x,1);

            }
        }
    }

    return languages;

}, []);

console.log(uniqueLanguages);


// Write a function that returns the SUM of a sequence of numbers.  This sequence is determined by three variables: start, finish, and step.  The sequence begins at start, end at finish, and goes up by step until it reaches finish or a number that when increased by step would go past finish.

//Example:
//Input: start: 1, finish: 4, step: 1
//Output: 10

//Input: start: 4, finish: 10, step: 5
//Output: 13

function sumSequence(start, finish, step){
    var sum = 0;
    //start sequence at start parameter
    for(var i = start; i <= finish; i+= step ){
        sum += i;
    }

    return sum;
}

// console.log(sumSequence(1, 4, 1));



// Given a string of any length with any characters in it, write a function to determine whether or not the string contains the whole word "spanish".  The order of characters/spelling is important, a string "agkjnspanishsad" would return true while "asdnsplianidfsh" would return false.  Upper and lower case does not matter.  Return values should be booleans: true/false

function spanish(str){
    var strLower = str.toLowerCase();
    var subString = "spanish";
    var doesContain = strLower.match(subString);
    if(doesContain != null) {
        return true;
    } else {
        return false
    }
}
//
// console.log(spanish('asdfspanishdfs'));
// console.log(spanish('dfcnaiuovrhghjf'));
