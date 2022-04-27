const ExplorerService = require('./../../lib/services/ExplorerService')

describe("Unit Tests for ExplorerService Class", () => {
    test('1) Test filterByMision', () => {
      
        const explorers = [{mission: "node"}, {mission: "java"}, {mission: "node"}]
        const explorersInNode  = ExplorerService.filterByMission(explorers, "node")
       
        expect(explorersInNode.length).toBe(2);
      
    })
    test('2) Test getAmountOfExplorersByMission', () => {
      
        const explorers = [{mission: "node"}, {mission: "java"}, {mission: "node"}]
        const amountOfExplorersInMission  = ExplorerService.getAmountOfExplorersByMission(explorers, "node")
       
        expect(amountOfExplorersInMission).toBe(2);
      
    });
  })