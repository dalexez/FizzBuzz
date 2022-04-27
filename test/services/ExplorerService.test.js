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
      
    })
    test('3) Test getExplorersUsernamesByMission', () => {
      
        const explorers = [{username: "dalexez", mission: "node"}, {username: "danex", mission: "java"}, {username:"dalex", mission: "node"}]
        const explorersUsernameInMission  = ExplorerService.getExplorersNameByMission(explorers, "node")
       
        expect(explorersUsernameInMission).toBe([{username: "dalexez"}, {username: "dalex"}]);
      
    })
  })