import Decimal from "decimal.js";

export const BaseFeeInput = `
input BaseFeeInput {
    start: DateTime
    end: DateTime
    # seconds
    range: Int
}
`

export interface IBaseFeeInput {
    input: {
        start: string // date time
        end: string // date time
        range: number // seconds
    };
}
