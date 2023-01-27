// // Primitive DataTypes 
// // typeof()
// // 1. undefined

// let name;

// console.log(typeof name)
// // 2. string
// name= "49"
// console.log(typeof name)
// //3. number bigint
// name = 49

// console.log(typeof name)

// // 4. Boolean
// // it's either true or false
// let is_adult = false;
// console.log(typeof is_adult);
// // 5. null
// let number = null;
// console.log(typeof number)
// //6. symbol
// let syb = Symbol("hel")

// console.log(syb)

// objects
//1 object

// const person = {
//       first_name: "John",
//       last_name: "Smith",
//       age: 34,
//       gender: "male",
//       is_adult: true
// }

// // console.log( person);
// console.log(`Is ${person.first_name} ${person.last_name} an adult? ${person["is_adult"]}`);

// //adding properties to an object

// person.hobby = "Reading"
// console.log(person)

// // change values of the property of an object (mutate)

// person.is_adult = false
// console.log(person)

// delete person.age;
// console.log(person)


// // 2. Array
// const cars = ["audi", "volvo", "BMW", 34, false];

// console.log(cars[2]);

// //adding items to an array  // Last in First out
// cars.push("Mercedez")
// console.log(cars);

// // remove array item
// cars.pop()
// console.log(cars);

//combine array and objects

const person2 = {
      first_name: "Eman",
      last_name: "Bashir",
      gender: "female",
      hobbies: ["painting", "sewing", "reading"],
      friends: [{name: "Holy", gender: "female"}, 
                {name: "Mishael", gender: "female"}]
}

console.log(person2.friends[0].gender)