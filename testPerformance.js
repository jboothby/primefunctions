/* global primeGen, cumulativeSum, maxPrimeSum */
describe('Test for Performance', function () {
  // begin performance testing for maxPrimeSum
  describe('maxPrimeSum()', function () {
    it('maxPrimeSum(10000)=>[9521, 65]', function () {
      this.slow(-1);
      this.timeout(-1);
      chai.expect(maxPrimeSum(10000)).to.deep.equal([9521, 65]);
    });
    it('maxPrimeSum(100000)=>[92951, 183]', function () {
      this.slow(-1);
      this.timeout(-1);
      chai.expect(maxPrimeSum(100000)).to.deep.equal([92951, 183]);
    });
  });
});
