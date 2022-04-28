const FizzbuzzService = require('../../lib/services/FizzbuzzService');

describe('Unit Tests for ExplorerService Class', () => {
  test('1) Test aplyValidationInExplorer trick same as score', () => {
    const explorer1 = { name: 'Explorer1', score: 1 };
    const explorerFizzbuzz1 = FizzbuzzService.applyValidationInExplorer(explorer1); // {name: "Explorer1", score: 1, trick: 1}

    expect(explorerFizzbuzz1.trick).toBe(explorerFizzbuzz1.score);
  });
  test('2)Test aplyValidationInExplorer trick = FIZZ', () => {
    const explorer3 = { name: 'Explorer3', score: 3 };
    const explorerFizzbuzz3 = FizzbuzzService.applyValidationInExplorer(explorer3); // {name: "Explorer3", score: 3, trick: "FIZZ"}

    expect(explorerFizzbuzz3.trick).toBe('FIZZ');
  });
  test('3)Test aplyValidationInExplorer trick = BUZZ', () => {
    const explorer5 = { name: 'Explorer5', score: 5 };
    const explorerFizzbuzz5 = FizzbuzzService.applyValidationInExplorer(explorer5); // {name: "Explorer5", score: 5, trick: "BUZZ"}

    expect(explorerFizzbuzz5.trick).toBe('BUZZ');
  });
  test('4)Test aplyValidationInExplorer trick = FIZZBUZZ', () => {
    const explorer15 = { name: 'Explorer15', score: 15 };
    const explorerFizzbuzz15 = FizzbuzzService.applyValidationInExplorer(explorer15); // {name: "Explorer15", score: 15, trick: "FIZZBUZZ"}

    expect(explorerFizzbuzz15.trick).toBe('FIZZBUZZ');
  });
  test('5)Test aplyValidationInNumber score = trick', () => {
    const number = 1
    const trick = FizzbuzzService.applyValidationInNumber(number);

    expect(trick).toBe(number);
  })
  test('5)Test aplyValidationInNumber score = trick', () => {
    const number = 15
    const trick = FizzbuzzService.applyValidationInNumber(number);

    expect(trick).toBe("FIZZBUZZ");
  })
  test('5)Test aplyValidationInNumber score = trick', () => {
    const number = 3
    const trick = FizzbuzzService.applyValidationInNumber(number);

    expect(trick).toBe("FIZZ");
  })
  test('5)Test aplyValidationInNumber score = trick', () => {
    const number = 5
    const trick = FizzbuzzService.applyValidationInNumber(number);

    expect(trick).toBe("BUZZ");
  })
});
