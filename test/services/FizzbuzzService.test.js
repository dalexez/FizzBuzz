const FizzbuzzService = require('./../../lib/services/FizzbuzzService')

describe("Unit Tests for ExplorerService Class", () => {
    test('1) Test aplyValidationInExplorer trick same as score', () => { 
        const explorer1 = {name: "Explorer1", score: 1}
        const explorer = FizzbuzzService.applyValidationInExplorer(explorer1) // {name: "Explorer1", score: 1, trick: 1}
       
        expect(explorer.trick).toBe(explorer.score);
      
    })
})