// Create Array Example
//array declaration and initialization in separate lines
let myArr1: boolean[];
let myArr2: boolean[] = [];
let myArr3: boolean[] = new Array();
let myArr4: boolean[] = Array();

myArr1 = [false, false, true];

//array inline declaration and initialization

//array of booleans 
let flags1: boolean[] = [false, false, true];
//or
let flags2: Array<boolean> = [false, false, true];

//array of numbers
let scores1: number[] = [10, 20, 30, 40];
//or
let scores2: Array<number> = [10, 20, 30, 40];


// Add elements to array
//array of numbers
let scores: number[] = [10, 20, 30, 40];

scores.push(50);  //[10, 20, 30, 40, 50]

scores.push('abc');   //data.ts(24,14): error TS2345: Argument of type '"abc"' is not  
//assignable to parameter of type 'number'.

// Iterate Through Array
let scores3: number[] = [10, 20, 30, 40];

for (let score of scores3) {
  console.log(score);     //Outputs 10 20 30 40
}

// Using traditional for loop
let scores4 :number[] = [10, 20, 30, 40];    
 
for (var i = 0; i < scores.length; i++) {
    console.log(scores[i]);     //Outputs 10 20 30 40
}

// Clone Array
let origScores :number[] = [10, 20, 30];    
 
let clonedScores = [...origScores];
 
console.log(clonedScores);      //[10, 20, 30]
 
origScores.push( 40 );
 
console.log(origScores);        //[10, 20, 30, 40]  is "changed"
console.log(clonedScores);      //[10, 20, 30]  is "unchanged"

// Merge Arrays
let scores5 :number[] = [10, 20, 30];   
let scores6 :number[] = [40, 50, 60];   
//  Spread Operator
let mergedScore = [...scores5, ...scores6];
 
console.log(mergedScore);   //[ 10, 20, 30, 40, 50, 60 ]
