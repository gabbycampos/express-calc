const {
    createFrequencyCounter,
    findMean,
    findMedian,
    findMode,
  } = require("./helpers");
  
  describe("Test findMean", function () {
    test("finds the average", () => {
      expect(findMean([10, 1, 2, 3, 4])).toEqual(4);
    });
  });
  
  describe("Test findMedian", function () {
    test("test even number", () => {
      expect(findMedian([1, 2, 3, 4])).toEqual(2.5);
    });
    test("test odd numbers", () => {
      expect(findMedian([1, 2, 3, 4, 5])).toEqual(3);
    });
  });
  
  describe("Test findMode", function () {
    test("Finds correct mode", () => {
      expect(findMode([1, 2, 2, 3, 3, 3])).toEqual(3);
    });
  });