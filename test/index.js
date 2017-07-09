function add(a, b){
  return a + b;
}

describe('Number', function(){
  describe('calc', function(){
    it('add', function(){
      chai.assert.strictEqual(add(1, 2), 4);
    });
  });
});

