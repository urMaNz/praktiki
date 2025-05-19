const parent = { city: "Paris" };
const child = Object.create(parent);
child.name = "Anna";

console.log(hasProperty(child, "name")); 
console.log(hasProperty(child, "city")); 

