const ExplorerService = require('../services/ExplorerService');
const FizzbuzzService = require('../services/FizzbuzzService');
const Reader = require('../utils/Reader');

class ExplorerController {
  static getExplorersByMission(mission) {
    const explorers = Reader.readJsonFile('explorers.json');
    const explorersByMission = ExplorerService.filterByMission(explorers, mission);
    return explorersByMission;
  }

  static getExplorersUsernamesByMission(mission) {
    const explorers = Reader.readJsonFile('explorers.json');
    const explorersUsernameByMission = ExplorerService.getExplorersUsernamesByMission(explorers, mission);
    return explorersUsernameByMission;
  }

  static getExplorersAmountByMission(mission) {
    const explorers = Reader.readJsonFile('explorers.json');
    const explorersAmount = ExplorerService.getAmountOfExplorersByMission(explorers, mission);
    return explorersAmount;
  }

  static validationFizzbuzz(number){
    const explorerValidation = FizzbuzzService.applyValidationInNumber(number);
    if(!isNaN(number)){
      const fizzbuzzTrick = FizzbuzzService.applyValidationInNumber(number);
      var responseBot =  `Tu número es: ${number}. Validación: ${fizzbuzzTrick}`;
    } else {
      var responseBot = "Envía un número válido"
  }


    return {server: explorerValidation, bot: responseBot}
  }

  static getExplorersNamesByMission(mission){
    const explorers = Reader.readJsonFile('explorers.json');
    const explorersNames = ExplorerService.getExplorersNamesByMission(explorers, mission)
    const responseBot = explorersNames.toString()
    //console.log(responseBot)
    return responseBot
  }
}

module.exports = ExplorerController;
