const ExplorerService = require('./../../lib/services/ExplorerService')

describe("Unit Tests for ExplorerService Class", () => {
    test('1) Test filterByMision', () => {
      
        const explorers = [{mission: "node"}, {mission: "node"}, {mission: "java"}]
        const explorersInNode  = ExplorerService.filterByMission(explorers, "node")
       
        expect(explorersInNode.length).toBe(2);
      
    });
  })