function cal_age(year){
    return new Date().getFullYear()-year;
}
let age=cal_age(2004);
console.log(age);

// 

let cal_age1=function(year){
    return new Date().getFullYear()-year;
}
let r1=cal_age1(2003);
console.log(r1);

// 
let cal_age2=(year)=>{
    return new Date().getFullYear()-year;
}
let r2=cal_age2(2002);
console.log(r2);

// 
let cal_age3=year => new Date().getFullYear()-year;
let r4=cal_age3(2001);
console.log(r4);

console.log(new Date().getFullYear());