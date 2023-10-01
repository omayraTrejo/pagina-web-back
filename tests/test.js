describe('Sum', () => {
  it('Should return the correct sum', () => {
      const sum = (a, b) => a + b;

      if (sum(1, 2) === 3 &&
          sum(2, 3) === 5 &&
          sum(3, 4) === 7) {
          console.log('All tests passed.');
      } else {
          throw new Error('One or more tests failed.');
      }
  });
});
