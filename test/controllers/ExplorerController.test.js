const ExplorerController = require('./../../lib/controllers/ExplorerController')

describe('Unit Tests for ExplorerController Class', () => {
    test('1) Test for getExplorerByMission', () => {
        const explorersByMission = ExplorerController.getExplorersByMission("java")

        expect(explorersByMission.length).toBe(5)
    })
    test('2) Test for getExplorersUsernamesByMission on class ExplorerController', () => {
        const usernamesByMission = ExplorerController.getExplorersUsernamesByMission("node")

        expect(usernamesByMission.length).toBe(10)
    })
    test('3) Test for getExplorersAmountByMission on class ExplorerController', () => {
        const amountByMission = ExplorerController.getExplorersAmountByMission("java")

        expect(amountByMission).toBe(5)
    })
})