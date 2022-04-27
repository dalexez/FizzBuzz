const Reader = require('../../lib/utils/Reader');

describe('Unit Tests for Reader Class', () => {
  test('1) Read the path of a file and the data on it', () => {
    const explorers = Reader.readJsonFile('explorers.json');

    expect(explorers.length).toBe(15);
    expect(explorers[1].name).toBe('Woopa2');
  });
});
