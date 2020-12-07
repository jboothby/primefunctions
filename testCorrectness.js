// begin Correctness testing of primefunctions.js using mocha and chai
// this file should be run only from testSuite1.html to include proper headers
describe('primefunctions.js', function () {
  // test primeGen() method
  describe('primeGen()', function () {
    it('primeGen(10)=>[2, 3, 5, 7]', function () {
      chai.expect(primeGen(10)).to.deep.equal([2, 3, 5, 7]);
    });
    it('primeGen(20)=>[2, 3, 5, 7, 11, 13, 17, 19]', function () {
      chai.expect(primeGen(20)).to.deep.equal([2, 3, 5, 7, 11, 13, 17, 19]);
    });
  });
});
