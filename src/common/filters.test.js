import { getAverage } from './filters';

describe('filters.js', () => {
  describe('getAverage', () => {
    it('should return 0 if array is empty', () => {
      const result = getAverage([]);
      expect(result).toBe(0);
    });

    it('should return the average of all values in an array', () => {
      const result = getAverage([2.4, 4.5, 5, 3.3]);
      expect(result).toBe('3.8');
    });
  });
});
