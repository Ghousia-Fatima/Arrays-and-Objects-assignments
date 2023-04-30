// Session - 19 Arrays Assignment
// 1. Write a Program to return the sum of all Arguments passed to a Function.

let sum = 0
function restOperator(...z){
    let sum = 0
    for(i=0; i<z.length; i++){
        sum+=z[i]
    }
    return sum
}

sum = restOperator(1,2,3,4,5)
console.log(sum)

// 2. Write a Program to return more than one value from a Function.
var fname = "zeba"
var lname = "fatima"

function returnMultiplevalues(f,l)
{
    var name = []
    name.push(f)
    name.push(l)
    return name
}

var result = returnMultiplevalues(fname, lname)
console.log(result);


// 3. Write a code to return the entire function definition and display it.

function myFun(){
    let text = "This is the function"
    return text;
}
var functionDefinition = myFun.toString;
console.log(functionDefinition)

// 4. Write a JavaScript program to create a new string adding "New!" in front of a given String. If the given string begins with "New!" already then return the original string. (Use Functional Approach)

function addString(str){
    if(str.startsWith("New!")){
        return str;
    } 
    else{
        return "New! " + str;
    }
}
console.log(addString("Hi There!"))
console.log(addString("New! Hi there! "))

// 5. Write a JavaScript program to create a new string from a given string taking the first 3 characters and the last 3 characters of a string and add them together. The string length must be 3 or more. If not, the original string is returned.  (Use Functional Approach)

function stringvalue(str){
    if(str.length<3){
        return str;
    }
    else{
        let firstPart= str.slice(0,3)
        let secondPart = str.slice(-3)
        return firstPart + secondPart;
    }
}

console.log(stringvalue("Invision"));
console.log(stringvalue("Hi"));



// Session - 20 Objects Assignments

//1. Add new Student into Array of Object

var students = [
    {name:"Roop", grade:5},
    {name:"Raqeeb", grade:6},
    {name:"Arhaan", grade:7},
    {name:"Prince", grade:8},
    ];
    
var newStudent = {name:"Aariz", grade:1}
students.push(newStudent) 
console.log(students)
    

    //2. FIlter students whose grade is more than 5 
    
    var students = [
        {name:"Roop", grade:5},
        {name:"Raqeeb", grade:6},
        {name:"Arhaan", grade:7},
        {name:"Prince", grade:8},
        ];

    var filteredStudents = students.filter(function(student){ 
        return student.grade>5;
    });
    console.log(filteredStudents)
   

    //3. Update student grade from 7-8 whose name is Messi
    
    var students = [
     {name:'Raqeeb', grade:5},
     {name:'Messi', grade:7},
     {name:'Arhaan', grade:9},
     {name:'Prince', grade:6},
    ];
    
    for(var i = 0; i<students.length; i++){
        if(students[i].name == 'Messi'){
            students[i].grade++;
        }
    }
    console.log(students)


    //4. Add add new property as Nationality: "INDIAN" with all students
      
    var students = [
         {name:'Raqeeb', grade:5},
         {name:'Messi', grade:7},
         {name:'Arhaan', grade:9},
         {name:'Prince', grade:6},
        ];

       for(var i = 0; i<students.length; i++){
        (students[i].Nationality = 'INDIAN')
               
       }
       console.log(students)