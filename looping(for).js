for(let i=0;i<=10;i++){
    console.log(i);
 }
//while loop
let i=1;
while(i<=10){
    console.log(i);
    i++;
}

//do while
 i = 1;
 do
 {
     console.log('do..while');
 }while(i===0);

 //find even number
 for(let i=1;i<=10;i++){
    if(i%2===0) console.log(i);
 }
 i=9;
 if(i%2===0) console.log("even");
 else console.log("odd");
 let mark = 70;
 if(mark>=90) console.log("0 grade");
 else if(mark>=80) console.log("A grade");
 else if(mark>=70) console.log("B grade");
 else console.log("Fail");

//switch
let day = 6;
switch(day){
    case 0:
         console.log("Monday");
    break;
    case 1: 
    console.log("Tuesday");
    break;
    case 2: 
    console.log("Wednesday");
    break;
    case 3:
    console.log("Thursday");
     break;
    case 4: 
    console.log("Friday");
     break;
    case 5: 
    console.log("Saturday");
     break;
    case 6: 
    console.log("Sunday");
     break;
    default:
     console.log("Invalid input");
     break;
}

i =8;
let result1 = (i%2==0)?"Even":"Odd";
console.log(result1);
let marks=89;
let result=(marks>=90)?"0 Grade":(marks>=80)?"A Grade":(marks>=70)?"B Grade":"C Grade";
console.log(result);
add(10,20);
function add(a,b){
    console.log(a+b);
}
add(10,20);
//Arrow function
var add = (a,b)=>{
    console.log(a+b);
}
add(10,20);

console.log(z);
var z;

//spread operator(...)
var arr1 = [10,20,30];
var arr2 = [...arr1,40,50,60];
console.log(arr2);

//destructuring operator
var [m1,m2,m3,m4,m5]= [89,90,99,96,87]
console.log(m1);
console.log(m2);
console.log(m3);
console.log(m4);
console.log(m5);

var {name,age,Dept}={
    name:"rekha",
    age:20,
    Dept:["CSE","CS"],
    marks:{
        mern:90,
        java:89,
        c:90
    }
}
console.log(name);
console.log(age);
console.log(Dept);
console.log(marks

    
);

