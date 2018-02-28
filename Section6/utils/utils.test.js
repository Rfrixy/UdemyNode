const utils = require('./utils.js');
const expect = require('expect');



describe('Utils', ()=>{
  it('should add two numbers', () =>{
    var res = utils.add(33,11);
    // if(res!== 44)
    //   throw new Error(`Expcted 44, but got ${res}.`);
    expect(res).toBe(44).toBeA('number');
  });

  it('should square a number', () =>{
    var res = utils.square(3);
    expect(res).toBe(9).toBeA('number');
  });
  //
  // it('should expect some values', ()=>{
  //   expect(12).toNotBe(11);
  //
  //   expect([2,3,4]).toInclude(4);
  // });

  it('Should set first and last name',()=>{
    var user = { firstName:"", lastName:""};
    utils.setName(user, "Divesh Naidu");
    expect(user).toInclude({
      firstName:"Divesh",
      lastName:"Naidu"
    });
  });

  it('Should async add two numbers', (done) =>{
    utils.asyncAdd(4,  3, (sum)=>{
      expect(sum).toBeA('number').toBe(7);
      done();
    });
  });

  it('Should async square a number', (done) =>{
    utils.asyncSquare(4, (ans)=>{
      expect(ans).toBeA('number').toBe(16);
      done();
    });
  });

});
