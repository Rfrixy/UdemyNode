const request = require('supertest')
const expect = require('expect')
var app = require('./server').app;


describe('Server', ()=>{
  describe('GET /',()=>{
    it('should return hello world response', (done) =>{
      request(app)
        .get('/')
        .expect(200)
        .expect((res)=>{
          expect(res.body).toInclude({
            error:'Page not found.'
          });
        })
        .end(done);
    });
  })

  describe('GET /Users',()=>{
    it('should give me some users', (done) =>{
      request(app)
        .get('/users')
        .expect(200)
        .expect((res)=>{
          expect(res.body.users[1]).toInclude({
             firstName: "Chhavi", age:"22"
          });
        })
        .end(done);
    });

  })
})
