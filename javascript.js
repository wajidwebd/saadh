// Array Methods and Date Methods.


// const multipledata = [1,2,100,200,101,1100,'string',true,false,12.2365];
// const multipledata1 = [1,2,'string',true,false,12.2365];
// const multiplearray = [['saadh','thurabudeen','rajalakshmi'],[20,21,22],[30]]

// const userdata = prompt("Enter your data");
// multipledata.push(userdata)
// multipledata.unshift(userdata)
// console.log(multipledata.length);
// const userdata = prompt("Enter your data");
// const position = Number(prompt("Enter your position"))
// empty
// multipledata.splice(position,0,userdata)
// console.log(multipledata.concat(userdata));
// console.log(multipledata.flat(multiplearray));
// console.log(multiplearray.flat());
// console.log(multiplearray.flat().join('-'));
// console.log(multipledata.sort());
// console.log(multipledata.reverse());
// console.log(multipledata.pop());
// console.log(multipledata.shift());
// multipledata[1]
// console.log(multipledata.filter((anyname)=>anyname !== 100));
// console.log(multipledata.filter((anyname)=>console.log(anyname)));
// multiplearray.forEach(element => {
//     console.log(element);
// });
// console.log(multipledata);

// Date Methods:



// setInterval(() => {
//     console.log("working");
//     let mydate = new Date();
//     console.log(mydate);
//     const hours = mydate.getHours();
//     const minutes = mydate.getMinutes();
//     const seconds = mydate.getSeconds();
//     console.log(hours+':'+minutes+':'+seconds);
//     console.log(`${hours}:${minutes}:${seconds}`); 
// }, 1000);


// let startdata = prompt("Enter your date")
// let enddate = prompt("enter your end date")

// let startdateset = new Date();
// startdateset.setDate(startdata)
// let enddateset = new Date();
// enddateset.setDate(enddate)

// console.log(startdateset.getDate() - enddateset.getDate());


// setInterval(() => {
//     let mydata = new Date();
//     mydata.setHours(10);
//     mydata.setMinutes(20);
//     console.log(mydata);
// }, 1000);




// const alldata = [
//     {
//         id:1,
//         myname:'rajalakshmi',
//         age:30
//     },
//     {
//         id:2,
//         myname:'saadh',
//         age:40
//     },
//     {
//         id:3,
//         myname:'thurabudeen',
//         age:60
//     },
//     {
//         id:4,
//         myname:'rajalakshmi',
//         age:30
//     },
//     {
//         id:5,
//         myname:'saadh',
//         age:20
//     },
//     {
//         id:6,
//         myname:'thurabudeen',
//         age:10
//     }
// ]

// console.log(alldata);

// let myages = alldata.filter(function name(params) {
//   return params.age == 30
// })
// console.log(myages);


// DOM  - Document Object Modeling


// setInterval(() => {
//     let mydate = new Date()
//     let classname = document.getElementsByClassName("classnamedeclaration")[position]
//     let tagname = document.getElementsByName("tagnamedeclaration")[position]
//     let combinemethod = document.querySelectorAll(".classnamedeclaration or tagnamedeclaration or #idnamedeclaration")[position]

//     let idnamewithoutposition = document.getElementById("idnamedeclaration")
//     let combinemethodwithoutposition = document.querySelector(".classnamedeclaration or tagnamedeclaration or #idnamedeclaration")





    // let h1tagcall = document.querySelectorAll("#pass")[0]
//     let h1tagcall = document.querySelector(".time")
//     let h1tagcall1 = document.querySelector("#pass1")

//     console.log(h1tagcall);
    
//     let calculate = `${mydate.getHours()}:${mydate.getMinutes()}`
//     console.log(calculate); 
//     // interview question hoisting
//     h1tagcall.innerHTML = calculate      
// }, 1000);

// CRUD -> Create Read Update Delete

// let inputtag = document.getElementById("nametag");
// let addbutton = document.getElementById("add");
// let datadisplay = document.getElementById("datadisplay");

// addbutton.addEventListener("click",function name(params) {

// creating and pushing as a dynamic div in datadisplay
//    let newdivcreate =  document.createElement("div")
//    datadisplay.appendChild(newdivcreate);

//    creating inputtag and setting inputtag value as a dynamic and pushing into datadisplay

// let newinputtagcreate = document.createElement("input");
// newinputtagcreate.value = inputtag.value;
// newinputtagcreate.setAttribute("readonly","readonly");
// newdivcreate.appendChild(newinputtagcreate)
// inputtag.value = ''

// Edit button
// let neweditbuttoncreate = document.createElement("button");
// neweditbuttoncreate.innerHTML = 'Edit';
// newdivcreate.appendChild(neweditbuttoncreate)

// neweditbuttoncreate.addEventListener("click",()=>{
//     newinputtagcreate.removeAttribute("readonly","readonly");

// })

// Save button
// let newsavebuttoncreate = document.createElement("button");
// newsavebuttoncreate.innerHTML = 'Save';
// newdivcreate.appendChild(newsavebuttoncreate)

// newsavebuttoncreate.addEventListener("click",()=>{
//     newinputtagcreate.setAttribute("readonly","readonly");

// })


// Save button
// let newdeletebuttoncreate = document.createElement("button");
// newdeletebuttoncreate.innerHTML = 'Delete';
// newdivcreate.appendChild(newdeletebuttoncreate)

// newdeletebuttoncreate.addEventListener("click",()=>{
//     newdivcreate.style.display = 'none'
// })
// })


// Math.ceil(x) rounded up to its nearest integer 4.7-5
// Math.floor(x) rounded down to its nearest integer 4.7-4

// Math Function.
// alert(Math.PI)
// console.log(Math.ceil(4.4))
// console.log(Math.floor(4.4));
// alert(Math.sqrt(154) * 1000)
// console.log(Math.ceil(Math.random()*10000));
// console.log(Math.random()*10);

// AJAX - Asynchronous Javascript And XML.

// API -> Application Programming Interface.
//     let mydate = new Date()
// let httplocalhost = new XMLHttpRequest();
// httplocalhost.open("GET",'data.txt');
// httplocalhost.onload = function name(params) {
//     console.log(this.responseText);  
// }
// httplocalhost.send()
// let mydetails = {
//     name:'saadh',
// }
// console.log(mydetails);

let http = new XMLHttpRequest();
http.open('GET','alldetails.json');
http.onload = function name(params) {
    // console.log(this.responseText);   
    let storing = this.responseText;
    let convertingobject = JSON.parse(storing);
    // let jsonconversion = JSON.stringify(convertingobject)
    // console.log(convertingobject[0].age);
    convertingobject.map((values,index)=>{
        console.log(index);
        console.log(values.name);
    })
    
}

http.send()