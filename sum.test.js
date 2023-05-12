const sum = require("./sum")

describe("example tests", () => {
    it("should add 1 + 2 to equal 3", () => {
        const result = sum(1, 2)
        expect(result).toBe(3)
    })

    it("object assignment", () => {
        const obj = {}
        expect(obj).toEqual({})
    })
})

describe("truthy or falsy", () => {
    it("null", () => {
        const n = null
        expect(n).toBeFalsy()
        expect(n).not.toBeTruthy()
        expect(n).toBeNull()
        expect(n).not.toBeUndefined()
    })
})