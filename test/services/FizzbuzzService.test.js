const FizzbuzzService = require('./../../lib/services/FizzbuzzService')

describe("Unit Tests for ExplorerService Class", () => {
    test('1) Test aplyValidationInExplorer trick same as score', () => { 
        const explorer1 = {name: "Explorer1", score: 1}
        const explorerFizzbuzz1 = FizzbuzzService.applyValidationInExplorer(explorer1) // {name: "Explorer1", score: 1, trick: 1}

        const explorer3 = {name: "Explorer3", score: 3}
        const explorerFizzbuzz3 = FizzbuzzService.applyValidationInExplorer(explorer3) // {name: "Explorer3", score: 3, trick: "FIZZ"}
       
        expect(explorerFizzbuzz1.trick).toBe(explorerFizzbuzz1.score)
        expect(explorerFizzbuzz3.trick).toBe("FIZZ");
      
    })
})