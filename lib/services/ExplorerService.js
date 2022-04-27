class ExplorerService {
  static filterByMission(explorers, mission) {
    return explorers.filter((explorer) => explorer.mission == mission);
  }

  static getAmountOfExplorersByMission(explorers, mission) {
    const amount = explorers.filter((explorer) => explorer.mission == mission);
    return amount.length;
  }

  static getExplorersUsernamesByMission(explorers, mission) {
    const explorersInNode = explorers.filter((explorer) => explorer.mission == mission);
    const usernames = explorersInNode.map((explorer) => explorer.githubUsername);
    return usernames;
  }
}

module.exports = ExplorerService;
