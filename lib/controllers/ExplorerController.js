const ExplorerService = require('./../../lib/services/ExplorerService')
const FizzbuzzService = require('./../../lib/services/FizzbuzzService')
const Reader = require('./../../lib/utils/Reader')

class ExplorerController {
    static getExplorerByMission(mission){
        const explorers = Reader.readJsonFile("explorers.json")
        const explorersByMission = ExplorerService.filterByMission(explorers, mission)
        return explorersByMission
    }
}

module.exports = ExplorerController