const ExplorerService = require('../../lib/services/ExplorerService');

describe('Unit Tests for ExplorerService Class', () => {
  test('1) Test filterByMision', () => {
    const explorers = [{ mission: 'node' }, { mission: 'java' }, { mission: 'node' }];
    const explorersInNode = ExplorerService.filterByMission(explorers, 'node');

    expect(explorersInNode.length).toBe(2);
  });
  test('2) Test getAmountOfExplorersByMission', () => {
    const explorers = [{ mission: 'node' }, { mission: 'java' }, { mission: 'node' }];
    const amountOfExplorersInMission = ExplorerService.getAmountOfExplorersByMission(explorers, 'node');

    expect(amountOfExplorersInMission).toBe(2);
  });
  test('3) Test getExplorersUsernamesByMission', () => {
    const explorers = [{ githubUsername: 'dalexez', mission: 'node' }, { githubUsername: 'danex', mission: 'java' }, { githubUsername: 'dalex', mission: 'node' }];
    const explorersUsernameInMission = ExplorerService.getExplorersUsernamesByMission(explorers, 'node');

    expect(explorersUsernameInMission).toStrictEqual(['dalexez', 'dalex']);// Con toBe la prueba fallaba ya que por alguna razon toma diferentes los arreglos
    expect(explorersUsernameInMission.length).toBe(2);
  });
});
