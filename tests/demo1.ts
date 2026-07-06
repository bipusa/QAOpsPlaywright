let message1 : string = "Hello this is TypeScript";
message1 = "changed the value";

let age1: number = 51;
console.log(age1);

let isActive: boolean = true;
console.log(isActive);

let numbers1: number[] =[1, 2, 3, 4];
console.log(numbers1);

function add(a:number, b:number): number
{
    return a+b;
}

add(3,4);

let user:{name: string, age: number, location: string} = {name: "Bipusa", age: 33, location: "Kathmandu"};
user.location = 'Dehli';