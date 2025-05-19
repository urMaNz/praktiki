function testFunction() {
    alert("Код выполняется!");


    function findMax(arr) {
        return Math.max(...arr);
    }
    console.log("Максимум:", findMax([3, 7, 2, 9, 5]));

    function countProperties(obj) {
        return Object.keys(obj).length;
    }
    const user1 = { name: "Alice", age: 25, city: "New York" };
    console.log("Собственные свойства:", countProperties(user1));

    function hasProperty(obj, key) {
        return obj.hasOwnProperty(key);
    }
    const parent = { city: "Paris" };
    const child = Object.create(parent);
    child.name = "Anna";

    console.log("Содержит 'name'? ->", hasProperty(child, "name"));
    console.log("Содержит 'city'? ->", hasProperty(child, "city"));
}
