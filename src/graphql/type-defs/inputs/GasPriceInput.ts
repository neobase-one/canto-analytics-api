import Decimal from "decimal.js";

export const GasPriceInput = `
input GasPriceInput {
    start: String # unix time
    end: String # unix time
    range: Int # seconds
}
`

export interface IGasPriceInput {
    input: {
        start: string // unix time
        end: string // unix time
        range: number // seconds
    };
}
