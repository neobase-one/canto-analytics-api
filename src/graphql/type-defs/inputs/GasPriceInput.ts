import Decimal from "decimal.js";

export const GasPriceInput = `
input GasPriceInput {
    start: DateTime
    end: DateTime
    # seconds
    range: Int
}
`

export interface IGasPriceInput {
    input: {
        start: string // date time
        end: string // date time
        range: number // seconds
    };
}
