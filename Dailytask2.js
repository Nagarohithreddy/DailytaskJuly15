
// IF-else Conditional statements

let number = 5

if(number>0)
    console.log(`${number} is a positive number`);
else if(number<0)
    console.log(`${number} is a negative number`);
else
    console.log(`${number} is a zero`);

//the output will be a positive number 
//if the number is 0 then the output wil be zero
//if the number is negative number then the output will be negative number

let input = 4

switch(input){
    case 0:
        console.log(`${input} - Today is Sunday`);
        break
    case 1:
        console.log(`${input} - Today is Monday `);
        break
    case 2:
        console.log(`${input} - Today is Tuesday`);
        break
    case 3:
        console.log(`${input} - Today is Webnesday`);
        break
    case 4:
        console.log(`${input} - Today is Thursday`);
        break
    case 5:
        console.log(`${input} - Today is Friday`);
        break
    case 6:
        console.log(`${input} - Today is Saturday`);
}

// Output will be 4 - Today is Thursday

// Ternary Operator

let age = 22

let Requiredage = (age>18) ? 'Adult' : 'Minor'
console.log(Requiredage);

// Output will be Adult if the age is greater than 18 else The output will be minor

// for loop

for(S=1;S<=10;S++)
    console.log(S);

//Reverse Loop

for(R=10;R>0;R--)
    console.log(R);
