let employees=[{id:101,name:"Anju",Salary:45000},
    {id:102,name:"Rahul",Salary:50000},
    {id:103,name:"Harsha",Salary:60000}
]
// wap js code snippet to display the employee data in the form of html table
 function data(){
    /* let rows="";

    for (emp of employees){
        rows+=`<tr>
        <td>${emp.id}</td>
        <td>${emp.name}</td>
        <td>${emp.Salary}</td></tr>`
    } */

    // using for loop
    let rows="";
    let i=0;
    for (i=0; i<=employees.length-1; i++){
        rows+=`<tr>
        <td>${employees[i].id}</td>
        <td>${employees[i].name}</td>
        <td>${employees[i].Salary}</td></tr>`
    } 
// using while loop
/* let rows="";
let i=0;
while(i<employees.length){
    rows+=`<tr>
        <td>${employees[i].id}</td>
        <td>${employees[i].name}</td>
        <td>${employees[i].Salary}</td></tr>`
        i++
} */
    document.getElementsByTagName('tbody')[0].innerHTML=rows

    }