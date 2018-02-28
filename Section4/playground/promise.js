var asyncAdd= (a,b) =>{
  return new Promise((resolve, reject) =>{
    setTimeout(()=>{
      if(typeof a === 'number' && typeof b === 'number'){
        resolve(a+b);
      }else{
        reject('Arguments must be numbers');
      }
    },1500);
  });
};

asyncAdd(5,1).then((message)=>{
  console.log('Result: ', message )
  return asyncAdd(message,2);
}).then((message)=>{
  console.log('Result2: ', message )
}).catch((errorMessage)=>{
  console.log(errorMessage);
});
// var somePromise = new Promise((resolve, reject) => {
//   console.log("starting promise");
//   setTimeout(()=>{
//     // resolve("Hey. It worked!");
//     reject("Oh no, I failed");
//   },2500);
// });
//
// somePromise.then((message) =>{
//   console.log('Success: ',message);
// }, (errorMessage) => {
//   console.log('Error: ', errorMessage);
// });
