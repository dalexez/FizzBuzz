class ExplorerService {
    static filterByMission(explorers, mission){
        return explorers.filter((explorer) => explorer.mission == mission);
    }
    static getAmountOfExplorersByMission(explorers, mission){
        const amount = explorers.filter((explorer) => explorer.mission == mission);
        return amount.length
    }
}

module.exports = ExplorerService