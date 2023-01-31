// // condition statement
// //1. if
// let age = 17;

// // if(age>=18) {
// //       console.log("You are an adult");
// //       console.log("You make your own decisions")
// // }

// //2. if...else

// if(age>=18){
//       console.log("You are an adult");
//       console.log("You make your own decisions")
// }else{
//       console.log("You are still children");
//       console.log("You are under your parents jurisdiction")
// }

// //3. Nested if...else
// // marks <= 40 fail, <= 60 pass, <=80 credit, >80 distiction

// let marks = prompt("Enter marks to evaluate");
// let grade;

//       if (marks <= 100 && marks > 80) {
//             grade = "distinction"
//       } else if (marks <= 80 && marks > 60) {
//             grade = "credit"
//       } else if (marks <= 60 && marks > 40) {
//             grade = "pass"
//       } else if (marks <= 40 && marks > 0) {
//             grade = "fail"
//       } else {
//             alert("Invalid marks! Enter marks between 1 and 100!")
//       }
      
// // alert(`Your grade is ${grade}`);

// // 4. switch case

// switch(grade){
//       case 'distinction': alert(`Yaay you got a ${grade}!`);
//       break;
//       case 'credit': alert(`Woow you got a ${grade}!`);
//       break;
//       case 'pass': alert(`Well you did good, you got a ${grade}!`);
//       break;
//       case 'fail': alert(`Boo you can do better ${grade}!`);
//       break;
//       default : alert("😢 We didn't get your marks; or they were invalid")

// }

let message = {
      text: "",
      time: "",
      date:"",
      status:"read"
}

switch(message.status){
      case "sent": console.log("✓");
      break;
      case 'received': console.log("✓✓");
      break;
      case 'read': console.log("✓✓");
      break;
      default: console.log("status unknown");
}