const ListLocation = require("./ListLocation")
// @ponicode
describe("getCategory", () => {
    let inst

    beforeEach(() => {
        inst = new ListLocation.default()
    })

    test("0", () => {
        let callFunction = () => {
            inst.getCategory(-1, -1)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            inst.getCategory(0, -10)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            inst.getCategory(0, 10)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            inst.getCategory(0, 1)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            inst.getCategory(1, 0)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            inst.getCategory(undefined, undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("saveLocation", () => {
    let inst

    beforeEach(() => {
        inst = new ListLocation.default()
    })

    test("0", () => {
        let callFunction = () => {
            inst.saveLocation()
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("componentDidMount", () => {
    let inst

    beforeEach(() => {
        inst = new ListLocation.default()
    })

    test("0", () => {
        let callFunction = () => {
            inst.componentDidMount()
        }
    
        expect(callFunction).not.toThrow()
    })
})
