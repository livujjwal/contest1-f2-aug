let arr = [
  { id: 1, name: 'john', age: 18, profession: 'developer' },
  { id: 2, name: 'jack', age: 20, profession: 'developer' },
  { id: 3, name: 'karen', age: 19, profession: 'admin' },
];

// Don't worry about consoling these functions, they are already being called on the button clicks.
// Please don't change anything in the index.html file.

function PrintDeveloper() {
  let ans = [];
  // for loop to ietrate through array
  for(let i of arr)
  {
    // check for profession in each obj
    if(i["profession"] == "developer"){
   ans.push(i);
  }
  }
  console.log(ans);
}
// console.log(PrintDeveloper());

function addData() {
  // push obj using push mathod at index 3.
 arr.push({id:4,name:"susan",age:"20",profession:"intern"})
  // return arr;//
  console.log(arr);
}
// console.log(addData());

function removeAdmin() {
     // for loop to ietrate through array
  for(let i of arr)
  {
    // check for profession in each obj
    if(i["profession"] == "admin"){
      let index = i["id"]-1;
      // use splice method to delete admin employee
      arr.splice(index, 1);
  }
  }
  console.log(arr);
  // return arr;
}
// console.log(removeAdmin());


function concatenateArray() {
  let employee = [
    { id: 5, name: 'jack', age: 18, profession: 'intern'},
    { id: 6, name: 'jonny', age: 34, profession: 'finance'},
    { id: 7, name: 'jasmin', age: 28, profession: 'hr'},
    { id: 8, name: 'jenny', age: 38, profession: 'manager'}
  ]
   console.log(arr.concat(employee));
  //  return arr.concat(employee);
}
// console.log(concatenateArray())

// Here is an example of how functions work,
// basically a function is a block of code which can directly access your 'arr' variable since arr is global.
// If I have a function called consoleArr(), that can directly access arr like this to console it.

function consoleArr() {
  console.log('Consoling Array Variable', arr);
  // Over here I can directly access the variable.
}
