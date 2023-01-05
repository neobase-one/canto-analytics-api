import Decimal from "decimal.js";

export const BaseFeeInput = `
input BaseFeeInput {
    start: DateTime # unix time
    end: DateTime # unix time
    range: Int # seconds
}
`

export interface IBaseFeeInput {
    input: {
        start: string // unix time
        end: string // unix time
        range: number // seconds
    };
}
