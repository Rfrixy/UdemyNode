var square = (x) => {
  var result = x*x;
  return result;
};

var user = {
  name: "Divesh",
  sayHi: () =>{
    console.log(`Hi, I'm ${this.name}`);
  },
  sayHiAlt (){
    console.log(`Hi, I'm ${this.name}`);

  }
};
// is same as

var square2 = (x) => x*x;

console.log(square(9));
console.log(square2(9));

user.sayHi();
user.sayHiAlt();
