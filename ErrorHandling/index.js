//errors thrown automatically at runtime
// console.log(first)

// console.log("This a intetional error")

// console.log("Another error")

//custom error
// throw Error("this is a custome error")


// handling errors



try {
      const marks = prompt("Input marks", 0);
      if (marks >100 ) throw Error("Error above limit")
      marks = 98898;
      console.log(marks)
} catch (err) {
      console.log(err)
}finally{
      console.log("I just executed")
}


console.log("Handled the error")