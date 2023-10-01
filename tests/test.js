describe('Sum', () => {
    it('Should return the correct sum', () => {
      const sum = (a, b) => a + b;
  
      expect(sum(1, 2)).toBe(3);
      expect(sum(2, 3)).toBe(5);
      expect(sum(3, 4)).toBe(7);
    });
  });