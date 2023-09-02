// write a program that uses filter to remove all negative numbers from an array.
var numArray:number[]=[1,-1,2,-2,3,-3,4,-4,5,-5,-6,-7]
var updatednumArray=numArray.map((number)=>{
    if(number>=0){
        return number;
    }
})
console.log(updatednumArray)
//given an array of numbers [1,2,3,4,5], use map method to creat a new array where each is multiplied by 2.
var numberArray:number[]=[1,2,3,4,5]
var updatednumberArray=numArray.map((number)=>{
     return number*2;
    
})
console.log(updatednumberArray)
//given an array of string ["apple","banana","cherry","date","grape"],use the filter method to create a new array
//containing only the fruits with more than 5 characters.
var fruits:string[]=["apple","banana","cherry","date","grape"]
var newfruits=fruits.map((char)=>{
    if(char.length>5){
        return char;
    }
})
console.log(newfruits)
//square of even numbers
var numbers:number[]=[1,2,3,4,5,6,7,8,9,10]
var evennumbers=numbers.filter(odd=>odd%2==0).map(even=>even**2)
console.log(evennumbers)
// Tempetatures 
var tem:number[]=[0,10,20,30,40]
var newtem=tem.map((celsius)=>{
    return`${celsius*(9/5)+32}F`
})
console.log(newtem)
//double values of odd numbers
var numb:number[]=[3,6,9,12,15,18];
var doublenumb=numb
.filter(even=>even%2!=0)
.map((odd=>odd+odd))
console.log(doublenumb)
//last one
var names:string[]=["alice","bob","charlie","david","emily"]
var ex=names.forEach((exclMarks)=>{
    console.log(`${exclMarks}!`)
})