const ExplorerService = require('./../../lib/services/ExplorerService')
const FizzbuzzService = require('./../../lib/services/FizzbuzzService')
const Reader = require('./../../lib/utils/Reader')

class ExplorerController {
    static getExplorerByMission(mission){
        const explorers = Reader.readJsonFile("explorers.json")
        const explorersByMission = ExplorerService.filterByMission(explorers, mission)
        return explorersByMission
    }

    static getExplorersUsernamesByMission(mission){
        const explorers = Reader.readJsonFile("explorers.json")
        const explorersUsernameByMission = ExplorerService.getExplorersUsernamesByMission(explorers, mission)
        return explorersUsernameByMission
    }
}

module.exports = ExplorerController