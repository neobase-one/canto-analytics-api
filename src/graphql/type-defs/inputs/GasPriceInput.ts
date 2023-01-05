import Decimal from "decimal.js";

export const GasPriceInput = `
input GasPriceInput {
    start: DateTime # unix time
    end: DateTime # unix time
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
