const ExplorerController = require('./../../lib/controllers/ExplorerController')

describe('Unit Tests for ExplorerController Class', () => {
    test('1) Test for getExplorerByMission', () => {
        const explorersByMission = ExplorerController.getExplorerByMission("java")

        expect(explorersByMission.length).toBe(5)
    })
    test('2)Test for getExplorersUsernamesByMission on class ExplorerController', () => {
        const usernamesByMission = ExplorerController.getExplorersUsernamesByMission("node")

        expect(usernamesByMission).toBe("10")
    })
})