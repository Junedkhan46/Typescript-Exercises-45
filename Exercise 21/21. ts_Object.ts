//Qno. 21: They thiink of something you could store in a typescript object. Write a program that creates object
// Containing elements. 
let details:string[] = [`Person`, `Vehicle`,`Qualification`];

interface person {
    Name: string,
age: number,
Nationality: string
Entrollment: Boolean
};
let person:person = {
    Name: `Juned Khan`,
    age:30, 
    Nationality: 'Pakistani',
    Entrollment: true,
};
let vehical ={
Model : 2016,
Make:`Honda`,
Color:`Almond edge`,
Cplc: true,
};
let qualification = {
    Degree:`Bachelors`,
    Certification:`GIAIC`,
    Is_Programmer:true
};
console.log(person, vehical, qualification);